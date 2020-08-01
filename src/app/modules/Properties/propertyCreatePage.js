import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";

export const PropertyCreatePage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  return (
    <>
      <div className="d-flex flex-column-fluid">
        {/* <!--begin::Container--> */}
        <div className="container">
          <div className="card card-custom overflow-hidden">
            <div className="card-body p-0">
              {/* <!-- begin: Invoice-->
              <!-- begin: Invoice header--> */}
              <div className="row justify-content-center py-8 px-8 py-md-15 px-md-0">
                <div className="col-md-11">
                  <div className="d-flex justify-content-between pb-1 pb-md-10 flex-column flex-md-row">
                    <div className="d-flex flex-column flex-root">
                      <h1 className="mt-2 font-weight-light font-size-h3 text-uppercase">
                        Create a new property
                      </h1>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <button
                        type="button"
                        className="btn btn-light-primary font-weight-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                  <form className="form">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <div className="col-md-12 text-center">
                            <div
                              className="w-75 image-input image-input-empty image-input-outline"
                              id="kt_image_5"
                              style={{
                                backgroundImage:
                                  "url(assets/media/users/blank.png)",
                              }}
                            >
                              <div
                                className="image-input-wrapper w-100"
                                style={{ height: "300px" }}
                              ></div>
                              <label
                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                data-action="change"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Change avatar"
                              >
                                <i className="fa fa-pen icon-sm text-muted"></i>
                                <input
                                  type="file"
                                  name="profile_avatar"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <input
                                  type="hidden"
                                  name="profile_avatar_remove"
                                />
                              </label>
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
                            <label className="col-md-12 col-form-label">
                              Cover Picture
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <div className="col-md-6">
                            <button
                              className="btn btn-secondary btn-block p-10"
                              type="submit"
                            >
                              Single Unit
                            </button>
                          </div>
                          <div className="col-md-6">
                            <button
                              className="btn btn-secondary btn-block p-10"
                              type="submit"
                            >
                              Multiple Unit
                            </button>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-form-label col-sm-12">
                            Property Type
                          </label>
                          <div className="col-md-12 col-sm-12">
                            <select
                              className="form-control selectpicker"
                              title="Select"
                            >
                              <option>Property Type 1</option>
                              <option>Property Type 2</option>
                              <option>Property Type 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label>Street Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Input Street Address"
                            />
                          </div>
                          <div className="col-md-6">
                            <label>Address 2</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Input Street Address 2"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-5">
                            <label>City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-4">
                            <label>State</label>
                            <select
                              className="form-control selectpicker"
                              title="Select"
                            >
                              <option>State 1</option>
                              <option>State 2</option>
                              <option>State 3</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label>Zip</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-12">
                            <button
                              type="reset"
                              className="btn btn-primary btn-block"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end::Container--> */}
      </div>
    </>
  );
};
