import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

export const LeaseListingFormComponent = ({ formObj, changeFormStep }) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={formObj}
        onSubmit={(values) => {
          changeFormStep(values, "frwd");
        }}
      >
        {({ values }) => (
          <Form>
            <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
              Lease
            </h3>
            <div className="row">
              <div className="col-xl-6">
                <div className="form-group">
                  <label>Monthly Rent</label>
                  <Field
                    name="monthly_rent"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="form-group">
                  <label>Security Deposit (Optional)</label>
                  <Field
                    name="security_deposit"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="form-group">
                  <label>Lease Duration</label>
                  <div class="form-check mb-1">
                    <Field
                      name="lease_duration"
                      type="checkbox"
                      className="form-check-input"
                      value="no-specified-lease-duration"
                    />
                    <label className="form-check-label ml-1">
                      Don't specify a lease duration
                    </label>
                  </div>
                  <div class="form-check mb-1">
                    <Field
                      name="lease_duration"
                      type="checkbox"
                      className="form-check-input"
                      value="minimum-lease-duration"
                    />
                    <label className="form-check-label ml-1">
                      Minimum Lease Duration
                    </label>
                  </div>
                </div>
                {/* <div className="form-group mb-0">
                  <label>In Months</label>
                  <Field
                    name="lease_duration"
                    type="text"
                    className="form-control"
                  />
                </div> */}
              </div>
              <div className="col-xl-6">
                <div className="form-group">
                  <label>When is it available?</label>
                  <div class="form-check mb-1">
                    <Field
                      name="availibility"
                      type="checkbox"
                      className="form-check-input"
                      value="no-specified-movein-date"
                    />
                    <label className="form-check-label ml-1">
                      Don't specify a move-in date
                    </label>
                  </div>
                  <div class="form-check mb-1">
                    <Field
                      name="availibility"
                      type="checkbox"
                      className="form-check-input"
                      value="avaiable-now"
                    />
                    <label className="form-check-label ml-1">
                      Available Now
                    </label>
                  </div>
                  <div class="form-check mb-1">
                    <Field
                      name="availibility"
                      type="checkbox"
                      className="form-check-input"
                      value="prefere-move-in-date"
                    />
                    <label className="form-check-label ml-1">
                      Preferred Move-in Date
                    </label>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label>Move-in Date</label>
                  <Field
                    name="movein-date"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between pt-10">
              <div className="mr-2">
                <button
                  className="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                  type="button"
                  onClick={(e) => {
                    changeFormStep(formObj, "prev");
                  }}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                  data-wizard-type="action-next"
                  type="submit"
                >
                  Next Step
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
