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
                <div className="form-group row">
                  <div className="col-md-8">
                    <div className="form-group row">
                      <div className="col-md-12 text-center">
                        <div
                          className="w-100 image-input image-input-empty image-input-outline"
                          id="kt_image_5"
                          style={{
                            backgroundImage:
                              "url(assets/media/users/blank.png)",
                          }}
                        >
                          <div
                            className="image-input-wrapper w-100"
                            style={{ height: "400px" }}
                          ></div>
                          <span
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="cancel"
                            data-toggle="tooltip"
                            title="Cancel avatar"
                          >
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                          </span>
                          <span
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="remove"
                            data-toggle="tooltip"
                            title="Remove avatar"
                          >
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group row mb-5">
                      <div className="col-md-12 text-center">
                        <div
                          className="w-100 image-input image-input-empty image-input-outline"
                          id="kt_image_5"
                          style={{
                            backgroundImage:
                              "url(assets/media/users/blank.png)",
                          }}
                        >
                          <div
                            className="image-input-wrapper w-100"
                            style={{ height: "180px" }}
                          ></div>
                          <span
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="cancel"
                            data-toggle="tooltip"
                            title="Cancel avatar"
                          >
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                          </span>
                          <span
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="remove"
                            data-toggle="tooltip"
                            title="Remove avatar"
                          >
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12 text-center">
                        <div
                          className="w-100 image-input image-input-empty image-input-outline"
                          id="kt_image_5"
                          style={{
                            backgroundImage:
                              "url(assets/media/users/blank.png)",
                          }}
                        >
                          <div
                            className="image-input-wrapper w-100"
                            style={{ height: "180px" }}
                          ></div>
                          <span
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="cancel"
                            data-toggle="tooltip"
                            title="Cancel avatar"
                          >
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                          </span>
                          <span
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="remove"
                            data-toggle="tooltip"
                            title="Remove avatar"
                          >
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group row pr-20 pl-20 border-bottom">
                  <div className="col-md-6">
                    <div className="row">
                      <h3 className="text-right">35 W 51st, Unit 1</h3>
                    </div>
                    <div className="row">
                      <h5 className="text-right">Chattanooga, TN</h5>
                    </div>
                    <div className="row mt-10">
                      <span className="font-weight-bold font-size-h1">
                        $1000.00
                      </span>
                      per month
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="row">
                      <h3>3 Bed | 4 Full Half Bath | 500 sq ft</h3>
                    </div>
                    <div className="row">
                      <h6>Dormitory | Cats and dogs are OK</h6>
                    </div>
                    <div className="row mt-10">
                      <button className="btn btn-default mr-5">
                        See more by this lordland
                      </button>
                      <button className="btn btn-default">Share Listing</button>
                    </div>
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
