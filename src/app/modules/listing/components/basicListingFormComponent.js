import React, { useState } from "react";
import { FileUploadComponent } from "../../../common/component/fileUploadComponent";
import { Formik, Field, Form } from "formik";

export const BasicListingFormComponent = ({
  unitList,
  formObj,
  changeFormStep,
}) => {
  const [fileName, setFileName] = useState("");
  const [selectedUnitId, setSelectedUnitId] = useState("");

  console.log(unitList);

  const handleUnitChange = (e) => {
    const uId = parseInt(e.target.value);
    setSelectedUnitId(uId);
    const selectedUnitCoverImage = unitList.find((i) => i.unit_id === uId)
      .cover_image;
    setFileName(selectedUnitCoverImage);
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={formObj}
        onSubmit={(values) => {
          values.cover_image = fileName;
          values.unit_id = selectedUnitId;
          changeFormStep(values, "frwd");
        }}
      >
        {({ values }) => (
          <Form>
            <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
              Basic
            </h3>
            <div className="row pt-3">
              <div className="col-xl-12">
                <div className="form-group">
                  <label>Unit</label>
                  <Field
                    name="unit_id"
                    as="select"
                    className="form-control form-control-solid form-control-lg"
                    onChange={handleUnitChange}
                  >
                    <option value="">Select Unit</option>
                    {unitList.map((i, k) => (
                      <option key={k} value={i.unit_id}>
                        {i.unit_name}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
            </div>
            <div className="form-group m-0">
              <label>Cover Photo</label>
              <div className="col-md-6 p-0">
                <FileUploadComponent
                  fileName={fileName}
                  uploadedFileName={setFileName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <label>Listing Headline</label>
                  <Field
                    type="text"
                    className="form-control form-control-solid form-control-lg"
                    name="listing_headline"
                  />
                  <span className="form-text text-muted">
                    Example: "Beautiful 2 bedroom near downtown"
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group mb-0">
                  <label>Description</label>
                  <Field
                    as="textarea"
                    className="form-control"
                    name="description"
                    placeholder="Why it is the better choice?"
                  ></Field>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between pt-10">
              <div className="mr-2"></div>
              <div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                  data-wizard-type="action-next"
                  type="submut"
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
