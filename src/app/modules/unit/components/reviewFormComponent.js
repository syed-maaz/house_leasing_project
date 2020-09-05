import React, { useState } from "react";

import { ImageContainer } from "../../../common/component/imageContainerComponent";

export const ReviewFormComponent = ({
  unitDet,
  propertyDet,
  submitUnit,
  toPreviousStep,
}) => {
  const [fileName, setFileName] = useState(unitDet.cover_image);
  return (
    <>
      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
        Unit Info
      </h3>
      <div className="form-group pt-3 mb-0">
        <div className="col-md-6 p-0">
          <ImageContainer imageName={unitDet.cover_image} height={"200px"} />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="form-group">
            <label className="font-size-h5">House One</label>
            <p className="mb-0">{propertyDet.street_address}</p>
            <p>{unitDet.sq_ft} sq ft</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="form-group">
            <label className="font-size-h5">Pet Policy</label>
            <ul>
              <li>{unitDet.pet_policy}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="form-group">
            <label className="font-size-h5">Features and Amenities</label>
            <ul>
              {!!unitDet.dish_washer ? (
                <li className="pb-2">Washer (On Site)</li>
              ) : (
                ""
              )}
              {!!unitDet.dryer ? <li className="pb-2">Dryer (On Site)</li> : ""}
              {!!unitDet.parking ? (
                <li className="pb-2">Private Lot | Covered | For 2 cars</li>
              ) : (
                ""
              )}
              {!!unitDet.gym ? (
                <li className="pb-2">Gym/Fitness Center</li>
              ) : (
                ""
              )}
              {!!unitDet.ac ? <li className="pb-2">Air Conditioning</li> : ""}
              {!!unitDet.washer ? <li className="pb-2">Dishwasher</li> : ""}
              {!!unitDet.storage ? <li className="pb-2">Storage</li> : ""}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="form-group mb-0">
            <label className="font-size-h5">Other Amenities</label>
            {!!unitDet.other_animities ? (
              <ul>
                <li className="pb-2">{unitDet.other_animities}</li>
              </ul>
            ) : (
              ""
            )}
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
            type="button"
            onClick={submitUnit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
