import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

import { FileUploadComponent } from "../../../common/component/fileUploadComponent";

export const DetailsFormComponent = ({ toNextStep }) => {
  const [fileName, setFileName] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          pet_policy: "",
          furnished: 0,
          gym: 0,
          ac: 0,
          hardwood_floor: 0,
          fireplace: 0,
          dish_washer: 0,
          storage: 0,
          walkin_closet: 0,
          pool: 0,
          hot_tub: 0,
          wheelchair: 0,
          walkin_closet: 0,
          other_animities: "",
        }}
        onSubmit={(values) => {
          values.cover_image = fileName;
          toNextStep(values);
        }}
      >
        <Form>
          <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
            Details
          </h3>
          <div className="row">
            <div className="col-xl-12">
              <div className="form-group">
                <label className="font-size-h5">Pet Policy</label>
                <div className="form-check mb-1">
                  <input
                    name="pet_policy"
                    type="radio"
                    className="form-check-input"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Pet Negotiable
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="pet_policy"
                    type="radio"
                    className="form-check-input"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Pet Allowed
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="pet_policy"
                    type="radio"
                    className="form-check-input"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    No Pets
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="pet_policy"
                    type="radio"
                    className="form-check-input"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Don't Speciy
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
                  <input
                    name="furnished"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Furnished
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="gym"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Gym/Fitness Center
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="ac"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Air Conditiong
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="hardwood_floor"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Hardwood Floors
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="fireplace"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Fireplace
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="dish_washer"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Dishwasher
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="storage"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Storage
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="walkin_closet"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Walk-in Closest
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="pool"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Pool
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    name="hot_tub"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
                  />
                  <label className="form-check-label font-size-h6 ml-1">
                    Hot Tub
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="wheelchair"
                    type="checkbox"
                    className="form-check-input"
                    value="1"
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
              {" "}
              * )
              <button className="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4">
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
      </Formik>
    </>
  );
};
