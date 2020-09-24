import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { NavLink } from "react-router-dom";

export const PaymentDetailPage = () => {
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
                <div className="d-flex justify-content-between pb-15">
                  <div className="d-flex flex-column flex-root">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Current and Upcoming
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href={() => false}>
                          Action
                        </a>
                        <a className="dropdown-item" href={() => false}>
                          Another action
                        </a>
                        <a className="dropdown-item" href={() => false}>
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mt-3 text-uppercase">
                      ALL BALANCES
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mt-3 text-uppercase">
                      OUT STANDING
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <div className="input-group input-group input-group-solid">
                      <input
                        type="text"
                        className="form-control pl-4"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text pr-3">
                          <span className="svg-icon svg-icon-lg">
                            {/*}<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />{*/}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border p-6">
                  <div className="d-flex justify-content-between mb-5">
                    <div className="d-flex flex-column flex-root">
                      <h4 className="font-size-h1 d-block d-block font-weight-normal mb-7 text-dark-50">
                        3302 Villa Dr, 1 Unit
                      </h4>
                    </div>

                    <div className="d-flex flex-column flex-root align-items-md-end mt-4">
                      <span className="opacity-70 font-size-sm font-weight-light">
                        13 aug 2018 - No End Date
                        <span className="label label-light-primary font-weight-bold label-inline ml-3">
                          Upcoming
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Current Balance
                      </span>
                      <span className="opacity-70 font-size-h6">$100</span>
                    </div>
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Rent
                      </span>
                      <span className="opacity-70 font-size-h6">$500</span>
                    </div>
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Tenants
                      </span>
                      <span className="opacity-70 font-size-h6">
                        Jerry Metahadi
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border p-6">
                  <div className="d-flex justify-content-between mb-15">
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">
                        Past 30 days of payments
                      </span>
                      <span className="opacity-70 font-size-sm">
                        Recent payments
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mt-3">
                      <span className="font-weight-bold mb-2 font-size-md text-dark-50 mr-2">
                        Rentals
                      </span>{" "}
                      |
                      <span className="font-weight-bold mb-2 font-size-md text-dark-50 mr-2 ml-2">
                        Tenants
                      </span>{" "}
                      |
                      <span className="font-weight-bold mb-2 font-size-md text-dark-50 ml-2">
                        History
                      </span>
                    </div>
                    <div className="d-flex">
                      <NavLink
                        className="btn btn-light-primary font-weight-bold"
                        to="/payment/transactions"
                      >
                        All Transactions
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
