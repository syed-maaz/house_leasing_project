import React, { useState, useEffect, useContext } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";
import { FileUploadComponent } from "../../common/component/fileUploadComponent";
import { MetronicSplashScreenContext } from "../../../_metronic/layout/_core/MetronicSplashScreen";

import { getPropertyById } from "../Properties/propertyCrud";

import { BasicFormComponent } from "./components/basicFormComponent";
import { DetailsFormComponent } from "./components/detailsFormComponent";

export const UnitCreatePage = (props) => {
  let history = useHistory();
  const suhbeader = useSubheader();
  suhbeader.setTitle("Unit Create");
  const setSplashScreen = useContext(MetronicSplashScreenContext);

  const [fileName, setFileName] = useState("");

  const propertyId = props.match.params.propertyId;

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
  }, [propertyId]);

  const toNextStep = (values) => {
    setUnitObj({ ...unitObj, ...values });
    setFormStep(formStep + 1);
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
                    <BasicFormComponent toNextStep={toNextStep} />
                  </div>

                  {/* Details form */}
                  <div
                    data-wizard-type="step-content"
                    data-wizard-state={formStep === 2 ? "current" : ""}
                  >
                    <DetailsFormComponent toNextStep={toNextStep} />
                  </div>

                  {/* Review form */}
                  <div
                    data-wizard-type="step-content"
                    data-wizard-state={formStep === 3 ? "current" : ""}
                  >
                    <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">
                      Basic Info
                    </h3>
                    <div className="form-group pt-3 mb-0">
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
                          <label className="font-size-h5">House One</label>
                          <p className="mb-0">3 Bed | 2 Full Bath</p>
                          <p>1000 sq ft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <label className="font-size-h5">Pet Policy</label>
                          <ul>
                            <li>Pet Allowed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <label className="font-size-h5">
                            Features and Amenities
                          </label>
                          <ul>
                            <li className="pb-2">Washer (On Site)</li>
                            <li className="pb-2">Dryer (On Site)</li>
                            <li className="pb-2">
                              Private Lot | Covered | For 2 cars
                            </li>
                            <li className="pb-2">Gym/Fitness Center</li>
                            <li className="pb-2">Air Conditioning</li>
                            <li className="pb-2">Dishwasher</li>
                            <li className="pb-2">Storage</li>
                            <li>Private | Patio | Garden</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group mb-0">
                          <label className="font-size-h5">
                            Other Amenities
                          </label>
                          <ul>
                            <li className="pb-2">
                              There is an acoustic isolated room for music
                              studying and recordings.
                            </li>
                            <li>There is a tennis table on recreation area.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
