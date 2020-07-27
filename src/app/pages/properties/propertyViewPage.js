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
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="col-md-12">
            <div className="card card-custom card-stretch gutter-b">
              <div className="card-body">
                <div className="d-flex justify-content-between pb-15">
                  <div className="d-flex flex-column flex-root">
                    <img
                      src="/media/property-blank.png"
                      style={{ width: "100%", height: "537" }}
                    />
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2" style={{ height: "260px" }}>
                        <img
                          src="/media/property-blank.png"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="p-2" style={{ height: "260px" }}>
                        <img
                          src="/media/property-blank.png"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-15">
                  <div className="col-md-12">
                    <div className="col-md-6">sdsd</div>
                    <div className="col-md-6">sdsd</div>
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
