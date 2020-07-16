import React from "react";
import { Dashboard } from "../../_metronic/_partials";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

const cardStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rowTopMargin: {
    marginTop: 5,
  },
});

export function DashboardPage() {
  const classes = cardStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <div className={`row ${classes.rowTopMargin}`}>
        <div className="col-lg-6 col-xxl-4">
          <div className="col bg-light-success px-6 py-8 rounded-xl">
            <a
              href="#"
              className="text-success font-weight-bold font-size-h6 mt-2"
            >
              TOTAL RENT
            </a>
            <div className="d-flex align-items-center mt-2">
              <div className="flex-grow-1 text-success font-weight-bold font-size-h4 mt-2">$21,324</div>
              <span className="svg-icon svg-icon-3x svg-icon-success d-block">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4">
          <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
            <a
              href="#"
              className="text-primary font-weight-bold font-size-h6 mt-2"
            >
              TOTAL LIABILITIES
            </a>
            <div className="d-flex align-items-center mt-2">
              <div className="flex-grow-1 text-primary font-weight-bold font-size-h4 mt-2">$19,200</div>
              <span className="svg-icon svg-icon-3x svg-icon-primary d-block">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
            <a
              href="#"
              className="text-danger font-weight-bold font-size-h6 mt-2"
            >
              TOTAL TENANTS
            </a>
            <div className="d-flex align-items-center mt-2">
              <div className="flex-grow-1 text-danger font-weight-bold font-size-h4 mt-2">5</div>
              <span className="svg-icon svg-icon-3x svg-icon-danger d-block">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${classes.rowTopMargin}`}>
        <div className="col-lg-6 col-xxl-4">
          <div className="col bg-light-success px-6 py-8 rounded-xl">
            <a
              href="#"
              className="text-success font-weight-bold font-size-h6 mt-2"
            >
              TOTAL COMPLAINTS
            </a>
            <div className="d-flex align-items-center mt-2">
              <div className="flex-grow-1 text-success font-weight-bold font-size-h4 mt-2">7</div>
              <span className="svg-icon svg-icon-3x svg-icon-success d-block">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Urgent-mail.svg")} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4">
          <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
            <a
              href="#"
              className="text-primary font-weight-bold font-size-h6 mt-2"
            >
              TOTAL MAINTENANCE
            </a>
            <div className="d-flex align-items-center mt-2">
              <div className="flex-grow-1 text-primary font-weight-bold font-size-h4 mt-2">19,200</div>
              <span className="svg-icon svg-icon-3x svg-icon-primary d-block">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Tools.svg")} />
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
            <a
              href="#"
              className="text-danger font-weight-bold font-size-h6 mt-2"
            >
              TOTAL VACANCIES
            </a>
            <div className="d-flex align-items-center mt-2">
              <div className="flex-grow-1 text-danger font-weight-bold font-size-h4 mt-2">0</div>
              <span className="svg-icon svg-icon-3x svg-icon-danger d-block">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${classes.rowTopMargin}`}>
        <div className="col-lg-12">
          <div className={`card card-custom card-stretch gutter-b`}>
            {/* Head */}
            <div className="card-header border-0 py-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label font-weight-bolder text-dark">
                  Overdue Payments
                </span>
              </h3>
            </div>
            {/* Body */}
            <div className="card-body pt-0 pb-3">
              <div className="tab-content">
                <div className="table-responsive">
                  <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                    <thead>
                      <tr className="text-left text-uppercase">
                        <th className="pl-7" style={{ minWidth: "250px" }}>
                          <span className="text-dark-75">products</span>
                        </th>
                        <th style={{ minWidth: "100px" }}>earnings</th>
                        <th style={{ minWidth: "100px" }}></th>
                        <th style={{ minWidth: "100px" }}>company</th>
                        <th style={{ minWidth: "130px" }}>rating</th>
                        <th style={{ minWidth: "80px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0 py-8">
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
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Brad Simmons
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $8,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            In Proccess
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $520
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            Intertico
                          </span>
                          <span className="text-muted font-weight-bold">
                            Web, UI/UX Design
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Best Rated
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-0">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/018-girl-9.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Jessie Clarcson
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                C#, ASP.NET, MS SQL
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $23,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $1,600
                          </span>
                          <span className="text-muted font-weight-bold">
                            Rejected
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            Agoda
                          </span>
                          <span className="text-muted font-weight-bold">
                            Houses & Hotels
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Above Avarage
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-8">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/047-girl-25.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Lebron Wayde
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                PHP, Laravel, VueJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $34,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $6,700
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            RoadGee
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Best Rated
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-0 ">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/014-girl-7.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Natali Trump
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                Python, PostgreSQL, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-left pr-0">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $2,600,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $14,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            The Hill
                          </span>
                          <span className="text-muted font-weight-bold">
                            Insurance
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Avarage
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                            style={{ width: "7rem" }}
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className={`card card-custom card-stretch gutter-b`}>
            {/* Head */}
            <div className="card-header border-0 py-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label font-weight-bolder text-dark">
                  Payments
                </span>
              </h3>
            </div>
            {/* Body */}
            <div className="card-body pt-0 pb-3">
              <div className="tab-content">
                <div className="table-responsive">
                  <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                    <thead>
                      <tr className="text-left text-uppercase">
                        <th className="pl-7" style={{ minWidth: "250px" }}>
                          <span className="text-dark-75">products</span>
                        </th>
                        <th style={{ minWidth: "100px" }}>earnings</th>
                        <th style={{ minWidth: "100px" }}></th>
                        <th style={{ minWidth: "100px" }}>company</th>
                        <th style={{ minWidth: "130px" }}>rating</th>
                        <th style={{ minWidth: "80px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0 py-8">
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
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Brad Simmons
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $8,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            In Proccess
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $520
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            Intertico
                          </span>
                          <span className="text-muted font-weight-bold">
                            Web, UI/UX Design
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Best Rated
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-0">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/018-girl-9.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Jessie Clarcson
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                C#, ASP.NET, MS SQL
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $23,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $1,600
                          </span>
                          <span className="text-muted font-weight-bold">
                            Rejected
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            Agoda
                          </span>
                          <span className="text-muted font-weight-bold">
                            Houses & Hotels
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Above Avarage
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-8">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/047-girl-25.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Lebron Wayde
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                PHP, Laravel, VueJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $34,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $6,700
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            RoadGee
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Best Rated
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-0 ">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/014-girl-7.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Natali Trump
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                Python, PostgreSQL, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-left pr-0">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $2,600,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $14,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            The Hill
                          </span>
                          <span className="text-muted font-weight-bold">
                            Insurance
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Avarage
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                            style={{ width: "7rem" }}
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className={`card card-custom card-stretch gutter-b`}>
            {/* Head */}
            <div className="card-header border-0 py-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label font-weight-bolder text-dark">
                  Complains
                </span>
              </h3>
            </div>
            {/* Body */}
            <div className="card-body pt-0 pb-3">
              <div className="tab-content">
                <div className="table-responsive">
                  <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                    <thead>
                      <tr className="text-left text-uppercase">
                        <th className="pl-7" style={{ minWidth: "250px" }}>
                          <span className="text-dark-75">products</span>
                        </th>
                        <th style={{ minWidth: "100px" }}>earnings</th>
                        <th style={{ minWidth: "100px" }}></th>
                        <th style={{ minWidth: "100px" }}>company</th>
                        <th style={{ minWidth: "130px" }}>rating</th>
                        <th style={{ minWidth: "80px" }} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0 py-8">
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
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Brad Simmons
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                HTML, JS, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $8,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            In Proccess
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $520
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            Intertico
                          </span>
                          <span className="text-muted font-weight-bold">
                            Web, UI/UX Design
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Best Rated
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-0">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/018-girl-9.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Jessie Clarcson
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                C#, ASP.NET, MS SQL
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $23,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $1,600
                          </span>
                          <span className="text-muted font-weight-bold">
                            Rejected
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            Agoda
                          </span>
                          <span className="text-muted font-weight-bold">
                            Houses & Hotels
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Above Avarage
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-8">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/047-girl-25.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Lebron Wayde
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                PHP, Laravel, VueJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $34,000,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $6,700
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            RoadGee
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Best Rated
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-0 py-0 ">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/014-girl-7.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                Natali Trump
                              </a>
                              <span className="text-muted font-weight-bold d-block">
                                Python, PostgreSQL, ReactJS
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-left pr-0">
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $2,600,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            $14,000
                          </span>
                          <span className="text-muted font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            The Hill
                          </span>
                          <span className="text-muted font-weight-bold">
                            Insurance
                          </span>
                        </td>
                        <td>
                          <img
                            src={toAbsoluteUrl("/media/logos/stars.png")}
                            alt="image"
                            style={{ width: "5.5rem" }}
                          />
                          <span className="text-muted font-weight-bold d-block font-size-sm">
                            Avarage
                          </span>
                        </td>
                        <td className="pr-0 text-right">
                          <a
                            href="#"
                            className="btn btn-light-success font-weight-bolder font-size-sm"
                            style={{ width: "7rem" }}
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
