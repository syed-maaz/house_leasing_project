import React, { useState, useEffect } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

import { PropertyMenuDropdown } from "./propertyMenuDropdown";
import { getFileUrl } from "../../../common/crud/fileUploadCrud";

export const PropertyCardComponent = (props) => {
  const { item } = props;

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!!item.image_url && item.image_url !== "") {
      (async () => {
        const {
          data: {
            output: [file],
          },
        } = await getFileUrl(item.image_url);
        console.log(file.url);
        setImageUrl(file.url);
      })();
    }
  }, [item.image_url]);

  return (
    <>
      <div className="col-md-4" style={{ cursor: "pointer" }}>
        <div className="card-custom gutter-b card-stretch border">
          <div className="card-body p-0 position-relative">
            <div className="position-absolute" style={{ top: "0", right: 0 }}>
              {/* {renderPropertyMenuDropdown(item.property_id)} */}
              <PropertyMenuDropdown id={item.property_id} />
            </div>

            <div>
              <div className="symbol-lg-100 text-center">
                <img
                  style={{height: '220px'}}
                  src={toAbsoluteUrl(
                    !!item.image_url ? imageUrl : "/media/property-blank.png"
                  )}
                  alt="image"
                />
              </div>
            </div>

            <div className="d-flex flex-column flex-root p-3">
              <span className="font-weight-bold mb-1 font-size-h6 text-dark-50">
                {`${item.street_address} ${item.state_name}`}, Unit {item.unit},{" "}
                {item.property_type}
              </span>
              {/* <span className="opacity-70 font-size-sm">Jerry Mattedi</span> */}
            </div>
            <div className="form-group pl-3 pr-3">
              <div className="row">
                <div className="col-lg-6 pr-0">
                  <label className="option option-plain mb-0">
                    <span className="option-control">
                      <span className="radio">
                        <input
                          type="radio"
                          name={`m_option_1_${item.property_id}`}
                          value="1"
                          checked="checked"
                          readOnly
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className="option-label">
                      <span className="option-head">
                        <span className="option-title font-weight-lighter font-size-xs">
                          Upcoming Rent
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label className="option option option-plain mb-0">
                    <span className="option-control">
                      <span className="radio">
                        <input
                          type="radio"
                          name={`m_option_1_${item.property_id}`}
                          value="1"
                          readOnly
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className="option-label">
                      <span className="option-head">
                        <span className="option-title font-weight-lighter font-size-xs">
                          Listing
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
