import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from 'react-bootstrap';

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
                  <span className="font-weight-bold mb-2 font-size-h4 text-dark-50">July 18,2020 - No End Date</span>
                  <span className="opacity-70 font-size-h6">3302 Villa Dr, 1 Unit</span>
                </div>
                <Tabs defaultActiveKey="transcations">
                  <Tab eventKey="transcations" title="Transcations">
                    <div className="tab-content mt-5">
                      <div className="tab-pane fade show active" id="transcations" role="tabpanel" aria-labelledby="transcations-tab">
                        <div className="border pt-6 pr-6 pl-6 pb-4">
                          <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column flex-root">
                              <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">Current Balance: $100</span>
                              <span className="opacity-70 font-size-sm font-weight-light">Amount due as of today</span>
                              <div className="d-flex mt-5">
                                <div className="flex-column">
                                  <button type="button" className="btn btn-primary btn-sm">Add a Bill</button>
                                </div>
                                <div className="flex-column mt-2 ml-5">
                                  <span className="font-weight-bold font-size-md text-dark-50 mr-1">Record Payment</span> |
                                  <span className="font-weight-bold font-size-md text-dark-50 mr-2">Add a Credit</span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-column flex-root">
                              <span className="mb-4 font-size-md text-dark-50"><span className="font-weight-bold">Tenants:</span> Jerry Mattedi</span>
                              <span className="mb-4 font-size-md text-dark-50"><span className="font-weight-bold">Recurring Rent:</span> $500.00 due on the 1st</span>
                              <span className="mb-2 font-size-md text-dark-50"><span className="font-weight-bold">Express Payouts:</span> Not enabled</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <div className="mb-5 border">
                            <h1 className="p-5 font-weight-bold font-size-h5 table-secondary">In-Progress & Upcoming</h1>
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
                                  <td className="font-weight-bold">Due On <span className="d-block font-weight-normal">Jul 18, 2020</span></td>
                                  <td className="align-middle">Prorated Rent</td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">Edit</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="font-weight-bold">Due On <span className="d-block font-weight-normal">Jul 18, 2020</span></td>
                                  <td className="align-middle">Monthly Rent</td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">Edit</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="border">
                            <h1 className="p-5 font-weight-bold font-size-h5 table-secondary">Completed</h1>
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
                                  <td className="font-weight-bold">Due On <span className="d-block font-weight-normal">Jul 18, 2020</span></td>
                                  <td className="align-middle">Security Deposit</td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">Edit</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="font-weight-bold">Due On <span className="d-block font-weight-normal">Jul 18, 2020</span></td>
                                  <td className="align-middle">Move-in Cost</td>
                                  <td className="align-middle">$50</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">-</td>
                                  <td className="align-middle">
                                    <span className="label label-inline label-light-primary font-weight-bold">Edit</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tenants" role="tabpanel" aria-labelledby="tenants-tab">profile content 2</div>
                      <div className="tab-pane fade" id="rental" role="tabpanel" aria-labelledby="rental-tab">rental content 3</div>
                      <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">history content 4</div>
                    </div>
                  </Tab>
                  <Tab eventKey="tenants" title="Tenants">
                    Tenants
                  </Tab>
                  <Tab eventKey="rentalDetails" title="Rental Details">
                    Rental Details
                  </Tab>
                  <Tab eventKey="history" title="History">
                    History
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
