import React, { useState } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";
import { FileUploadComponent } from "../../common/component/fileUploadComponent";

export const ListingCreatePage = () => {
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
                New Listing for - 3302 Villa Dr, 1 Unit
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
                      <i className="wizard-icon flaticon-attachment"></i>
                      <h3 className="wizard-title">2. Lease</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow">
                      <img src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-right.svg")} />
                    </span>
                  </div>
                  <div className="wizard-step" data-wizard-type="step">
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-list"></i>
                      <h3 className="wizard-title">3. Screening</h3>
                    </div>
                    <span className="svg-icon svg-icon-xl wizard-arrow">
                      <img src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-right.svg")} />
                    </span>
                  </div>
                  <div className="wizard-step" data-wizard-type="step">
                    <div className="wizard-label">
                      <i className="wizard-icon flaticon-globe"></i>
                      <h3 className="wizard-title">4. Review</h3>
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
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Basic</h3>
                      <div className="row pt-3">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label>Unit</label>
                            <select name="country" className="form-control form-control-solid form-control-lg">
                              <option value="">Select Unit</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group m-0">
                        <label>Cover Photo</label>
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
                            <label>Listing Headline</label>
                            <input type="text" className="form-control form-control-solid form-control-lg" name="unit_name" />
                            <span class="form-text text-muted">Example: "Beautiful 2 bedroom near downtown"</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group mb-0">
                            <label>Description</label>
                            <textarea className="form-control" placeholder="Why it is the better choice?"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-wizard-type="step-content">
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Lease</h3>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Monthly Rent</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Security Deposit (Optional)</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Lease Duration</label>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label ml-1">Don't specify a lease duration</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label ml-1">Minimum Lease Duration</label>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <label>In Months</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>When is it available?</label>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label ml-1">Don't specify a move-in date</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label ml-1">Available Now</label>
                            </div>
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label ml-1">Preferred Move-in Date</label>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <label>Move-in Date</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-wizard-type="step-content">
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Applicant Screening Tools</h3>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <p>Find qualified tenantsby requiring screening reports from all applicants</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Require applicant credit reports</label>
                            </div>
                            <p>All applicants will be promoted to submit a credit report with their application.</p>
                            <p>Include credit score, detailed payment history and dept overviews.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1">Require background checks</label>
                            </div>
                            <p>All applicants will be promoted to run a background check as part of their application.</p>
                            <p>Include a search for eviction and criminal records.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group mb-0">
                            <p className="mb-0">
                              By requesting or viewing applicant credit reports or background check reports. You
                              agree to comply with the <span className="font-weight-bold">Fair Credit Reporting
                              Act</span> and any applicable state laws governing the use of consumer reports.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-wizard-type="step-content">
                      <h3 className="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Your Listing Details</h3>
                      <div className="row pt-3">
                        <div className="col-xl-12">
                          <div className="form-group">
                            <h5 className="font-weight-bold">Beautiful 2 bedroom near downtown</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3">
                        <div className="col-xl-6">
                          <div className="form-group mb-0">
                            <FileUploadComponent
                              fileName={fileName}
                              uploadedFileName={setFileName}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <p className="mb-1">$1000/month</p>
                            <p className="mb-1">3 Bed | 2 Full Bath</p>
                            <p>1000 sq ft</p>

                            <p className="mb-1"><span className="font-weight-bold">Background Check:</span> Required</p>
                            <p><span className="font-weight-bold">Credit Report:</span> Required</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group mb-0">
                            <div class="form-check mb-1">
                              <input name="formHorizontalRadios" type="checkbox" className="form-check-input" />
                              <label className="form-check-label font-size-h6 ml-1 mb-2">Accepting Applicants</label>
                            </div>
                            <p className="mb-0">Activate your listing to invite renters to apply. (You can change it anytime)</p>
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
