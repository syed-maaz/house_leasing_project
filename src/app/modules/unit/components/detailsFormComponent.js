import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

import { FileUploadComponent } from "../../../common/component/fileUploadComponent";

const normalizeUnitObj = (obj) => {
  obj.features = new Array();
  if (!!obj.furnished) {
    obj.features.push("furnished");
  }
  if (!!obj.gym) {
    obj.features.push("gym");
  }
  if (!!obj.ac) {
    obj.features.push("ac");
  }
  if (!!obj.hardwood_floor) {
    obj.features.push("hardwood_floor");
  }
  if (!!obj.fireplace) {
    obj.features.push("fireplace");
  }
  if (!!obj.dish_washer) {
    obj.features.push("dish_washer");
  }
  if (!!obj.storage) {
    obj.features.push("storage");
  }
  if (!!obj.walkin_closet) {
    obj.features.push("walkin_closet");
  }
  if (!!obj.pool) {
    obj.features.push("pool");
  }
  if (!!obj.hot_tub) {
    obj.features.push("hot_tub");
  }
  if (!!obj.wheelchair) {
    obj.features.push("wheelchair");
  }
  return obj;
};

export const DetailsFormComponent = ({
  toNextStep,
  unitObj,
  toPreviousStep,
}) => {
  const [fileName, setFileName] = useState("");

  if (Object.keys(unitObj).length > 0) {
    unitObj = normalizeUnitObj({ ...unitObj });
  } else {
    unitObj = {
      pet_policy: "Pet Negotiable",
      features: [],
    };
  }

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={unitObj}
        onSubmit={(values) => {
          values.features.forEach((i) => (values[i] = 1));
          delete values.features;
          toNextStep(values);
        }}
      >
        {({ values }) => (
          <Form>
            <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
              Details
            </h3>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <label className="font-size-h5">Pet Policy</label>
                  <div className="form-check mb-1">
                    <Field
                      name="pet_policy"
                      type="radio"
                      className="form-check-Field"
                      value="Pet Negotiable"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Pet Negotiable
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="pet_policy"
                      type="radio"
                      className="form-check-Field"
                      value="Pet Allowed"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Pet Allowed
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="pet_policy"
                      type="radio"
                      className="form-check-Field"
                      value="No Pets"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      No Pets
                    </label>
                  </div>
                  <div className="form-check">
                    <Field
                      name="pet_policy"
                      type="radio"
                      className="form-check-Field"
                      value="Don't Specify"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Don't Specify
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <label className="font-size-h5">Features and Amenities</label>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="furnished"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Furnished
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="gym"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Gym/Fitness Center
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="ac"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Air Conditiong
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="hardwood_floor"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Hardwood Floors
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="fireplace"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Fireplace
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="dish_washer"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Dishwasher
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="storage"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Storage
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="walkin_closet"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Walk-in Closest
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="pool"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Pool
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="hot_tub"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Hot Tub
                    </label>
                  </div>
                  <div className="form-check">
                    <Field
                      name="features"
                      type="checkbox"
                      className="form-check-Field"
                      value="wheelchair"
                    />
                    <label className="form-check-label font-size-h6 ml-1">
                      Wheelchair assessible
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group m-0">
                  <label className="font-size-h5">
                    Other amenities (optional)
                  </label>
                  <Field
                    as="textarea"
                    name="other_animities"
                    className="form-control"
                  ></Field>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between pt-10">
              <div className="mr-2">
                <button
                  type="button"
                  className="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                  onClick={toPreviousStep}
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
