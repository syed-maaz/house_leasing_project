import React, { useState, useEffect } from "react";

import { getFileUrl, uploadImage } from "../../common/crud/fileUploadCrud";
import { ImageContainer } from "./imageContainerComponent";

export const FileUploadComponent = (props) => {
  const [uploadedPicture, setUploadedPicture] = useState("");

  const { fileName, uploadedFileName } = props;

  const onImageChange = async (e) => {
    console.log(e.target.files);

    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];

      setUploadedPicture(URL.createObjectURL(img));

      const {
        data: {
          output: [fileDet],
        },
      } = await getFileUrl();

      console.log(fileDet);

      const data = await uploadImage(img, fileDet.url);
      if (data.status === 200) {
        uploadedFileName(fileDet.filename);
      }
    }
  };

  return (
    <>
      <div className="form-group row m-0">
        <div className="col-md-12 text-center p-0">
          <div
            className="w-100 image-input image-input-empty image-input-outline"
            id="kt_image_5"
          >
            <div
              className="image-input-wrapper w-100"
              style={{ height: "300px" }}
            >
              <ImageContainer imageName={fileName} height={"auto"} />
            </div>
          </div>
          <label
            htmlFor="upload-pic"
            className="col-md-12 col-form-label btn btn-default"
          >
            Upload Cover Picture
          </label>
          <input
            id="upload-pic"
            type="file"
            className="btn btn-default invisible pb-0 pt-0"
            accept=".png, .jpg, .jpeg"
            onChange={onImageChange}
          />
        </div>
      </div>
    </>
  );
};
