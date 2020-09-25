import React, { useState, useEffect, useContext } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";

import { MetronicSplashScreenContext } from "../../../_metronic/layout/_core/MetronicSplashScreen";

import { getPropertyById } from "../Properties/propertyCrud";
import { getUnitsByPropertyId } from "../unit/unitCrud";
import { createListing } from "./listingCrud";

import { BasicListingFormComponent } from "./components/basicListingFormComponent";
import { LeaseListingFormComponent } from "./components/leaseListingFormComponent";
import { ScreeningListingFormComponent } from "./components/screeningListingFormComponent";
import { ReviewListingFormComponent } from "./components/reviewListingFormComponent";

export const ListingCreatePage = (props) => {
  const history = useHistory();
  const suhbeader = useSubheader();
  suhbeader.setTitle("Unit Create");

  const setSplashScreen = useContext(MetronicSplashScreenContext);

  const [propertyDet, setPropertyDet] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [formObj, setFormObj] = useState({});
  const [formStep, setFormStep] = useState(1);

  const { propertyId, listingId } = props.match.params;

  const changeFormStep = (value, move) => {
    setFormObj({ ...formObj, ...value });
    if (move === "prev") {
      setFormStep(formStep - 1);
    } else if (move === "frwd") {
      setFormStep(formStep + 1);
    }
  };

  useEffect(() => {
    setSplashScreen(true);

    (async () => {
      const {
        data: {
          output: [property],
        },
      } = await getPropertyById(propertyId, 1);
      setPropertyDet(...propertyDet, property);

      const {
        data: { output },
      } = await getUnitsByPropertyId(propertyId);

      setUnitList(output);

      setSplashScreen(false);
    })();
  }, [propertyId, listingId]);

  const handleSubmit = async (obj) => {
    setFormObj({ ...formObj, ...obj });
    const requestObj = {};
    // obj.property_id = propertyId;

    obj.availability = JSON.stringify(obj.availability);
    obj.lease_duration = JSON.stringify(obj.lease_duration);

    if (listingId !== "new") {
      requestObj.listing_id = listingId;
      requestObj.unit_id = obj.unit_id;
      requestObj.updatedata = obj;
    } else {
      requestObj.createdata = obj;
    }
    const {
      data: { output, status, message },
    } = await createListing(requestObj);

    // console.log(output);
    if (status === "Success") {
      history.push(`/property/detail/${propertyId}#listings`);
    }
  };

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                New Listing for - {propertyDet.street_address},{" "}
                {propertyDet.city}
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
                      <i className="wizard-icon flaticon-attachment"></i>
                      <h3 className="wizard-title">2. Lease</h3>
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
                      <i className="wizard-icon flaticon-list"></i>
                      <h3 className="wizard-title">3. Screening</h3>
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
                    data-wizard-state={formStep === 4 ? "current" : ""}
                  >
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-globe"></i>
                      <h3 className="wizard-title">4. Review</h3>
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
                  <form className="border p-6 form" id="kt_form">
                    {/* Basic Form */}
                    <div
                      data-wizard-type="step-content"
                      data-wizard-state={formStep === 1 ? "current" : ""}
                    >
                      <BasicListingFormComponent
                        unitList={unitList}
                        formObj={formObj}
                        changeFormStep={changeFormStep}
                      />
                    </div>
                    {/* End Basic Form */}
                    {/* Lease Form */}
                    <div
                      data-wizard-type="step-content"
                      data-wizard-state={formStep === 2 ? "current" : ""}
                    >
                      <LeaseListingFormComponent
                        formObj={formObj}
                        changeFormStep={changeFormStep}
                      />
                    </div>
                    {/* End Lease Form */}
                    {/* Screening Form */}
                    <div
                      data-wizard-type="step-content"
                      data-wizard-state={formStep === 3 ? "current" : ""}
                    >
                      <ScreeningListingFormComponent
                        formObj={formObj}
                        changeFormStep={changeFormStep}
                      />
                    </div>
                    {/* End Screening Form */}
                    {/* Review Form */}
                    <div
                      data-wizard-type="step-content"
                      data-wizard-state={formStep === 4 ? "current" : ""}
                    >
                      <ReviewListingFormComponent
                        formObj={formObj}
                        changeFormStep={changeFormStep}
                        handleSubmit={handleSubmit}
                      />
                    </div>
                    {/* End Review Form */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
