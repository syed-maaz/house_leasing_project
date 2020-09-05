import React, { useState, useEffect, useContext } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";

import { MetronicSplashScreenContext } from "../../../_metronic/layout/_core/MetronicSplashScreen";

import { getPropertyById } from "../Properties/propertyCrud";
import { createUnit, getUnitById } from "./unitCrud";

import { BasicFormComponent } from "./components/basicFormComponent";
import { DetailsFormComponent } from "./components/detailsFormComponent";
import { ReviewFormComponent } from "./components/reviewFormComponent";
import { property } from "lodash";

export const UnitCreatePage = (props) => {
  let history = useHistory();
  const suhbeader = useSubheader();
  suhbeader.setTitle("Unit Create");
  const setSplashScreen = useContext(MetronicSplashScreenContext);

  const [fileName, setFileName] = useState("");

  const { propertyId, unitId } = props.match.params;

  if (!propertyId) {
    history.push("/properties");
  }

  const [propertyDet, setPropertyDet] = useState([]);
  const [unitObj, setUnitObj] = useState({});
  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    setSplashScreen(true);

    (async () => {
      const {
        data: { output },
      } = await getPropertyById(propertyId, 1);
      setPropertyDet(...propertyDet, output[0]);
      setSplashScreen(false);
    })();

    (async () => {
      if (unitId !== "new") {
        const {
          data: {
            output: [unitDet],
          },
        } = await getUnitById(unitId, propertyId);

        setUnitObj(unitDet);
      }
    })();
  }, [propertyId, unitId]);

  const toNextStep = (values) => {
    setUnitObj({ ...unitObj, ...values });
    setFormStep(formStep + 1);
  };

  const handleSubmitUnit = async () => {
    const requestObj = {};
    unitObj.property_id = propertyId;

    if (unitId !== "new") {
      requestObj.unit_id = unitId;
      requestObj.property_id = propertyId;
      requestObj.updatedata = unitObj;
    } else {
      requestObj.createdata = unitObj;
    }

    const {
      data: { output, status, message },
    } = await createUnit(requestObj);

    // console.log(output);
    if (status === "Success") {
      history.push(`/property/detail/${propertyId}`);
    }
  };

  const toPreviousStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                New Unit for - {propertyDet.street_address}
              </span>
            </h3>
          </div>
          <div className="card-body p-0">
            <div
              className="wizard wizard-1"
              data-wizard-state="step-first"
              data-wizard-clickable="false"
            >
              <div className="wizard-nav border-bottom">
                <div className="wizard-steps p-8 p-lg-5">
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state={formStep === 1 ? "current" : ""}
                  >
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-bus-stop"></i>
                      <h3 className="wizard-title">1. Basic</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow">
                      <img
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Navigation/Arrow-right.svg"
                        )}
                      />
                    </span>
                  </div>
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state={formStep === 2 ? "current" : ""}
                  >
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-list"></i>
                      <h3 className="wizard-title">2. Details</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow">
                      <img
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Navigation/Arrow-right.svg"
                        )}
                      />
                    </span>
                  </div>
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state={formStep === 3 ? "current" : ""}
                  >
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-globe"></i>
                      <h3 className="wizard-title">3. Review</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow last">
                      <img
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Navigation/Arrow-right.svg"
                        )}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center my-10 px-8 my-lg-10 px-lg-10">
                <div className="col-xl-12 col-xxl-7">
                  {/* Basic form */}
                  <div
                    data-wizard-type="step-content"
                    data-wizard-state={formStep === 1 ? "current" : ""}
                  >
                    <BasicFormComponent
                      toNextStep={toNextStep}
                      unitObj={unitObj}
                    />
                  </div>

                  {/* Details form */}
                  <div
                    data-wizard-type="step-content"
                    data-wizard-state={formStep === 2 ? "current" : ""}
                  >
                    <DetailsFormComponent
                      toNextStep={toNextStep}
                      unitObj={unitObj}
                      toPreviousStep={toPreviousStep}
                    />
                  </div>

                  {/* Review form */}
                  <div
                    data-wizard-type="step-content"
                    data-wizard-state={formStep === 3 ? "current" : ""}
                  >
                    <ReviewFormComponent
                      unitDet={unitObj}
                      propertyDet={propertyDet}
                      toPreviousStep={toPreviousStep}
                      submitUnit={handleSubmitUnit}
                    />
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
