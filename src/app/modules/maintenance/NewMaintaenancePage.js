import React, { useRef, useState, useEffect } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Redirect } from "react-router-dom";
import {
  Form,
  Button,
} from "react-bootstrap";
import { addTicket } from "../../common/crud/freshdesk";
import { Auth } from "aws-amplify";
import { getAllPropertiesByUserId } from "../Properties/propertyCrud";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export const NewMaintenance = () => {
  const suhbeader = useSubheader();
  const fileRef = useRef(null);
  const [ticketData, setTicketDate] = useState({});
  const [user, setUser] = useState(null)
  const [properties, setProperties] = useState([]);
  const [loadingProperties, setLoadingProperties] = useState(false)
  const [search, setSearch] = useState('')
  const [files, setFiles] = useState([])
  const [createdTicket, setCreatedTicket] = useState(null)
  const [loadingCreateTicket, setLoadingCreateTicket] = useState(false)
  const [filesPreviews, setFilesPreviews] = useState([])

  suhbeader.setTitle("LeaseNinja | New Maintenance Request");

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      setUser(user)
    })
  }, [])

  useEffect(() => {
    if (user) {
      (async () => {
        setLoadingProperties(true)
        const {
          data: { output }
        } = await getAllPropertiesByUserId(user.username);

        setProperties(...properties, output);
        setLoadingProperties(false)
      })();
    }
  }, [user]);

  const getAddress = (location) => `${location.zip}, ${location.street_address} ${location.address2}, ${location.city}, ${location.state_name}`

  const createTicket = e => {
    e.preventDefault();
    if (loadingCreateTicket) return;

    const location = ticketData.location
    const address = getAddress(location)
    setLoadingCreateTicket(true)
    addTicket(files, {
      email: user.attributes.email,
      name: user.attributes.email,
      subject: ticketData.subject,
      description: ticketData.message,
      priority: 1,
      status: 2,
      custom_fields: {
        cf_location: ticketData.location.property_id,
        cf_location_address: address,
        cf_location_unit: location.unit,
        cf_userdatakey: user.userDataKey
      }
    }).then(res => {
      setCreatedTicket(res.data)
    });
  };

  const addFilePreview = (file) => {
    return new Promise((resolve) => {
      var reader = new FileReader();

      reader.onload = function (e) {
        resolve(e.target.result);
      }

      reader.readAsDataURL(file);
    })

  }

  const handleFileChange = async (e) => {
    const newFiles = [...files, ...fileRef.current.files]
    setFiles(newFiles)
    const previewPromises = [...fileRef.current.files].map(async file => {
      return await addFilePreview(file)
    })

    Promise.all(previewPromises).then(previews => {
      setFilesPreviews([...filesPreviews, ...previews])
    })
  }

  const handleChange = e => {
    setTicketDate({
      ...ticketData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const selectLocation = e => {
    setTicketDate({
      ...ticketData,
      location: e
    });
  }

  const groupedProperties = properties.reduce((ac, p) => {
    const address = getAddress(p)
    return {
      ...ac,
      [address]: [
        ...(ac[address] || []),
        p
      ]
    }
  }, {})

  return (
    <>
      {
        createdTicket &&
        <Redirect to={`/maintenance/detail/${createdTicket.id}`} />
      }
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
                  {!ticketData.location &&
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>HouseHold</Form.Label>
                      <p>All registered tenants will be notified by e-mail and be able to view and communicate on the issue.</p>

                      <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <Form.Control
                          type="text"
                          name="location_search"
                          onChange={handleSearch}
                          placeholder="Find an address, unit or tenant"
                          className=""
                        />
                      </div>
                      {
                        loadingProperties && <div className="text-center pb-5">
                          <h4 className="m-0">
                            <img
                              src={toAbsoluteUrl("/media/svg/icons/Code/Loading.svg")}
                            />{" "}
                          Loading ...
                        </h4>
                        </div>
                      }
                      {
                        Object.keys(groupedProperties)
                          .filter(e => e.toLowerCase().includes(search.toLowerCase()))
                          .map((address) => {
                            return <table className="table table-outer-border mt-10">
                              <thead className="thead-light ">
                                <tr>
                                  <th colSpan={3}>{address}</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  groupedProperties[address].map((p) => {
                                    return <tr className="align-middle">
                                      <td className="align-middle md">Unit {p.unit}</td>
                                      <td className="align-middle">Waiting for tenant</td>
                                      <td className="text-right align-middle">
                                        <button class="btn btn-light" onClick={() => selectLocation(p)}>select</button>
                                      </td>
                                    </tr>
                                  })
                                }
                              </tbody>
                            </table>
                          })
                      }
                    </Form.Group>
                  }
                  {
                    ticketData.location &&
                    <>
                      <table className="table table-outer-border mt-10">
                        <thead className="thead-light ">
                          <tr>
                            <th colSpan={3}>{getAddress(ticketData.location)}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="align-middle">
                            <td className="align-middle md">Unit {ticketData.location.unit}</td>
                            <td className="align-middle">Waiting for tenant</td>
                            <td className="text-right align-middle">
                              <button class="btn btn-light" onClick={() => selectLocation(null)}>Change</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          onChange={handleChange}
                          placeholder="Subject"
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <div class="d-flex mt-5">
                        {
                          filesPreviews.map(filePreview => {
                            return <div>
                              <img alt="preview" src={filePreview} className="img-thumbnail rounded mr-10" style={{ height: '100px' }} />
                            </div>
                          })
                        }
                      </div>

                      <Form.Group>
                        <Form.File
                          onChange={handleFileChange}
                          ref={fileRef}
                          id="exampleFormControlFile1"
                          label="Add photos, video, or files"
                          multiple
                        />
                      </Form.Group>



                      <div className="float-right">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={createTicket}
                        >
                          Create Request { loadingCreateTicket ? '...' : '' }
                        </Button>
                        <Button variant="danger" type="submit" className="ml-3">
                          Cancel
                        </Button>
                      </div>
                    </>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
