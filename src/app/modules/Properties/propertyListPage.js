import React, { useEffect, useState } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";
import { DropdownCustomToggler } from "../../../_metronic/_partials/dropdowns";
import { getAllPropertiesByUserId } from "./propertyCrud";

export const PropertyListPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  let history = useHistory();

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // code to run on component mount
    (async () => {
      const {
        data: { output },
      } = await getAllPropertiesByUserId(1);

      setProperties(...properties, output);
    })();
  }, []);

  const renderPropertyMenuDropdown = (id) => {
    return (
      <Dropdown className="dropdown-inline" alignRight>
        <Dropdown.Toggle
          className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
          variant="transparent"
          id="dropdown-toggle-top"
          as={DropdownCustomToggler}
        >
          <i className="ki ki-bold-more-hor" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <Dropdown.Item eventKey="1">Payment</Dropdown.Item>
          <Dropdown.Item eventKey="2">Listings</Dropdown.Item>
          <Dropdown.Item eventKey="3">Applications</Dropdown.Item>
          <Dropdown.Item eventKey="4">Edit Property</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const propertyCard = (items) => {
    return (
      <>
        {items.map((item, index) => (
          <div key={index} className="col-md-4" style={{ cursor: "pointer" }}>
            <div className="card-custom gutter-b card-stretch border">
              <div className="card-body p-0 position-relative">
                <div
                  className="position-absolute"
                  style={{ top: "0", right: 0 }}
                >
                  {renderPropertyMenuDropdown(item.property_id)}
                </div>

                <div>
                  <div className="symbol-lg-100">
                    <img
                      className="w-100"
                      src={toAbsoluteUrl(
                        !!item.image_url
                          ? item.property_id
                          : "/media/property-blank.png"
                      )}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="d-flex flex-column flex-root p-3">
                  <span className="font-weight-bold mb-1 font-size-h6 text-dark-50">
                    {`${item.street_address} ${item.state_name}`}, Unit{" "}
                    {item.unit}, {item.property_type}
                  </span>
                  <span className="opacity-70 font-size-sm">Jerry Mattedi</span>
                </div>
                <div className="form-group pl-3 pr-3">
                  <div className="row">
                    <div className="col-lg-6 pr-0">
                      <label className="option option-plain mb-0">
                        <span className="option-control">
                          <span className="radio">
                            <input
                              type="radio"
                              name={`m_option_1_${index}`}
                              value="1"
                              checked="checked"
                              readOnly
                            />
                            <span></span>
                          </span>
                        </span>
                        <span className="option-label">
                          <span className="option-head">
                            <span className="option-title font-weight-lighter font-size-xs">
                              Upcoming Rent
                            </span>
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <label className="option option option-plain mb-0">
                        <span className="option-control">
                          <span className="radio">
                            <input type="radio" name="m_option_1" value="1" />
                            <span></span>
                          </span>
                        </span>
                        <span className="option-label">
                          <span className="option-head">
                            <span className="option-title font-weight-lighter font-size-xs">
                              Listing
                            </span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom overflow-hidden">
            <div className="card-body p-0">
              <div className="row justify-content-center py-8 px-8 py-md-15 px-md-0">
                <div className="col-md-11">
                  <div className="d-flex justify-content-between pb-1 pb-md-10 flex-column flex-md-row">
                    <div className="d-flex flex-column flex-root">
                      <h1 className="mb-2 font-weight-light font-size-h1 text-uppercase">
                        Properties
                      </h1>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <NavLink
                        className="btn btn-light-primary font-weight-bold"
                        to="/property/new"
                      >
                        Create Property
                      </NavLink>
                    </div>
                  </div>

                  <div className="row">{propertyCard(properties)}</div>
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
