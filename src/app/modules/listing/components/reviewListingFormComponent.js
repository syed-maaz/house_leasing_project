import React, { useState } from "react";
import { ImageContainer } from "../../../common/component/imageContainerComponent";
import { Formik, Field, Form } from "formik";

export const ReviewListingFormComponent = ({
  formObj,
  handleSubmit,
  changeFormStep,
}) => {
  const [fileName, setFileName] = useState("");
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={formObj}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form>
            <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
              Your Listing Details
            </h3>
            <div className="row pt-3">
              <div className="col-xl-12">
                <div className="form-group">
                  <h5 className="font-weight-bold">
                    {formObj.listing_headline}
                  </h5>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-xl-6">
                <div className="form-group mb-0" style={{ height: "218px" }}>
                  <ImageContainer
                    imageName={formObj.cover_image}
                    height={"218x"}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="form-group">
                  <p className="mb-1">${formObj.monthly_rent}/month</p>
                  {/* <p className="mb-1">3 Bed | 2 Full Bath</p>
                  <p>1000 sq ft</p> */}

                  <p className="mb-1">
                    <span className="font-weight-bold">Background Check:</span>{" "}
                    Required
                  </p>
                  <p>
                    <span className="font-weight-bold">Credit Report:</span>{" "}
                    Required
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group mb-0">
                  <div class="form-check mb-1">
                    <Field
                      name="active"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label font-size-h6 ml-1 mb-2">
                      Accepting Applicants
                    </label>
                  </div>
                  <p className="mb-0">
                    Activate your listing to invite renters to apply. (You can
                    change it anytime)
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
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
