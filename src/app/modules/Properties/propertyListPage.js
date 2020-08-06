import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useSubheader } from "../../../_metronic/layout";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { getAllPropertiesByUserId } from "./propertyCrud";
import { PropertyCardComponent } from "./components/propertyCardComponent";

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

  const propertyCard = (items) => {
    return (
      <>
        {items.map((item, i) => (
          <PropertyCardComponent item={item} key={i} />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom overflow-hidden">
            <div className="card-body p-0">
              <div className="row justify-content-center py-8 px-8 py-md-15 px-md-0">
                <div className="col-md-11">
                  <div className="d-flex justify-content-between pb-1 pb-md-10 flex-column flex-md-row">
                    <div className="d-flex flex-column flex-root">
                      <h1 className="mb-2 font-weight-light font-size-h1 text-uppercase">
                        Properties
                      </h1>
                    </div>
                    <div className="d-flex flex-column flex-root align-items-md-end">
                      <NavLink
                        className="btn btn-light-primary font-weight-bold"
                        to="/property/new"
                      >
                        Create Property
                      </NavLink>
                    </div>
                  </div>

                  <div className="row">{propertyCard(properties)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
