import React, { useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

import { ImageContainer } from "../../../common/component/imageContainerComponent";

import { getUnitsByPropertyId } from "../../unit/unitCrud";

export const PropertyTabUnitComponent = (props) => {
  const { propertyId } = props;

  const [unitList, setUnitList] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { output, message },
      } = await getUnitsByPropertyId(propertyId);
      setUnitList(...unitList, output);
    })();
  }, [propertyId]);

  return (
    <div className="tab-content mt-5">
      <div className="tab-pane fade show active">
        <div className="mt-10">
          <div className="mb-5 border">
            <div
              className="card card-custom card-stretch gutter-b table-secondary"
              style={{ boxShadow: "none" }}
            >
              <div className="card-header py-5">
                <h3 className="card-title align-items-start flex-column">
                  Unit Details
                </h3>
                <div className="d-flex flex-column flex-root align-items-md-end">
                  <a
                    className="btn btn-light-primary font-weight-bold"
                    href={`/property/${propertyId}/unit/new`}
                  >
                    New Unit
                  </a>
                </div>
              </div>
            </div>
            {unitList.map((unit, key) => (
              <>
                <div key={key} className="d-flex m-5 border-bottom pb-5">
                  <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                    <div
                      className="symbol symbol-50 symbol-lg-120"
                      style={{ height: "100px" }}
                    >
                      <ImageContainer
                        imageName={unit.image_url}
                        height={"200px"}
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="mr-3">
                        <p className="m-0 mb-4 font-size-h5 font-weight-bold">
                          {unit.unit_name}
                        </p>
                        <p className="m-0 mb-1">
                          2 Bed | 1 Full, 1 Half Bath | 1,000 s1 ft
                        </p>
                      </div>
                      <div className="my-lg-0 my-3">
                        <div className="form-check mb-4">
                          <input
                            name="formHorizontalRadios"
                            type="radio"
                            className="form-check-input"
                          />
                          <label className="form-check-label ml-1">
                            Collecting Rent
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            name="formHorizontalRadios"
                            type="radio"
                            className="form-check-input"
                          />
                          <label className="form-check-label ml-1">
                            Inactive Listing
                          </label>
                        </div>
                      </div>
                      <div className="my-lg-0 my-3">
                        <a
                          href="#"
                          className="btn btn-sm btn-light-primary font-weight-bolder text-uppercase"
                          href={`/property/${propertyId}/unit/${unit.unit_id}`}
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
