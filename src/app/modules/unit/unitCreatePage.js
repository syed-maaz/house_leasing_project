import React, { useState } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";
import { FileUploadComponent } from "../../common/component/fileUploadComponent";

export const UnitCreatePage = () => {
  let history = useHistory();
  const suhbeader = useSubheader();
  suhbeader.setTitle("Unit Create");

  const [fileName, setFileName] = useState("");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                New Unit for - 3302 Villa Dr, 1 Unit
              </span>
            </h3>
          </div>
          <div className="card-body p-0">
            <div className="wizard wizard-1" data-wizard-state="step-first" data-wizard-clickable="false">
              <div className="wizard-nav border-bottom">
                <div className="wizard-steps p-8 p-lg-5">
                  <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-bus-stop"></i>
                      <h3 className="wizard-title">1. Basic</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow">
                      <img src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-right.svg")} />
                    </span>
                  </div>
                  <div className="wizard-step" data-wizard-type="step">
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-list"></i>
                      <h3 className="wizard-title">2. Details</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow">
                      <img src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-right.svg")} />
                    </span>
                  </div>
                  <div className="wizard-step" data-wizard-type="step">
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-globe"></i>
                      <h3 className="wizard-title">3. Review</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow last">
                      <img src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-right.svg")} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-10 px-8 my-lg-10 px-lg-10">
                <div className="col-xl-12 col-xxl-7">
                  <form className="border p-6 form" id="kt_form">
                    <div data-wizard-type="step-content" data-wizard-state="current">
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Basic Info</h3>
                      <div class="form-group pt-3">
                        <div class="col-md-6 p-0">
                          <FileUploadComponent
                            fileName={fileName}
                            uploadedFileName={setFileName}
                          />
                        </div>
                        <p>At least one photo is required.</p>
                        <p>You can add until 30 photos with 30MB each (format png, jpeg or gif)</p>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label>Unit name</label>
                            <input type="text" className="form-control form-control-solid form-control-lg" name="unit_name" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label>Lock Type</label>
                            <select name="country" className="form-control form-control-solid form-control-lg">
                              <option value="">Select a type</option>
                              <option value="">Manual</option>
                              <option value="">Remote</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Lock ID</label>
                            <input type="text" className="form-control form-control-solid form-control-lg" name="unit_name" />
                            <span class="form-text text-muted">Required for Remote Lock.</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <button className="btn btn-success font-size-h6">Register Lock ID <i class="ml-2 flaticon2-check-mark icon-1x"></i></button>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Bedrooms</label>
                            <input type="number" className="form-control form-control-solid form-control-lg" name="unit_name" min="0" max="10" value="0" />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <div class="form-check mt-11">
                              <input
                                name="formHorizontalRadios"
                                type="checkbox"
                                id="formHorizontalRadios1"
                                className="form-check-input"
                              />
                              <label
                                title=""
                                for="formfHorizontalRadios1"
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
                            <input type="number" className="form-control form-control-solid form-control-lg" name="unit_name" min="0" max="10" value="0" />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Half Bathrooms</label>
                            <input type="number" className="form-control form-control-solid form-control-lg" name="unit_name" min="0" max="10" value="0" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group m-0">
                            <label>Sq. Footage</label>
                            <input type="text" className="form-control form-control-solid form-control-lg" name="unit_name" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-wizard-type="step-content">
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Details</h3>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label className="font-size-h5">Pet Policy</label>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Pet Negotiable</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Pet Allowed</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">No Pets</label>
                            </div>
                            <div class="form-check">
                              <input name="formHorizontalRadios" type="radio" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Don't Speciy</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label className="font-size-h5">Features and Amenities</label>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Furnished</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Gym/Fitness Center</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Air Conditiong</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Hardwood Floors</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Fireplace</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Dishwasher</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Storage</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Walk-in Closest</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Pool</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Hot Tub</label>
                            </div>
                            <div class="form-check">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Wheelchair assessible</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group m-0">
                            <label className="font-size-h5">Other amenities (optional)</label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-wizard-type="step-content">
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Basic Info</h3>
                      <div class="form-group pt-3 mb-0">
                        <div class="col-md-6 p-0">
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
                            <label className="font-size-h5">Features and Amenities</label>
                            <ul>
                              <li className="pb-2">Washer (On Site)</li>
                              <li className="pb-2">Dryer (On Site)</li>
                              <li className="pb-2">Private Lot | Covered | For 2 cars</li>
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
                            <label className="font-size-h5">Other Amenities</label>
                            <ul>
                              <li className="pb-2">There is an acoustic isolated room for music studying and recordings.</li>
                              <li>There is a tennis table on recreation area.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between pt-10">
                      <div className="mr-2">
                        <button className="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4">Previous</button>
                      </div>
                      <div>
                        <button className="btn btn-success font-weight-bold text-uppercase px-9 py-4" data-wizard-type="action-submit">Submit</button>
                        <button className="btn btn-primary font-weight-bold text-uppercase px-9 py-4" data-wizard-type="action-next">Next Step</button>
                      </div>
                    </div>
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
