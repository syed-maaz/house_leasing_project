import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export const ImageContainer = (props) => {
  const { imageUrl, height } = props;
  const [isImgLoaded, setImgLoaded] = useState(false);
  return (
    <>
      <img
        style={isImgLoaded ? { display: "none" } : { paddingTop: "80px" }}
        src="/media/spinner.gif"
      />
      <img
        style={isImgLoaded ? { height: height } : { display: "none" }}
        src={toAbsoluteUrl(!!imageUrl ? imageUrl : "/media/property-blank.png")}
        alt="image"
        onLoad={() => setImgLoaded(true)}
      />
    </>
  );
};
