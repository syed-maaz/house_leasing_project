import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export const PropertyViewPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Properties View
              </span>
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "400px",
                      width: "auto",
                      height: "auto"
                    }}
                    src={toAbsoluteUrl("/media/view-property/1.jpg")}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-10 pb-8 border-bottom w-100">
              <div className="col-md-9">
                <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                  <div className="d-flex flex-column mb-10 mb-md-0 text-md-left">
                    <h5>35 W 51st, Unit 1</h5>
                    <h5>Chattanooga, TN</h5>
                    <h3 className="font-weight-bold mt-10">$1000.00 <span className="font-size-h6">/month</span></h3>
                  </div>

                  <div className="d-flex flex-column text-md-right">
                    <h5>3 Bed | 4 Full Half Bath | 500 sq ft</h5>
                    <h6>Dormitory | Cats and dogs are OK</h6>
                    <div className="mt-10">
                      <button type="button" class="btn btn-light-primary mr-5">See more by this lordland</button>
                      <button type="button" class="btn btn-light-primary">Share Listing</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-8 pb-8 border-bottom w-100">
              <div className="col-md-9">
                <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                  <div className="d-flex flex-column mb-10 mb-md-0 text-md-left">
                    <h3>Great House</h3>
                    <h5 className="mt-6">Move-in Details</h5>
                    <p>Security Deposit: <span className="font-weight-bold">$500.00</span></p>
                  </div>

                  <div className="d-flex flex-column text-md-right">
                    <h3>&nbsp;</h3>
                    <h5 className="mt-6">Application Requirements</h5>
                    <p className="m-0">Credit Report</p>
                    <p className="m-0">Background Check</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-8 pb-8 border-bottom w-100">
              <div className="col-md-9">
                <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                  <div className="d-flex flex-column mb-10 mb-md-0 text-md-left">
                    <h3>Features and Amenities</h3>
                    <p className="m-0">Storage</p>
                    <p className="m-0">Garage</p>
                    <p className="m-0">Yard</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-8 pb-8 border-bottom w-100">
              <div className="col-md-9">
                <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                  <div className="d-flex flex-column mb-10 mb-md-0 text-md-left">
                    <h3>Other Observations</h3>
                    <p className="m-0">Comment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-8 pb-8 w-100">
              <div className="col-md-9">
                <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                  <div className="d-flex flex-column mb-10 mb-md-0 text-md-left">
                    <h3>Location</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-8 pb-8 w-100">
              <div className="col-md-9">
                <div className="text-right">
                  <div className="mt-10">
                    <button type="button" class="btn btn-light-primary mr-5">Schedule Tour</button>
                    <button type="button" class="btn btn-light-primary">Apply Now</button>
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
