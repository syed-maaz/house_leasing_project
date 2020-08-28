import React, { useState, useEffect } from "react";

import { getFileUrl } from "../crud/fileUploadCrud";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export const ImageContainer = (props) => {
  const { imageName, height } = props;
  const [isImgLoaded, setImgLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!!imageName && imageName !== "") {
      (async () => {
        const {
          data: {
            output: [file],
          },
        } = await getFileUrl(imageName);
        setImageUrl(file.url);
      })();
    }
  }, [imageName]);

  return (
    <>
      <img
        style={isImgLoaded ? { display: "none" } : { paddingTop: "80px" }}
        src="/media/image_loader.gif"
      />
      <img
        style={
          isImgLoaded ? { height: "100%", width: "auto" } : { display: "none" }
        }
        src={toAbsoluteUrl(
          !!imageName ? imageUrl : "/media/property-blank.png"
        )}
        alt="image"
        onLoad={() => setImgLoaded(true)}
      />
    </>
  );
};
