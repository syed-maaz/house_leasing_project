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
  File
} from "react-bootstrap";

export const MaintenanceDetail = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("LeaseNinja | New Maintenance Request");
<<<<<<< HEAD
  const fileRef = useRef(null);
  const [commentData, setCommentData] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const [ticket, setTicket] = useState(null);
  const [replies, setReplies] = useState([]);
  const [files, setFiles] = useState([])
  const [filesPreviews, setFilesPreviews] = useState([])
  const [loadingAddComment, setLoadingAddComment] = useState(false)

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      setCurrentUser(user);
      getTicket(match.params.id).then(res => {
        setTicket(res.data);
      });

      getReplies(match.params.id).then(res => {
        setReplies(res.data);
      });
    });
  }, []);

  if (!ticket) return <div />;

  const handleCommentChange = e => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    });
  };


  const getFromComment = (html, name) => {
    const holder = document.createElement('div')
    holder.innerHTML = html
    const el = holder.querySelector(`#${name}`)
    if (!el) return ''
    return el.innerText
  }

  const addComment = e => {
    e.preventDefault();
    if (loadingAddComment) return;
    if (!commentData.comment) return;

    setLoadingAddComment(true)
    addReply(match.params.id, files, {
      body: `<div>
        <div><b>email: </b> <span id="email">${currentUser.attributes.email}</div>
        <p id="text">${commentData.comment}</p>
      </div>`
    }).then(res => {
      setLoadingAddComment(false)
      setReplies([...replies, res.data]);
      setCommentData({})
      setFiles([])
      setFilesPreviews([])
    });
  };

  const handleCloseTicket = (e) => {
    e.preventDefault()
    closeTicket(match.params.id, ticket.status).then((res) => {
      setTicket({
        ...ticket,
        status: res.data.status
      })
    })
  }

  const groupedRepliesByDate = replies.reduce((ac, reply) => {
    const date = format(new Date(reply.created_at), 'yyyy-MM-dd')
    return {
      ...ac,
      [date]: [
        ...(ac[date] || []),
        reply
      ]
    }
  }, {})

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
=======
>>>>>>> parent of ae009ab... maintanance: add ticket, reply, list open and closed ..

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Maintenance Request
              </span>
            </h3>
          </div>
          {/* Body */}
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-12 d-flex justify-content-between">
                <span className="d-flex flex-column flex-root font-weight-bolder text-dark font-size-h3"></span>
                <span className="d-flex flex-column flex-root text-right">
                  <p className="font-weight-bolder m-0 font-size-h5">Jerry Mattedi</p>
                  <p className="mb-6">Tenant</p>
                  <p className="m-0">302 Villa De</p>
                  <p className="mb-6">Unit 2</p>
                </span>
              </div>
              <div className="col-md-12 d-flex justify-content-end ">
                <NavLink
                  className="d-flex btn btn-light-primary font-weight-bold flex-end"
                  to="/maintenance/new"
                >
                  Send To Vendor
                </NavLink>
              </div>
              {/* Chat Table */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="col-md-12 mt-10">
=======
              <div className="col-md-12 d-flex justify-content-end mt-10">
>>>>>>> parent of d0be4f3... fix replies body and grid
=======
              <div className="col-md-12 d-flex justify-content-end mt-10">
>>>>>>> parent of d0be4f3... fix replies body and grid
                {
                  Object.keys(groupedRepliesByDate).map(date => {
                    const replies = groupedRepliesByDate[date]
                    const dateObj = new Date(date)
                    return <table key={date} className="table table-head-custom table-head-bg table-bordered table-hover table-vertical-center">
                      <thead>
                        <tr>
                          {
                            isToday(dateObj) &&
                            <th>Today</th>
                          }

                          {
                            isYesterday(dateObj) &&
                            <th>Today</th>
                          }

                          {
                            !isToday(dateObj) && !isYesterday(dateObj) &&
                            <th>{format(dateObj, "MMM dd, yyyy")}</th>
                          }

                        </tr>
                      </thead>
                      <tbody>
                        {replies.map(reply => {
                          return (
                            <tr key={reply.id}>
                              <td
                                className={
                                  getFromComment(reply.body, 'email').email ===
                                    currentUser.attributes.email
                                    ? "active"
                                    : ""
                                }
                              >
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
                                  <div className="w-100">
                                    <span className="d-flex justify-content-between w-100">
                                      <a
                                        href={() => false}
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-h3 "
                                      >
                                        {getFromComment(reply.body, 'email')}
                                      </a>
                                      <span>
                                        {format(new Date(reply.created_at), "HH:MM a")}
                                      </span>
                                    </span>

                                    <p className="text-muted font-weight-bold">
                                      {getFromComment(reply.body, 'text')}
                                    </p>
                                    <div className="reply-attachements">
                                      {reply.attachments.map(attachment => {
                                        return (
                                          <a
                                            key={attachment.id}
                                            href={attachment.attachment_url}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                          >
                                            <img alt={attachment.name} src={attachment.attachment_url} className="img-thumbnail rounded mr-10" style={{ height: '100px' }} />
                                          </a>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>


                  })
                }
=======
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
>>>>>>> parent of ae009ab... maintanance: add ticket, reply, list open and closed ..
              </div>
              <div className="row col-md-12 justify-content-center mt-10 p-0">
                <Form className="col-md-12">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Add Comment</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                  <div className="d-flex mt-5">
                    <span className="d-flex flex-root flex-column font-weight-bold">
                      <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Add photos, video, or files" />
                      </Form.Group>
                    </span>
                    <span className="d-flex flex-root flex-column justify-content-end">
                      <div className="col-md-12 d-flex justify-content-end pr-0">
                        <div className="float-right">
                          <NavLink
                            className="btn btn-light-danger font-weight-bold2"
                            to=""
                          >
                            Close Ticket
                          </NavLink>
                          <NavLink
                            className="btn btn-light-primary font-weight-bold flex-end ml-3"
                            to=""
                          >
                            Add Comment
                          </NavLink>
                        </div>
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
