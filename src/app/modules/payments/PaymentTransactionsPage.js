import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export const PaymentTransactionsPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Payment Detail");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          <div className="card-header">
            <div className="card-title">
              <h3 className="card-label">Payments</h3>
            </div>
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="d-flex flex-column flex-root mb-10">
                  <span className="font-weight-bold mb-2 font-size-h4 text-dark-50">
                    July 18,2020 - No End Date
                  </span>
                  <span className="opacity-70 font-size-h6">
                    3302 Villa Dr, 1 Unit
                  </span>
                </div>
                <Tabs defaultActiveKey="transcations">
                  <Tab eventKey="transcations" title="Transcations">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="border pt-6 pr-6 pl-6 pb-4">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                                Current Balance: $100
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light">
                                Amount due as of today
                              </span>
                              <div className="d-flex mt-5">
                                <div className="flex-column">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                  >
                                    Add a Bill
                                  </button>
                                </div>
                                <div className="flex-column mt-2 ml-5">
                                  <span className="font-weight-bold font-size-md text-dark-50 mr-1">
                                    Record Payment
                                  </span>{" "}
                                  |
                                  <span className="font-weight-bold font-size-md text-dark-50 mr-2">
                                    Add a Credit
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-column flex-root">
                              <span className="mb-4 font-size-md text-dark-50">
                                <span className="font-weight-bold">
                                  Tenants:
                                </span>{" "}
                                Jerry Mattedi
                              </span>
                              <span className="mb-4 font-size-md text-dark-50">
                                <span className="font-weight-bold">
                                  Recurring Rent:
                                </span>{" "}
                                $500.00 due on the 1st
                              </span>
                              <span className="mb-2 font-size-md text-dark-50">
                                <span className="font-weight-bold">
                                  Express Payouts:
                                </span>{" "}
                                Not enabled
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <div className="mb-5 border">
                            <h1 className="p-5 font-weight-bold font-size-h5 table-secondary">
                              In-Progress & Upcoming
                            </h1>
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Status</th>
                                  <th scope="col">Description</th>
                                  <th scope="col">Due</th>
                                  <th scope="col">Payment</th>
                                  <th scope="col">Balance</th>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="font-weight-bold">
                                    Due On{" "}
                                    <span className="d-block font-weight-normal">
                                      Jul 18, 2020
                                    </span>
                                  </td>
                                  <td className="align-middle">
                                    Prorated Rent
                                  </td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">
                                      Edit
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="font-weight-bold">
                                    Due On{" "}
                                    <span className="d-block font-weight-normal">
                                      Jul 18, 2020
                                    </span>
                                  </td>
                                  <td className="align-middle">Monthly Rent</td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">
                                      Edit
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="border">
                            <h1 className="p-5 font-weight-bold font-size-h5 table-secondary">
                              Completed
                            </h1>
                            <table className="table mb-5">
                              <thead>
                                <tr>
                                  <th scope="col">Status</th>
                                  <th scope="col">Description</th>
                                  <th scope="col">Due</th>
                                  <th scope="col">Payment</th>
                                  <th scope="col">Balance</th>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="font-weight-bold">
                                    Due On{" "}
                                    <span className="d-block font-weight-normal">
                                      Jul 18, 2020
                                    </span>
                                  </td>
                                  <td className="align-middle">
                                    Security Deposit
                                  </td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">
                                      Edit
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="font-weight-bold">
                                    Due On{" "}
                                    <span className="d-block font-weight-normal">
                                      Jul 18, 2020
                                    </span>
                                  </td>
                                  <td className="align-middle">Move-in Cost</td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">
                                      Edit
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tenants"
                        role="tabpanel"
                        aria-labelledby="tenants-tab"
                      >
                        profile content 2
                      </div>
                      <div
                        className="tab-pane fade"
                        id="rental"
                        role="tabpanel"
                        aria-labelledby="rental-tab"
                      >
                        rental content 3
                      </div>
                      <div
                        className="tab-pane fade"
                        id="history"
                        role="tabpanel"
                        aria-labelledby="history-tab"
                      >
                        history content 4
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tenants" title="Tenants">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="d-flex justify-content-between mt-10 mb-5">
                          <div className="d-flex flex-column flex-root">
                            <h4 className="font-size-h6 d-block d-block font-weight-normal mt-3 text-dark-50 text-uppercase">
                              2 current tenant
                            </h4>
                          </div>
                          <div className="d-flex flex-column flex-root align-items-md-end">
                            <button
                              type="button"
                              className="btn btn-light-primary font-weight-bold"
                            >
                              Edit Tenants
                            </button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="border pt-6 pr-6 pl-6 pb-4">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column flex-root">
                                  <span className="font-weight-bold mt-4 mb-2 font-size-h6 text-dark-50">
                                    Jerry Mattedi
                                  </span>
                                  <span className="opacity-70 font-size-sm font-weight-light">
                                    Jerry.Matte@gmail.com
                                  </span>
                                </div>
                                <div className="d-flex flex-column align-items-md-end flex-root">
                                  <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                    <div className="symbol symbol-circle symbol-lg-75 d-none">
                                      <img
                                        src={toAbsoluteUrl(
                                          "/media/users/300_10.jpg"
                                        )}
                                        alt="payment transaction page"
                                      />
                                    </div>
                                    <div className="symbol symbol-lg-75 symbol-circle symbol-primary">
                                      <span className="symbol-label font-size-h3 font-weight-boldest">
                                        AK
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border pt-6 pr-6 pl-6 pb-4">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column flex-root">
                                  <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                                    Not Ready To Pay
                                  </span>
                                  <span className="opacity-70 font-size-sm font-weight-light">
                                    No payment account added
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="border pt-6 pr-6 pl-6 pb-4">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column flex-root">
                                  <span className="font-weight-bold mt-4 mb-2 font-size-h6 text-dark-50">
                                    Jerry Mattedi
                                  </span>
                                  <span className="opacity-70 font-size-sm font-weight-light">
                                    Jerry.Matte@gmail.com
                                  </span>
                                </div>
                                <div className="d-flex flex-column align-items-md-end flex-root">
                                  <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                    <div className="symbol symbol-circle symbol-lg-75 d-none">
                                      <img
                                        src={toAbsoluteUrl(
                                          "/media/users/300_10.jpg"
                                        )}
                                        alt="payment transaction page"
                                      />
                                    </div>
                                    <div className="symbol symbol-lg-75 symbol-circle symbol-primary">
                                      <span className="symbol-label font-size-h3 font-weight-boldest">
                                        AK
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border pt-6 pr-6 pl-6 pb-4">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column flex-root">
                                  <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                                    Not Ready To Pay
                                  </span>
                                  <span className="opacity-70 font-size-sm font-weight-light">
                                    No payment account added
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="rentalDetails" title="Rental Details">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="border pt-6 pr-6 pl-6 pb-4 mb-5">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                Lease Dates
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light mb-3">
                                Jul 18, 2020 - No End Date
                              </span>
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                $500
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light mb-3">
                                Due monthly on the 1st
                              </span>
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                $50
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light">
                                Security Deposit due on Jul 26, 2020
                              </span>
                            </div>
                            <div className="d-flex flex-column align-items-md-end flex-root">
                              <button
                                type="button"
                                className="btn btn-light-primary font-weight-bold"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border pt-6 pr-6 pl-6 pb-4 mb-5">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                Lease Dates
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light mb-3">
                                Jul 18, 2020 - No End Date
                              </span>
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                $500
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light mb-3">
                                Due monthly on the 1st
                              </span>
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                $50
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light">
                                Security Deposit due on Jul 26, 2020
                              </span>
                            </div>
                            <div className="d-flex flex-column align-items-md-end flex-root">
                              <button
                                type="button"
                                className="btn btn-light-primary font-weight-bold"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="border pt-6 pr-6 pl-6 pb-4 mb-5">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                Lease Dates
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light mb-3">
                                Jul 18, 2020 - No End Date
                              </span>
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                $500
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light mb-3">
                                Due monthly on the 1st
                              </span>
                              <span className="font-weight-bold font-size-h6 text-dark-50">
                                $50
                              </span>
                              <span className="opacity-70 font-size-sm font-weight-light">
                                Security Deposit due on Jul 26, 2020
                              </span>
                            </div>
                            <div className="d-flex flex-column align-items-md-end flex-root">
                              <button
                                type="button"
                                className="btn btn-light-primary font-weight-bold"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="history" title="History">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active">
                        <div className="border pt-6 pr-6 pl-6 pb-4 mb-5">
                          <div className="timeline timeline-5">
                            <div className="timeline-item align-items-start">
                              <div className="timeline-label">Jul 18, 2020</div>
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-danger"></i>
                              </div>
                              <div className="timeline-content">
                                Ralph Dotson (ralphdotson@gmail.com) was added
                                as a tenant.
                              </div>
                            </div>
                            <div className="timeline-item align-items-start">
                              <div className="timeline-label">Jul 22, 2020</div>
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-success"></i>
                              </div>
                              <div className="timeline-content">
                                A new $50.00 bill for Pet Deposit was added.
                              </div>
                            </div>
                            <div className="timeline-item align-items-start">
                              <div className="timeline-label align-center">
                                Jul 30, 2020
                              </div>
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-warning"></i>
                              </div>
                              <div className="timeline-content">
                                Payments were requested.
                              </div>
                            </div>
                          </div>
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
