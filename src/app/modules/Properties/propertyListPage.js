import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useSubheader } from "../../../_metronic/layout";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { getAllPropertiesByUserId } from "./propertyCrud";
import { PropertyCardComponent } from "./components/propertyCardComponent";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export const PropertyListPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Property Detail");

  let history = useHistory();

  const [properties, setProperties] = useState([]);

  const { user } = useSelector(
    ({ auth }) => ({
      user: auth.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    // code to run on component mount
    (async () => {
      const {
        data: { output },
      } = await getAllPropertiesByUserId(user.id);

      setProperties(...properties, output);
    })();
  }, [user]);

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          {/* Head */}
          <div className="card-header py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Properties
              </span>
            </h3>
            <div className="d-flex flex-column flex-root align-items-md-end">
              <NavLink
                className="btn btn-light-primary font-weight-bold"
                to="/property/new"
              >
                Create Property
              </NavLink>
            </div>
          </div>
          <div className="card-body">
            <div className="text-center pb-5">
              <h4><img src={toAbsoluteUrl('/media/svg/icons/Code/Loading.svg')} /> Loading ...</h4>
            </div>
            <div className="row">
              {properties.map((item, i) => (
                <PropertyCardComponent item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
