import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Tabs, Tab } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export const NewUserDetailPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  return (
    <>
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="col-md-12">
            <div className="card card-custom card-stretch gutter-b">
              <div className="card-body">
                <div className="row border-bottom pb-5">
                  <div className="col-md-8  pl-5 pr-5">
                    <div className="row border-bottom">
                      <span className=" font-size-h1">User Detail</span>
                    </div>
                    <div className="pt-15">
                      <form className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <input
                                placeholder="Username"
                                type="text"
                                id="username"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              placeholder="Email"
                              type="text"
                              id="username"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <input
                                placeholder="First Name"
                                type="text"
                                id="username"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              placeholder="Last Name"
                              type="text"
                              id="username"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <select id="formBasicEmail" class="form-control">
                                <option>Role</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label class="form-check-label">
                              Send Email Notification
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row border-bottom">
                      <span className=" font-size-h1">Profile Picture</span>
                    </div>

                    <div className="row pt-15">
                      <div
                        className="w-100 image-input image-input-empty image-input-outline pl-15 pr-15"
                        id="kt_image_5"
                        style={{
                          backgroundImage: "url(assets/media/users/blank.png)",
                        }}
                      >
                        <div
                          className="image-input-wrapper w-100"
                          style={{ height: "250px" }}
                        ></div>
                      </div>
                    </div>
                    <div className="row pt-5">
                      <div className="col-md-12 d-flex justify-content-center">
                        <button className="btn btn-default">
                          Select Pictue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-5">
                  <button className="btn btn-primary m-5">Add User</button>
                  <button className="btn btn-default m-5">cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
