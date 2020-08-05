import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useSubheader } from "../../../_metronic/layout";
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
  const [unitArray, setUnitArray] = useState([0]);

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
    let unitList = [];

    let requestBody = {};
    for (let entry of formData.entries()) {
      requestBody[entry[0]] = entry[1];
    }
    requestBody.unit_type = unitType;
    requestBody.user_id = user.id;
    if (unitType.toLowerCase() === "m") {
      unitList = unitArray;
    }
    const {
      data: { output },
    } = await createProperty(requestBody, unitList);
    console.log(output);
    history.push("/property/detail/" + output[0].id);
  };

  const setUnitValue = (value, index) => {
    const temp = [...unitArray];
    temp[index] = value;
    setUnitArray(temp);
  };

  const deleteUnitByIndex = (index) => {
    const temp = [...unitArray];
    temp.splice(index, 1);
    setUnitArray(temp);
  };

  const addNewUnit = () => {
    const temp = [...unitArray];
    temp.push("");
    setUnitArray(temp);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Create a new property
              </span>
            </h3>
            <div className="d-flex flex-column flex-root align-items-md-end">
              <NavLink
                className="btn btn-light-primary font-weight-bold"
                to="/properties"
              >
                Cancel
              </NavLink>
            </div>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group row">
                <div className="col-md-5">
                  <div className="form-group row">
                    <div className="col-md-12 text-center">
                      <div
                        className="w-100 image-input image-input-empty image-input-outline"
                        id="kt_image_5"
                        style={{
                          backgroundImage: "url(assets/media/users/blank.png)",
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
                <div className="col-md-7">
                  <div className="pl-3">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <button
                          className={`btn btn-block p-10 ${
                            unitType === "s" ? "btn-success" : "btn-secondary"
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
                            unitType === "m" ? "btn-success" : "btn-secondary"
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
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Address 2</label>
                        <input
                          type="text"
                          name="address2"
                          className="form-control"
                          placeholder="Input Street Address 2"
                          required
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
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label>State</label>
                        <select
                          name="state_id"
                          className="form-control selectpicker"
                          title="Select"
                          required
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
                          required
                        />
                      </div>
                    </div>
                    {/* Multiple unit entry */}
                    {unitType && unitType.toLowerCase() === "m" ? (
                      <>
                        <div className="form-group row mb-3">
                          <div className="col-md-12">
                            <h4>Add units you’ll be managing in Lease Ninja</h4>
                            <p className="m-0">
                              At least one unit is required. You can add more
                              units later.
                            </p>
                          </div>
                        </div>

                        {unitArray.map((x, i) => (
                          <div key={i} className="form-group row mb-3">
                            <label className="col-form-label col-sm-12">
                              Unit Name
                            </label>
                            <div
                              className={`${i > 0 ? "col-sm-11" : "col-sm-12"}`}
                            >
                              <input
                                type="text"
                                className="form-control"
                                required
                                onChange={(e) =>
                                  setUnitValue(e.target.value, i)
                                }
                              />
                            </div>
                            {i > 0 ? (
                              <div className="col-sm-1">
                                <a
                                  className="btn btn-primary btn-link btn-block text-left"
                                  onClick={() => deleteUnitByIndex(i)}
                                >
                                  X
                                </a>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                        <div className="form-group row mb-3">
                          <a
                            className="btn btn-link btn-block text-left"
                            onClick={() => addNewUnit()}
                          >
                            Add another unit
                          </a>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    {/* End Multiple unit entry */}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
