import React from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownCustomToggler } from "../../../../_metronic/_partials/dropdowns";

export const PropertyMenuDropdown = (props) => {
  const { id } = props;
  return (
    <Dropdown className="dropdown-inline" alignRight>
      <Dropdown.Toggle
        className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
        variant="transparent"
        id="dropdown-toggle-top"
        as={DropdownCustomToggler}
      >
        <i className="ki ki-bold-more-hor" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
        <Dropdown.Item tag="a" href={`/property/detail/${id}#payments`}>
          Payment
        </Dropdown.Item>
        <Dropdown.Item tag="a" href={`/property/detail/${id}#listings`}>
          Listings
        </Dropdown.Item>
        <Dropdown.Item tag="a" href={`/property/detail/${id}#applications`}>
          Applications
        </Dropdown.Item>
        <Dropdown.Item tag="a" href={`/property/edit/${id}`}>
          Edit Property
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
