import React, { useState, useEffect } from "react";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink, Link } from "react-router-dom";
import { getTickets } from "../../common/crud/freshdesk";
import { Auth } from "aws-amplify";
import { format } from "date-fns";

export const MaintenanceList = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("LeaseNinja | Maintenance");
  const [status, setStatus] = useState(2);
  const [list, setList] = useState([]);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      getTickets(user).then(res => {
        setList(res.data);
      });
    });
  }, []);

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Maintenance
              </span>
            </h3>
          </div>
          {/* Body */}
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="d-flex justify-content-between pb-5">
                  <div className="d-flex flex-column flex-root p-3">
                    <div class="d-inline-flex p-3">
                      <span
                        className={"nav-clickable d-flex flex-column  mt-3 p-2 text-uppercase" + (status === 2 ? " active" : "")}
                        onClick={() => setStatus(2)}
                      >
                        Open ({list.filter(e => e.status === 2).length})
                      </span>
                      <span
                        className={"nav-clickable d-flex flex-column mt-3 p-2 text-uppercase" + (status === 5 ? " active" : "")}
                        onClick={() => setStatus(5)}
                      >
                        Close ({list.filter(e => e.status === 5).length})
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-root"></div>
                  <div className="d-flex flex-column flex-root">
                    <div className="d-flex flex-row-reverse">
                      <NavLink
                        className="btn btn-light-primary font-weight-bold"
                        to="/maintenance/new"
                      >
                        New Request
                      </NavLink>
                    </div>
                  </div>
                </div>
                {list
                  .filter(e => e.status === status)
                  .map(ticket => (
                    <Link
                      to={`/maintenance/detail/${ticket.id}`}
                    >
                      <div className="border p-6 mb-5">
                        <div className="d-flex justify-content-between mb-0">
                          <div className="d-flex flex-column flex-root">
                            <h4 className="font-weight-bold mb-2 font-size-h5 text-dark-50">
                              {ticket.subject}
                            </h4>
                          </div>
                          <div className="d-flex flex-column flex-root align-items-md-end">
                            <span className="font-weight-bold mb-2 font-size-h6 text-dark-50 text-right">
                              {ticket.custom_fields.cf_location_address}
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-root align-items-md-end">
                            <span className="d-flex flex-column opacity-70 font-size-sm font-weight-light font-dark">
                              {
                                ticket.status === 5 &&
                                <span className="font-weight-bold mb-2 font-size-h6 text-dark-50 text-right">
                                  Closed {format(new Date(ticket.updated_at), "MMM dd, yyyy")}
                                </span>
                              }
                            </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-column flex-root">
                            <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                              Created On{" "}
                              {format(new Date(ticket.created_at), "MMM dd, yyyy")}{" "}
                            By {ticket.requester.name}
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-root align-items-md-end">
                            <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                              Unit {ticket.custom_fields.cf_location_unit}
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-root align-items-md-end"></div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
