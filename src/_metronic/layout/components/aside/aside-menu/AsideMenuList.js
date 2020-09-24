/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = url => {
    return checkIsActive(location, url)
      ? " menu-item-active menu-item-open "
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item ${getMenuItemActive("/dashboard")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">DASHBOARD</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/payments")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/payments">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")}
              />
            </span>
            <span className="menu-text">PAYMENTS</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="/maintenance">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Tools.svg")} />
            </span>
            <span className="menu-text">MAINTENANCE</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Mail-opened.svg"
                )}
              />
            </span>
            <span className="menu-text">INVOICE</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="/applicants">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Clipboard.svg")}
              />
            </span>
            <span className="menu-text">APPLICANTS</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
              />
            </span>
            <span className="menu-text">TENATS</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Sending mail.svg"
                )}
              />
            </span>
            <span className="menu-text">COMPLAINTS</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Devices/Speaker.svg")}
              />
            </span>
            <span className="menu-text">ANNOUNCEMENTS</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="/properties">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Building.svg")} />
            </span>
            <span className="menu-text">PROPERTIES</span>
          </NavLink>
        </li>

        <li className={`menu-item`} aria-haspopup="true">
          <NavLink className="menu-link" to="">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Hummer.svg")} />
            </span>
            <span className="menu-text">SETUP</span>
          </NavLink>
        </li>
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
