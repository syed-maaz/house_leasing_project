import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { createProperty } from "./propertyCrud";
import { useHistory } from "react-router-dom";

import {
  getDropdownValues,
  GET_PROPERTY_TYPE,
  GET_STATES,
} from "../../common/crud/dropdownCrud";

export const PropertyCreatePage = () => {
  let history = useHistory();
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  const [unitType, setUnitType] = useState("s");
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    // code to run on component mount
    (async () => {
      const {
        data: { output },
      } = await getDropdownValues(GET_PROPERTY_TYPE);
      setPropertyTypes(...propertyTypes, output);
    })();

    (async () => {
      const {
        data: { output },
      } = await getDropdownValues(GET_STATES);
      setStateList(...stateList, output);
    })();
  }, []);

  const { user } = useSelector(
    ({ auth }) => ({
      user: auth.user,
    }),
    shallowEqual
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let requestBody = {};
    for (let entry of formData.entries()) {
      requestBody[entry[0]] = entry[1];
    }
    requestBody.unit_type = unitType;
    requestBody.user_id = user.id;
    const {
      data: { output },
    } = await createProperty(requestBody);
    console.log(output);
    history.push("/property/detail/" + output[0].id);
  };

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
                      <NavLink
                        className="btn btn-light-primary font-weight-bold"
                        to="/properties"
                      >
                        Cancel
                      </NavLink>
                    </div>
                  </div>

                  <form className="form" onSubmit={handleSubmit}>
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
                                  // name="profile_avatar"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <input
                                  type="hidden"
                                  // name="profile_avatar_remove"
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
                              className={`btn btn-block p-10 ${
                                unitType === "s"
                                  ? "btn-success"
                                  : "btn-secondary"
                              }`}
                              type="button"
                              onClick={(e) => setUnitType("s")}
                            >
                              Single Unit
                            </button>
                          </div>
                          <div className="col-md-6">
                            <button
                              className={`btn btn-block p-10 ${
                                unitType === "m"
                                  ? "btn-success"
                                  : "btn-secondary"
                              }`}
                              type="button"
                              onClick={(e) => setUnitType("m")}
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
                              name="property_type_id"
                              className="form-control selectpicker"
                              title="Select"
                            >
                              {propertyTypes.map((item, index) => (
                                <option key={index} value={item.type_id}>
                                  {item.property_type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label>Street Address</label>
                            <input
                              type="text"
                              name="street_address"
                              className="form-control"
                              placeholder="Input Street Address"
                            />
                          </div>
                          <div className="col-md-6">
                            <label>Address 2</label>
                            <input
                              type="text"
                              name="address2"
                              className="form-control"
                              placeholder="Input Street Address 2"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-5">
                            <label>City</label>
                            <input
                              name="city"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>State</label>
                            <select
                              name="state_id"
                              className="form-control selectpicker"
                              title="Select"
                            >
                              {stateList.map((item, i) => (
                                <option key={i} value={item.state_id}>
                                  {item.state_name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label>Zip</label>
                            <input
                              name="zip"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-12">
                            <button
                              type="submit"
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
