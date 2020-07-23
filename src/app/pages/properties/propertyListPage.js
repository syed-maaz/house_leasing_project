import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export const PropertyListPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  let history = useHistory();

  function handleRedirect() {
    history.push("/property/detail");
  }

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

                  <div className="row">
                    {/* <!--begin::Col--> */}
                    <div
                      className="col-md-4"
                      style={{ cursor: "pointer" }}
                      onClick={handleRedirect}
                    >
                      {/* <!--begin::Card--> */}
                      <div className="card-custom gutter-b card-stretch border">
                        {/* <!--begin::Body--> */}
                        <div className="card-body p-0">
                          {/* <!--begin::Toolbar--> */}
                          <div className="position-absolute">
                            <div
                              className="dropdown dropdown-inline"
                              title="Quick actions"
                              data-placement="left"
                            >
                              <a
                                href="#"
                                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="ki ki-bold-more-hor"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                {/* <!--begin::Navigation--> */}
                                <ul className="navi navi-hover">
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Payments</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Listings</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Applications</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Edit Property</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                {/* <!--end::Navigation--> */}
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <div className="symbol-lg-100">
                              <img
                                className="w-100"
                                src={toAbsoluteUrl("/media/property-blank.png")}
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-column flex-root p-3">
                            <span className="font-weight-bold mb-1 font-size-h6 text-dark-50">
                              3302 Villa Dr, Unit 1
                            </span>
                            <span className="opacity-70 font-size-sm">
                              Jerry Mattedi
                            </span>
                          </div>
                          <div className="form-group pl-3 pr-3">
                            <div className="row">
                              <div className="col-lg-6 pr-0">
                                <label className="option option-plain mb-0">
                                  <span className="option-control">
                                    <span className="radio">
                                      <input
                                        type="radio"
                                        name="m_option_1"
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
                                      <input
                                        type="radio"
                                        name="m_option_1"
                                        value="1"
                                      />
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
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::Card--> */}
                    </div>
                    {/* <!--end::Col--> */}
                    {/* <!--begin::Col--> */}
                    <div
                      className="col-md-4"
                      style={{ cursor: "pointer" }}
                      onClick={handleRedirect}
                    >
                      {/* <!--begin::Card--> */}
                      <div className="card-custom gutter-b card-stretch border">
                        {/* <!--begin::Body--> */}
                        <div className="card-body p-0">
                          {/* <!--begin::Toolbar--> */}
                          <div
                            className="position-absolute"
                            style={{ right: "10%", top: "3%" }}
                          >
                            <div
                              className="dropdown dropdown-inline"
                              title="Quick actions"
                              data-placement="left"
                            >
                              <a
                                href="#"
                                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="ki ki-bold-more-hor"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                {/* <!--begin::Navigation--> */}
                                <ul className="navi navi-hover">
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Payments</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Listings</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Applications</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Edit Property</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                {/* <!--end::Navigation--> */}
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <div className="symbol-lg-100">
                              <img
                                className="w-100"
                                src={toAbsoluteUrl("/media/property-blank.png")}
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-column flex-root p-3">
                            <span className="font-weight-bold mb-1 font-size-h6 text-dark-50">
                              3302 Villa Dr, Unit 1
                            </span>
                            <span className="opacity-70 font-size-sm">
                              Jerry Mattedi
                            </span>
                          </div>
                          <div className="form-group pl-3 pr-3">
                            <div className="row">
                              <div className="col-lg-6 pr-0">
                                <label className="option option-plain mb-0">
                                  <span className="option-control">
                                    <span className="radio">
                                      <input
                                        type="radio"
                                        name="m_option_2"
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
                                      <input
                                        type="radio"
                                        name="m_option_2"
                                        value="1"
                                      />
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
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::Card--> */}
                    </div>
                    {/* <!--end::Col--> */}
                    {/* <!--begin::Col--> */}
                    <div
                      className="col-md-4"
                      style={{ cursor: "pointer" }}
                      onClick={handleRedirect}
                    >
                      {/* <!--begin::Card--> */}
                      <div className="card-custom gutter-b card-stretch border">
                        {/* <!--begin::Body--> */}
                        <div className="card-body p-0">
                          {/* <!--begin::Toolbar--> */}
                          <div
                            className="position-absolute"
                            style={{ right: "10%", top: "3%" }}
                          >
                            <div
                              className="dropdown dropdown-inline"
                              title="Quick actions"
                              data-placement="left"
                            >
                              <a
                                href="#"
                                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="ki ki-bold-more-hor"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                {/* <!--begin::Navigation--> */}
                                <ul className="navi navi-hover">
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Payments</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Listings</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Applications</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="navi-item">
                                    <a href="#" className="navi-link">
                                      <span className="navi-text">
                                        <span>Edit Property</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                {/* <!--end::Navigation--> */}
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <div className="symbol-lg-100">
                              <img
                                className="w-100"
                                src={toAbsoluteUrl("/media/property-blank.png")}
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-column flex-root p-3">
                            <span className="font-weight-bold mb-1 font-size-h6 text-dark-50">
                              3302 Villa Dr, Unit 1
                            </span>
                            <span className="opacity-70 font-size-sm">
                              Jerry Mattedi
                            </span>
                          </div>
                          <div className="form-group pl-3 pr-3">
                            <div className="row">
                              <div className="col-lg-6 pr-0">
                                <label className="option option-plain mb-0">
                                  <span className="option-control">
                                    <span className="radio">
                                      <input
                                        type="radio"
                                        name="m_option_3"
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
                                      <input
                                        type="radio"
                                        name="m_option_3"
                                        value="1"
                                      />
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
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::Card--> */}
                    </div>
                    {/* <!--end::Col--> */}
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
