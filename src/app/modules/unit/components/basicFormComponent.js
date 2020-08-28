import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

import { FileUploadComponent } from "../../../common/component/fileUploadComponent";

export const BasicFormComponent = ({ toNextStep }) => {
  const [fileName, setFileName] = useState("");
  return (
    <>
      <Formik
        initialValues={{
          unit_name: "",
          lock_type: "",
          bedroom: "",
          lock_id: "",
          full_bedroom: "",
          half_bedroom: "",
          sq_ft: "",
        }}
        onSubmit={(values) => {
          values.cover_image = fileName;
          toNextStep(values);
        }}
      >
        <Form className="border p-6 form" id="kt_form">
          <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
            Basic Info
          </h3>
          <div className="form-group pt-3">
            <div className="col-md-6 p-0">
              <FileUploadComponent
                fileName={fileName}
                uploadedFileName={setFileName}
              />
            </div>
            <p>At least one photo is required.</p>
            <p>
              You can add until 30 photos with 30MB each (format png, jpeg or
              gif)
            </p>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="form-group">
                <label>Unit name</label>
                <Field
                  type="text"
                  className="form-control form-control-solid form-control-lg"
                  name="unit_name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="form-group">
                <label>Lock Type</label>
                <Field
                  as="select"
                  name="lock_type"
                  className="form-control form-control-solid form-control-lg"
                >
                  <option value="">Select a type</option>
                  <option value="manual">Manual</option>
                  <option value="remote">Remote</option>
                </Field>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="form-group">
                <label>Lock ID</label>
                <Field
                  type="text"
                  className="form-control form-control-solid form-control-lg"
                  name="lock_id"
                />
                <span className="form-text text-muted">
                  Required for Remote Lock.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="form-group">
                <button type="button" className="btn btn-success font-size-h6">
                  Register Lock ID{" "}
                  <i className="ml-2 flaticon2-check-mark icon-1x"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="form-group">
                <label>Bedrooms</label>
                <Field
                  type="number"
                  className="form-control form-control-solid form-control-lg"
                  name="bedroom"
                  min="0"
                  max="10"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="form-group">
                <div className="form-check mt-11">
                  <Field
                    name="bedroom"
                    type="checkbox"
                    id="bedroom"
                    className="form-check-input"
                    value="studio"
                  />
                  <label
                    title=""
                    forhtml="bedroom"
                    className="form-check-label font-size-h6 ml-1"
                  >
                    Studio
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="form-group">
                <label>Full Bathrooms</label>
                <Field
                  type="number"
                  className="form-control form-control-solid form-control-lg"
                  name="full_bedroom"
                  min="0"
                  max="10"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="form-group">
                <label>Half Bathrooms</label>
                <input
                  type="number"
                  className="form-control form-control-solid form-control-lg"
                  name="hald_bedroom"
                  min="0"
                  max="10"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="form-group m-0">
                <label>Sq. Footage</label>
                <Field
                  type="text"
                  className="form-control form-control-solid form-control-lg"
                  name="sq_ft"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end pt-10">
            {/* <div className="mr-2">
              <button className="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4">
                Previous
              </button>
            </div> */}
            <div>
              <button
                className="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                data-wizard-type="action-submit"
              >
                Submit
              </button>
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
      </Formik>
    </>
  );
};
