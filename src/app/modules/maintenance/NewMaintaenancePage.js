import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  File
} from "react-bootstrap";

export const NewMaintenance = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("LeaseNinja | New Maintenance Request");

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                New Maintenance Request
              </span>
            </h3>
          </div>
          {/* Body */}
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select">
                      <option>Choose..</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>

                  <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Add photos, video, or files" />
                  </Form.Group>

                  <div className="float-right">
                    <Button variant="primary" type="submit">
                      Create Request
                    </Button>
                    <Button variant="danger" type="submit" className="ml-3">
                      Cancel
                    </Button>
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
