import React, { useEffect, useState } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { useHistory } from "react-router";
import {
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "./propertyCrud";
import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Modal, Header, Title, Body, Footer, Button } from "react-bootstrap";

import { FileUploadComponent } from "../../common/component/fileUploadComponent";

import {
  getDropdownValues,
  GET_PROPERTY_TYPE,
  GET_STATES,
} from "../../common/crud/dropdownCrud";

export const PropertyEditPage = (props) => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Edit");
  let history = useHistory();

  const propertyId = props.match.params.id;

  if (!propertyId) {
    history.push("/properties");
  }

  const [propertyDet, setPropertyDet] = useState([]);
  const [copyPropertyDet, setCopyPropertyDet] = useState([]);
  const [showEditAddressPanel, setShowEditAddressPanel] = useState(false);
  const [showPropertyTypePanel, setShowPropertyTypePanel] = useState(false);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [fileName, setFileName] = useState("");

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
      setPropertyDet(...propertyDet, output[0]);
      setCopyPropertyDet(...copyPropertyDet, output[0]);
    })();

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePropertySubmit = async (e) => {
    e.preventDefault();

    const requestObject = { ...copyPropertyDet };
    requestObject.unit_type = requestObject.unit;

    delete requestObject.state_name;
    delete requestObject.property_type;
    delete requestObject.unit;

    const response = await updateProperty(requestObject, propertyId, user.id);

    if (response.state === 200) {
      setShowEditAddressPanel(!showEditAddressPanel);
    }
  };

  const handleDeleteProperty = async () => {
    const response = await deleteProperty(propertyId, user.id);

    if (response.status === 200) {
      history.push("/properties");
    }
  };

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Edit Property
              </span>
            </h3>
            <div className="d-flex flex-column flex-root align-items-md-end">
              <NavLink
                className="btn btn-light-primary font-weight-bold"
                to="/properties"
              >
                Done
              </NavLink>
            </div>
          </div>
          <div className="card-body">
            <div className="form">
              <div className="form-group row">
                <div className="col-md-5">
                  <FileUploadComponent
                    fileName={propertyDet.image_url}
                    uploadedFileName={(v) => {
                      const val = v;
                      setCopyPropertyDet((prev) => {
                        return {
                          ...prev,
                          image_url: val,
                        };
                      });
                    }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="pl-3">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label className="col-form-label col-sm-12 p-0 font-size-h3">
                          Property Address
                        </label>
                        <p>
                          {propertyDet.street_address}, {propertyDet.city}
                        </p>
                        <a
                          className="btn btn-secondary"
                          onClick={(e) =>
                            setShowEditAddressPanel(!showEditAddressPanel)
                          }
                        >
                          Edit Address
                        </a>
                      </div>
                    </div>
                    {showEditAddressPanel ? (
                      <div className="col-sm-12">
                        <form onSubmit={handlePropertySubmit}>
                          <div className="form-group row">
                            <div className="col-md-6">
                              <label>Street Address</label>
                              <input
                                type="text"
                                value={copyPropertyDet.street_address}
                                name="street_address"
                                className="form-control"
                                placeholder="Input Street Address"
                                required
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setCopyPropertyDet((prev) => {
                                    return {
                                      ...prev,
                                      street_address: val,
                                    };
                                  });
                                }}
                              />
                            </div>
                            <div className="col-md-6">
                              <label>Address 2</label>
                              <input
                                type="text"
                                name="address2"
                                value={copyPropertyDet.address2}
                                className="form-control"
                                placeholder="Input Street Address 2"
                                required
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setCopyPropertyDet((prev) => {
                                    return {
                                      ...prev,
                                      address2: val,
                                    };
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-md-5">
                              <label>City</label>
                              <input
                                name="city"
                                type="text"
                                value={copyPropertyDet.city}
                                className="form-control"
                                required
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setCopyPropertyDet((prev) => {
                                    return {
                                      ...prev,
                                      city: val,
                                    };
                                  });
                                }}
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
                                value={copyPropertyDet.zip}
                                className="form-control"
                                required
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setCopyPropertyDet((prev) => {
                                    return {
                                      ...prev,
                                      zip: val,
                                    };
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="form-group row justify-content-end">
                            <div className="col-md-12">
                              <button
                                type="submit"
                                class="btn btn-light-primary font-weight-bold"
                              >
                                Save Address
                              </button>
                              <a
                                class="btn btn-light-danger font-weight-bold ml-3"
                                onClick={(e) =>
                                  setShowEditAddressPanel(!showEditAddressPanel)
                                }
                              >
                                Cancel
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="form-group row mb-3">
                      <div className="col-md-6">
                        <label className="col-form-label col-sm-12 font-size-h3 p-0">
                          Property Type
                        </label>
                        <p>{propertyDet.property_type}</p>
                        <div className="col-md-12 col-sm-12 p-0">
                          <a
                            className="btn btn-secondary"
                            onClick={(e) =>
                              setShowPropertyTypePanel(!showPropertyTypePanel)
                            }
                          >
                            Edit Type
                          </a>
                        </div>
                      </div>
                    </div>

                    {showPropertyTypePanel ? (
                      <div className="col-sm-12">
                        <form>
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
                          <div className="form-group row justify-content-end">
                            <div className="col-md-12">
                              <button
                                type="button"
                                class="btn btn-light-primary font-weight-bold"
                              >
                                Save Type
                              </button>
                              <a
                                class="btn btn-light-danger font-weight-bold ml-3"
                                onClick={(e) =>
                                  setShowPropertyTypePanel(
                                    !showPropertyTypePanel
                                  )
                                }
                              >
                                Cancel
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="form-group row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <label className="font-size-h3">
                            {!!propertyDet.unit &&
                            propertyDet.unit.toLowerCase() === "s"
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
                            <div class="form-check pt-3">
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
                      <div className="col-md-6 text-right pr-0">
                        <button
                          type="button"
                          className="btn btn-link p-0 pb-2 pt-1"
                          onClick={handleShow}
                        >
                          Add Unit
                        </button>{" "}
                        |{" "}
                        <button className="btn btn-link p-0 pb-2 pt-1">
                          Move Unit
                        </button>
                        <br />
                        <button className="btn btn-link p-0 pb-2">
                          View Payment
                        </button>
                        <br />
                        <button className="btn btn-link p-0 pb-2">
                          View Listing
                        </button>
                      </div>
                    </div>
                    <div className="form-group row justify-content-end">
                      <button
                        type="button"
                        class="btn btn-light-primary font-weight-bold"
                        onClick={handleDeleteProperty}
                      >
                        Delete Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new unit to NY-27</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group row mb-0">
            <div className="col-md-12">
              <label>Unit Name</label>
              <input
                name="city"
                type="text"
                className="form-control"
                placeholder="Apt, Suite, etc."
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-light-primary font-weight-bold"
            onClick={handleClose}
          >
            Save Changes
          </button>
          <button
            type="button"
            class="btn btn-light-danger font-weight-bold ml-3"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
