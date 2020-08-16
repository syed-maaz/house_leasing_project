import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import SVG from "react-inlinesvg";

export const PropertyDetailPage = (props) => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  let history = useHistory();

  const propertyId = props.match.params.id;

  if (!propertyId) {
    history.push("/properties");
  }

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          <div className="card-header">
            <div className="card-title">
              <h3 className="card-label">Property Detail</h3>
            </div>
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="root d-flex">
                  <div className="d-flex flex-column flex-root mb-10">
                    <span className="font-weight-bold font-size-h4 text-dark-50">
                      3302 Villa Dr, 1 Unit
                      <NavLink
                        className="btn btn-light-primary font-weight-bold ml-10"
                        to={`/property/edit/${propertyId}`}
                      >
                        Edit Property
                      </NavLink>
                    </span>
                    <span className="opacity-70 font-size-h6">Jerry Smith</span>
                  </div>
                </div>
                <Tabs defaultActiveKey="units">
                  <Tab eventKey="units" title="Units">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="mt-10">
                          <div className="mb-5 border">
                            <div className="card card-custom card-stretch gutter-b table-secondary" style={{boxShadow: 'none'}}>
                              <div className="card-header py-5">
                                <h3 className="card-title align-items-start flex-column">Unit Details</h3>
                                <div className="d-flex flex-column flex-root align-items-md-end">
                                  <a className="btn btn-light-primary font-weight-bold" href="#">New Unit</a>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex m-5 border-bottom pb-5">
                              <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                <div className="symbol symbol-50 symbol-lg-120">
                                  <img
                                    src={toAbsoluteUrl(
                                      "/media/users/300_1.jpg"
                                    )}
                                    alt="user image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between flex-wrap">
                                  <div className="mr-3">
                                    <p className="m-0 mb-4 font-size-h5 font-weight-bold">
                                      House One
                                    </p>
                                    <p className="m-0 mb-1">
                                      2 Bed | 1 Full, 1 Half Bath | 1,000 s1 ft
                                    </p>
                                  </div>
                                  <div className="my-lg-0 my-3">
                                    <div class="form-check mb-4">
                                      <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                                      <label className="form-check-label ml-1">Collecting Rent</label>
                                    </div>
                                    <div class="form-check">
                                      <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                                      <label className="form-check-label ml-1">Inactive Listing</label>
                                    </div>
                                  </div>
                                  <div className="my-lg-0 my-3">
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-light-primary font-weight-bolder text-uppercase"
                                    >
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex m-5">
                              <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                <div className="symbol symbol-50 symbol-lg-120">
                                  <img
                                    src={toAbsoluteUrl(
                                      "/media/users/300_1.jpg"
                                    )}
                                    alt="user image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between flex-wrap">
                                  <div className="mr-3">
                                    <p className="m-0 mb-4 font-size-h5 font-weight-bold">
                                      House One
                                    </p>
                                    <p className="m-0 mb-1">
                                      2 Bed | 1 Full, 1 Half Bath | 1,000 s1 ft
                                    </p>
                                  </div>
                                  <div className="my-lg-0 my-3">
                                    <div class="form-check mb-4">
                                      <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                                      <label className="form-check-label ml-1">Collecting Rent</label>
                                    </div>
                                    <div class="form-check">
                                      <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                                      <label className="form-check-label ml-1">Inactive Listing</label>
                                    </div>
                                  </div>
                                  <div className="my-lg-0 my-3">
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-light-primary font-weight-bolder text-uppercase"
                                    >
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="payments" title="Payments">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="border pt-6 pr-6 pl-6 pb-4">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <p>Payments</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="listing" title="Listing">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="mt-10">
                          <div className="mb-5 border">
                            <div className="card card-custom card-stretch gutter-b table-secondary" style={{boxShadow: 'none'}}>
                              <div className="card-header py-5">
                                <h3 className="card-title align-items-start flex-column">Listing Details</h3>
                                <div className="d-flex flex-column flex-root align-items-md-end">
                                  <a className="btn btn-light-primary font-weight-bold" href="#">Create a Listing</a>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex mt-8 ml-5 mr-5">
                              <h4 className="text-dark-75 text-hover-primary font-weight-bold mr-3">
                                Great house for family
                              </h4>
                            </div>
                            <div className="d-flex m-5">
                              <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                <div className="symbol symbol-50 symbol-lg-120">
                                  <img
                                    src={toAbsoluteUrl(
                                      "/media/users/300_1.jpg"
                                    )}
                                    alt="user image"
                                  />
                                </div>
                                <div className="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                                  <span className="font-size-h3 symbol-label font-weight-boldest">
                                    JM
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between flex-wrap">
                                  <div className="mr-3">
                                    <p className="m-0 mb-2 font-size-h5 ">
                                      $800/month
                                    </p>
                                    <p className="m-0 mb-2 font-size-h5 ">
                                      3 Bed 4 Full, 5 Half Bath
                                    </p>
                                    <p className="m-0 mb-2 font-size-h5 ">
                                      500 sq ft
                                    </p>
                                  </div>
                                  <div className="my-lg-0 my-3">
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-light-primary font-weight-bolder text-uppercase"
                                    >
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="applications" title="Applications">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <p>Applications</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="doorLocks" title="Door Locks">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                      <div className="table-responsive">
                        <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                          <thead>
                            <tr className="text-left text-uppercase">
                              <th style={{ minWidth: "25%" }}>Unit</th>
                              <th style={{ minWidth: "25%" }}>Lock Type</th>
                              <th style={{ minWidth: "25%" }}>ID Code</th>
                              <th style={{ minWidth: "25%" }} />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">3302 Villa, Unit 1</span>
                              </td>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">Remote</span>
                              </td>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">334527</span>
                              </td>
                              <td className="pr-0 text-right">
                                <NavLink className="btn btn-light-success font-size-sm" to="/payment/detail">
                                  Edit
                                </NavLink>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">3302 Villa, Unit 2</span>
                              </td>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">Remote</span>
                              </td>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">334527</span>
                              </td>
                              <td className="pr-0 text-right">
                                <NavLink className="btn btn-light-success font-size-sm" to="/payment/detail">
                                  Edit
                                </NavLink>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">3302 Villa, Unit 3</span>
                              </td>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">Remote</span>
                              </td>
                              <td>
                                <span className="text-dark-75 d-block font-size-lg">334527</span>
                              </td>
                              <td className="pr-0 text-right">
                                <NavLink className="btn btn-light-success font-size-sm" to="/payment/detail">
                                  Edit
                                </NavLink>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
