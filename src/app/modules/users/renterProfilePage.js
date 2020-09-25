import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";

export const RenterProfilePage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("LeaseNinja | Maintenance");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Renter Profile
              </span>
            </h3>
          </div>
          {/* Body */}
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="border p-6">
                  <h5 class="text-dark font-weight-bold text-center card-header pb-5 mb-5 pt-0">Basic Info</h5>
                  <p class="text-center pt-5 pb-5">Your profile is safe. It will only be seen by lordlands you share it with.</p>
                  <div className="form-group row justify-content-center">
                    <div className="col-md-8 text-center">
                      <div
                        className="w-75 image-input image-input-empty image-input-outline"
                        id="kt_image_5"
                        style={{
                          backgroundImage:
                            "url(assets/media/users/blank.png)",
                        }}
                      >
                        <div
                          className="image-input-wrapper w-100"
                          style={{ height: "300px" }}
                        ></div>
                        <label
                          className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                          data-action="change"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Change avatar"
                        >
                          <i className="fa fa-pen icon-sm text-muted"></i>
                          <input
                            type="file"
                            name="profile_avatar"
                            accept=".png, .jpg, .jpeg"
                          />
                          <input
                            type="hidden"
                            name="profile_avatar_remove"
                          />
                        </label>
                        <span
                          className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                          data-action="cancel"
                          data-toggle="tooltip"
                          title="Cancel avatar"
                        >
                          <i className="ki ki-bold-close icon-xs text-muted"></i>
                        </span>
                        <span
                          className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                          data-action="remove"
                          data-toggle="tooltip"
                          title="Remove avatar"
                        >
                          <i className="ki ki-bold-close icon-xs text-muted"></i>
                        </span>
                      </div>
                      <label className="col-md-12 col-form-label">
                        Update a Profile Photo
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label>Date of Birth</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="mm/dd/yyyy"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="(555) 555-5678"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-0">
                    <div className="col-md-12">
                      <label>Bio (Optional)</label>
                      <textarea class="form-control">Why are you the perfect renter?</textarea>
                    </div>
                  </div>
                </div>

                <div className="border mt-10 mb-10">
                  <div className="pt-6 pr-6 pl-6">
                    <h5 class="text-dark font-weight-bold text-center card-header pb-5 pt-0">Employment and Income</h5>
                  </div>
                  <h1 class="p-5 font-weight-bold font-size-h5 table-secondary">Employer 1</h1>
                  <div className="p-6">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Employer</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Title / Position</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 ml-2">
                        <input
                          className="form-check-input mr-5"
                          type="checkbox"
                        />
                        <label class="form-check-label ml-2">
                          It is my current work
                        </label>
                      </div>
  									</div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label>Contact Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Contact Email</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Contact Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="(555) 555-5678"
                        />
                      </div>
                    </div>
                    <div class="text-center">
                      <button className="btn btn-primary mb-10">Add another employer</button>
                      <h5 className="mb-5">Additional Income</h5>
                      <button className="btn btn-primary">Add an income source</button>
                    </div>
                  </div>
                </div>

                <div className="border mt-10 mb-10">
                  <div className="pt-6 pr-6 pl-6">
                    <h5 class="text-dark font-weight-bold text-center card-header pb-5 pt-0">Residence History</h5>
                  </div>
                  <h1 class="p-5 font-weight-bold font-size-h5 table-secondary">Residence 1</h1>
                  <div className="p-6">
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label>Street Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apt / Unit"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-3">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-3">
                        <label>Zip</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 ml-2">
                        <input
                          className="form-check-input mr-5"
                          type="checkbox"
                        />
                        <label class="form-check-label ml-2">
                          I currently live here
                        </label>
                      </div>
  									</div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Move in Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Move out Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Monthly Rent</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="$ 0 / month"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label>Landlord Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Contact Email</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Contact Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="(555) 555-5678"
                        />
                      </div>
                    </div>
                    <div class="text-center">
                      <button className="btn btn-primary">Add another residence</button>
                    </div>
                  </div>
                </div>

                <div className="border mt-10 mb-10">
                  <div className="p-6">
                    <h5 class="text-dark font-weight-bold text-center card-header pb-5 pt-0">Refrences</h5>
                    <p class="mt-5 text-center mb-0">Include at least two refernces, such as co-workers, teacher, former landlords, etc.</p>
                  </div>
                  <h1 class="p-5 font-weight-bold font-size-h5 table-secondary">Reference 1</h1>
                  <div className="p-6">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Contact Email</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="(555) 555-5678"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Contact Email</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="(555) 555-5678"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Relation</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Years Known</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div class="text-center">
                      <button className="btn btn-primary">Add another reference</button>
                    </div>
                  </div>
                </div>

                <div className="border mt-10 mb-10">
                  <div className="pt-6 pr-6 pl-6">
                    <h5 class="text-dark font-weight-bold text-center card-header pb-5 pt-0">Additional Info</h5>
                  </div>
                  <h1 class="p-5 font-weight-bold font-size-h5 table-secondary">Emergency Contact</h1>
                  <div className="p-6">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label>Contact Email</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="(555) 555-5678"
                        />
                      </div>
                    </div>
                    <div class="text-center">
                      <h5 className="mb-5">Pets</h5>
                      <button className="btn btn-primary">Add a pet</button>
                      <div class="row mt-10">
                        <div class="col-md-6">
                          <button className="btn btn-primary" style={{width: "100%"}}>Save Draft</button>
                        </div>
                        <div class="col-md-6">
                          <button className="btn btn-primary" style={{width: "100%"}}>Save and Continue</button>
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
