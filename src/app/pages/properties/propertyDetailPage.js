import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";

export const PropertyDetailPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          <div className="card-header">
            <div className="card-title">
              <h3 className="card-label">Property Detail</h3>
            </div>
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="root d-flex">
                  <div className="d-flex flex-column flex-root mb-10">
                    <span className="font-weight-bold mb-2 font-size-h4 text-dark-50">
                      3302 Villa Dr, 1 Unit
                    </span>
                    <span className="opacity-70 font-size-h6">Jerry Smith</span>
                  </div>
                  <div className="d-flex flex-column flex-root justify-content-center mb-10">
                    <NavLink
                      className=" btn btn-light-primary font-weight-bold  ml-2"
                      to="/property/edit"
                    >
                      Edit Property
                    </NavLink>
                  </div>
                </div>
                <Tabs defaultActiveKey="transcations">
                  <Tab eventKey="transcations" title="Payments">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="border pt-6 pr-6 pl-6 pb-4">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <p>payments</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tenants" title="Listing">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="d-flex justify-content-between mt-10 mb-5"></div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="rentalDetails" title="Applications">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <p>Listing</p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
