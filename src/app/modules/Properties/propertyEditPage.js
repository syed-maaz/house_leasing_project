import React, { useEffect, useState, useContext } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { useHistory } from "react-router";
import {
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "./propertyCrud";

import { createUnit } from "../unit/unitCrud";

import { shallowEqual, useSelector } from "react-redux";

import { Modal } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { MetronicSplashScreenContext } from "../../../_metronic/layout/_core/MetronicSplashScreen";

import { FileUploadComponent } from "../../common/component/fileUploadComponent";

import {
  getDropdownValues,
  GET_PROPERTY_TYPE,
  GET_STATES,
} from "../../common/crud/dropdownCrud";

export const PropertyEditPage = (props) => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Edit");
  const history = useHistory();
  const setSplashScreen = useContext(MetronicSplashScreenContext);

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

  const [showSuccessBox, setShowSuccessBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newUnitName, setNewUnitName] = useState("");
  const [showUnitBox, setShowUnitBox] = useState(false);

  const { user } = useSelector(
    ({ auth }) => ({
      user: auth.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    setSplashScreen(true);

    (async () => {
      const {
        data: { output },
      } = await getPropertyById(propertyId, user.id);
      setPropertyDet(...propertyDet, output[0]);
      setCopyPropertyDet(...copyPropertyDet, output[0]);
      setSplashScreen(false);
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

  const handleClose = () => setShowUnitBox(false);
  const handleShow = () => setShowUnitBox(true);

  const handlePropertySubmit = async (e) => {
    e.preventDefault();

    setShowSuccessBox(false);
    const requestObject = { ...copyPropertyDet };
    requestObject.unit_type = requestObject.unit;

    delete requestObject.state_name;
    delete requestObject.property_type;
    delete requestObject.unit;

    const response = await updateProperty(requestObject, propertyId, user.id);
    if (response.status === 200) {
      setShowEditAddressPanel(!showEditAddressPanel);
      setShowSuccessBox(true);
    }
  };

  const handlePropertyTypeSubmit = async (e) => {
    e.preventDefault();

    setShowSuccessBox(false);
    setShowSuccessBox(true);
  };

  const handleDeleteProperty = async () => {
    setIsLoading(true);
    const response = await deleteProperty(propertyId, user.id);

    if (response.status === 200) {
      history.push("/properties");
    }
  };

  const handleImageUpdate = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const requestObject = { ...copyPropertyDet };
    requestObject.unit_type = requestObject.unit;

    delete requestObject.state_name;
    delete requestObject.property_type;
    delete requestObject.unit;

    const response = await updateProperty(requestObject, propertyId, user.id);

    if (response.status === 200) {
      history.push("/properties");
    }
  };

  const handleUnitSave = async (e) => {
    e.preventDefault();

    const requestObject = {
      unit_name: newUnitName,
      property_id: propertyId,
    };
    const response = await createUnit(requestObject);

    if (response.status === 200) {
      console.log(response);
      setShowUnitBox(false);
    }
  };

  return (
    <>
      <div className="col-lg-12">
        <Alert
          variant="success"
          onClose={() => setShowSuccessBox(false)}
          dismissible
          show={showSuccessBox}
        >
          Success
        </Alert>
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Edit Property
              </span>
            </h3>
            <div className="d-flex flex-column flex-root align-items-md-end">
              <form onSubmit={handleImageUpdate}>
                <button className="btn btn-light-primary font-weight-bold">
                  Done
                </button>
              </form>
            </div>
          </div>
          <div className="card-body">
            {isLoading ? (
              <div className="text-center pb-5">
                <h4 className="m-0">
                  <img
                    src={toAbsoluteUrl("/media/svg/icons/Code/Loading.svg")}
                  />
                  Saving ...
                </h4>
              </div>
            ) : (
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
                                className="btn btn-light-primary font-weight-bold"
                              >
                                Save Address
                              </button>
                              <a
                                className="btn btn-light-danger font-weight-bold ml-3"
                                onClick={(e) =>
                                  setShowEditAddressPanel(!showEditAddressPanel)
                                }
                              >
                                Cancel
                              </a>
                            </div>
                          </div>
                        </form>
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
                        <form onSubmit={handlePropertyTypeSubmit}>
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
                                type="submit"
                                className="btn btn-light-primary font-weight-bold"
                              >
                                Save Type
                              </button>
                              <a
                                className="btn btn-light-danger font-weight-bold ml-3"
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
                      ) : (
                        ""
                      )}

                      <div className="form-group row mt-15">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <p className="font-size-h3">
                                {!!propertyDet.unit &&
                                propertyDet.unit.toLowerCase() === "s"
                                  ? "Single Unit"
                                  : "Multi Unit"}
                              </p>
                            </div>
                            <div className="col-md-6 text-right pr-0">
                              <button
                                type="button"
                                className="btn btn-link p-0 pb-2 pt-1"
                                onClick={handleShow}
                              >
                                Add Unit
                              </button>
                              {!!propertyDet.unit &&
                              propertyDet.unit.toLowerCase() === "m" ? (
                                <>
                                  {" "}
                                  |{" "}
                                  <button
                                    className="btn btn-link p-0 pb-2 pt-1"
                                    onClick={(e) =>
                                      history.push(
                                        `/property/detail/${propertyId}#units`
                                      )
                                    }
                                  >
                                    View Unit
                                  </button>
                                </>
                              ) : (
                                ""
                              )}

                              {/* |
                              <button className="btn btn-link p-0 pb-2 pt-1">
                                Move Unit
                              </button> */}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  name="formHorizontalRadios"
                                  type="radio"
                                  id="formHorizontalRadios1"
                                  className="form-check-input"
                                />
                                <label
                                  title=""
                                  htmlFor="formfHorizontalRadios1"
                                  className="form-check-label"
                                >
                                  Rent
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 text-right pr-0">
                              <button
                                type="button"
                                className="btn btn-link p-0 pb-2 pt-1"
                              >
                                View Payment
                              </button>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check pt-3">
                                <input
                                  name="formHorizontalRadios"
                                  type="radio"
                                  id="formHorizontalRadios2"
                                  className="form-check-input"
                                />
                                <label
                                  title=""
                                  htmlFor="formHorizontalRadios2"
                                  className="form-check-label"
                                >
                                  Listing
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 text-right pr-0">
                              <button
                                type="button"
                                className="btn btn-link p-0 pb-2 pt-1"
                              >
                                View Listing
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row justify-content-end">
                        <button
                          type="button"
                          className="btn btn-light-danger font-weight-bold"
                          onClick={handleDeleteProperty}
                        >
                          Delete Property
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal show={showUnitBox} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add a new unit to {copyPropertyDet.street_address}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleUnitSave}>
          <Modal.Body>
            <div className="form-group row mb-0">
              <div className="col-md-12">
                <label>Unit Name</label>
                <input
                  name="unit"
                  type="text"
                  className="form-control"
                  placeholder="Apt, Suite, etc."
                  onChange={(e) => {
                    setNewUnitName(e.target.value);
                  }}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              className="btn btn-light-primary font-weight-bold"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-light-danger font-weight-bold ml-3"
              onClick={handleClose}
            >
              Close
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
