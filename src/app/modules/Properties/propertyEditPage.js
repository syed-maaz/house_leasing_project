import React, { useEffect, useState } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { useHistory } from "react-router";
import { getPropertyById } from "./propertyCrud";
import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Modal, Header, Title, Body, Footer, Button } from 'react-bootstrap';

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <form className="form">
              <div className="form-group row">
                <div className="col-md-5">
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
                <div className="col-md-7">
                  <div className="pl-3">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label className="col-form-label col-sm-12 p-0 font-size-h3">
                          Property Address
                        </label>
                        <p>
                          {propertyDet.street_address},{" "}
                          {propertyDet.city}
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
                          <option>UK</option>
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
                    <div className="form-group row justify-content-end">
                      <div className="col-md-12">
                        <button
                          type="button"
                          class="btn btn-light-primary font-weight-bold"
                        >
                          Save Address
                        </button>
                        <button
                          type="button"
                          class="btn btn-light-danger font-weight-bold ml-3"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div className="form-group row mb-3">
                      <div className="col-md-6">
                        <label className="col-form-label col-sm-12 font-size-h3 p-0">
                          Property Type
                        </label>
                        <p>{propertyDet.property_type}</p>
                        <div className="col-md-12 col-sm-12 p-0">
                          <button
                            className="btn btn-secondary"
                            type="submit"
                          >
                            Edit Type
                          </button>
                        </div>
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
                          <option>Flat</option>
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
                        <button
                          type="button"
                          class="btn btn-light-danger font-weight-bold ml-3"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
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
                        <button type="button" className="btn btn-link p-0 pb-2 pt-1" onClick={handleShow}>Add Unit</button> | <button className="btn btn-link p-0 pb-2 pt-1">Move Unit</button><br />
                        <button className="btn btn-link p-0 pb-2">View Payment</button><br />
                        <button className="btn btn-link p-0 pb-2">View Listing</button>
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
              </div>
            </form>
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
