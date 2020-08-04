import React, { useEffect, useState } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { useHistory } from "react-router";
import { getPropertyById } from "./propertyCrud";
import { shallowEqual, useSelector } from "react-redux";

export const PropertyEditPage = (props) => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Edit");
  let history = useHistory();

  const propertyId = props.match.params.id;

  if (!propertyId) {
    history.push("/properties");
  }

  const [propertyDet, setPropertyDet] = useState([]);

  const { user } = useSelector(
    ({ auth }) => ({
      user: auth.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    (async () => {
      const {
        data: { output },
      } = await getPropertyById(propertyId, user.id);
      console.log(output);
      setPropertyDet(...propertyDet, output[0]);
    })();
  }, []);

  return (
    <>
      <div className="d-flex flex-column-fluid">
        {/* <!--begin::Container--> */}
        <div className="container">
          <div>
            <div>
              {/* <!-- begin: Invoice-->
              <!-- begin: Invoice header--> */}
              <div>
                <div className="col-md-12">
                  <div className="card card-custom card-stretch gutter-b">
                    <div className="card-header py-5">
                      <div className="d-flex flex-column flex-root">
                        <span className="mt-2 font-weight-light font-size-h1 text-uppercase text-dark">
                          Edit property
                        </span>
                        <span className="mt-2 font-weight-light font-size-h3 text-uppercase">
                          {propertyDet.street_address}
                        </span>
                      </div>
                      <div className="d-flex flex-column flex-root align-items-md-end">
                        <button
                          type="button"
                          className="btn btn-light-primary font-weight-bold"
                          onClick={(e) =>
                            history.push("/property/view/" + propertyId)
                          }
                        >
                          Done
                        </button>
                      </div>
                    </div>

                    <div className="card-body">
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
                                  <button className="btn btn-default">
                                    Update a cover photo
                                  </button>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <div className="col-md-6">
                                <label className="col-form-label col-sm-12 p-0 font-size-h4">
                                  Property Address
                                </label>
                                <p>
                                  {propertyDet.street_address},{" "}
                                  {propertyDet.street_address}{" "}
                                </p>
                                <button
                                  className="btn btn-secondary"
                                  type="submit"
                                >
                                  Edit Address
                                </button>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-form-label col-sm-12 font-size-h4">
                                Property Type
                              </label>
                              <p>{propertyDet.property_type}</p>
                              <div className="col-md-12 col-sm-12">
                                <button
                                  className="btn btn-secondary"
                                  type="submit"
                                >
                                  Edit Type
                                </button>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-6">
                                <div class="form-group">
                                  <label className="font-size-h4">
                                    {propertyDet.unit === "s"
                                      ? "Single Unit"
                                      : "Multi Unit"}
                                  </label>
                                  <div class="col-sm-10 p-0">
                                    <div class="form-check">
                                      <input
                                        name="formHorizontalRadios"
                                        type="radio"
                                        id="formHorizontalRadios1"
                                        class="form-check-input"
                                      />
                                      <label
                                        title=""
                                        for="formHorizontalRadios1"
                                        class="form-check-label"
                                      >
                                        Upcoming Rent
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input
                                        name="formHorizontalRadios"
                                        type="radio"
                                        id="formHorizontalRadios2"
                                        class="form-check-input"
                                      />
                                      <label
                                        title=""
                                        for="formHorizontalRadios2"
                                        class="form-check-label"
                                      >
                                        Active Listing
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 text-right">
                                <p> Add Unit | Move Unit </p>
                                <p> View Payment </p>
                                <p> View Listing </p>
                              </div>
                            </div>
                            <div className="form-group row justify-content-end">
                              <button
                                type="button"
                                class="btn btn-light-primary font-weight-bold"
                              >
                                Delete Property
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
