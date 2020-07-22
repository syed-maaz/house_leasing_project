import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

export const MaintenanceDetail = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("LeaseNinja | New Maintenance Request");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          {/* <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Maintenance Request
              </span>
            </h3>
          </div> */}
          {/* Body */}
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12 d-flex justify-content-between">
                <span className="d-flex flex-column flex-root font-weight-bolder text-dark font-size-h3">
                  Maintenance Request
                </span>
                <span className="d-flex flex-column flex-root font-size-h6 text-right">
                  <p className="font-weight-bolder">Jerry Mattedi</p>
                  <p>Tenant</p>
                  <p></p>
                  <p>302 Villa De</p>
                  <p>Unit 2</p>
                </span>
              </div>
              <div className="col-md-12 d-flex justify-content-end ">
                <NavLink
                  className="d-flex btn btn-light-primary font-weight-bold flex-end "
                  to="/maintenance/new"
                >
                  Send To Vendor
                </NavLink>
              </div>
              {/* Chat Table */}
              <div className="col-md-12 d-flex justify-content-end mt-10">
                <table className="table table-head-custom table-head-bg table-bordered table-hover table-vertical-center">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/avatars/001-boy.svg"
                                  )}
                                />
                              </span>
                            </span>
                          </div>
                          <div>
                            <a
                              href={() => false}
                              className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-h3 "
                            >
                              Brad Simmons
                            </a>
                            <p className="text-muted font-weight-bold">
                              Hello I have a problem
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/avatars/001-boy.svg"
                                  )}
                                />
                              </span>
                            </span>
                          </div>
                          <div>
                            <a
                              href={() => false}
                              className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-h3 "
                            >
                              Jimmy
                            </a>
                            <p className="text-muted font-weight-bold">
                              What Problem
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/avatars/001-boy.svg"
                                  )}
                                />
                              </span>
                            </span>
                          </div>
                          <div>
                            <a
                              href={() => false}
                              className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-h3 "
                            >
                              Brad Simmons
                            </a>
                            <p className="text-muted font-weight-bold">
                              There is water leakage
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row col-md-12 justify-content-center mt-10">
                <Form className="col-md-12">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Add Comment</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                  <div className="row d-flex col-md-12  mt-5">
                    <span className="d-flex flex-root flex-column font-weight-bold">
                      Add Photos, Videos or File
                    </span>
                    <span className="d-flex flex-root flex-column justify-content-end">
                      <div className="col-md-12 d-flex justify-content-end ">
                        <NavLink
                          className="d-flex btn btn-light-primary font-weight-bold flex-end ml-2"
                          to=""
                        >
                          Send
                        </NavLink>
                        <NavLink
                          className="d-flex btn btn-light-primary font-weight-bold flex-end ml-2"
                          to=""
                        >
                          Close Ticket
                        </NavLink>
                      </div>
                    </span>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
