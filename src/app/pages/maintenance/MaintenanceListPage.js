import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";

export const MaintenanceList = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("LeaseNinja | Maintenance");

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
                      <span className="d-flex flex-column  mt-3 p-2 text-uppercase">
                        Open (2)
                      </span>
                      <span className="d-flex flex-column mt-3 p-2 text-uppercase">
                        Close (0)
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
                <div className="border p-6 mb-5">
                  <div className="d-flex justify-content-between mb-0">
                    <div className="d-flex flex-column flex-root">
                      <h4 className="font-weight-bold mb-2 font-size-h5 text-dark-50">
                        Broken Dishwasher
                      </h4>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        55 Cannary Ln
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <span className="opacity-70 font-size-sm font-weight-light">
                        <NavLink
                          className="btn btn-light-primary font-weight-bold"
                          to="/maintenance/detail"
                        >
                          View
                        </NavLink>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Created On 11 June 2019 By Mika
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Unit 1
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end"></div>
                  </div>
                </div>
                <div className="border p-6 mb-5">
                  <div className="d-flex justify-content-between mb-0">
                    <div className="d-flex flex-column flex-root">
                      <h4 className="font-weight-bold mb-2 font-size-h5 text-dark-50">
                        Broken Dishwasher
                      </h4>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        55 Cannary Ln
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <span className="opacity-70 font-size-sm font-weight-light">
                        <NavLink
                          className="btn btn-light-primary font-weight-bold"
                          to="/maintenance/detail"
                        >
                          View
                        </NavLink>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Created On 11 June 2019 By Mika
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Unit 1
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
