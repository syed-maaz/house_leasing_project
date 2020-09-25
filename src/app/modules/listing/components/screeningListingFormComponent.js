import React from "react";
import { Formik, Field, Form } from "formik";

export const ScreeningListingFormComponent = ({ formObj, changeFormStep }) => {
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
              Applicant Screening Tools
            </h3>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <p>
                    Find qualified tenantsby requiring screening reports from
                    all applicants
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <div class="form-check mb-1">
                    <Field
                      name="credit_report"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Require applicant credit reports
                    </label>
                  </div>
                  <p>
                    All applicants will be promoted to submit a credit report
                    with their application.
                  </p>
                  <p>
                    Include credit score, detailed payment history and dept
                    overviews.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <div class="form-check mb-1">
                    <Field
                      name="background_check"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Require background checks
                    </label>
                  </div>
                  <p>
                    All applicants will be promoted to run a background check as
                    part of their application.
                  </p>
                  <p>Include a search for eviction and criminal records.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group mb-0">
                  <p className="mb-0">
                    By requesting or viewing applicant credit reports or
                    background check reports. You agree to comply with the{" "}
                    <span className="font-weight-bold">
                      Fair Credit Reporting Act
                    </span>{" "}
                    and any applicable state laws governing the use of consumer
                    reports.
                  </p>
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
