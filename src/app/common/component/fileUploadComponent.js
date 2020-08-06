import React, { useState, useEffect } from "react";
import { getFileUrl, uploadImage } from "../../common/crud/fileUploadCrud";

export const FileUploadComponent = (props) => {
  const [uploadedPicture, setUploadedPicture] = useState([0]);

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
      console.log(data);
    }
  };

  return (
    <>
      <div className="form-group row">
        <div className="col-md-12 text-center">
          <div
            className="w-100 image-input image-input-empty image-input-outline"
            id="kt_image_5"
            style={{
              backgroundImage: `url(${uploadedPicture})`,
              "background-size": "contain",
            }}
          >
            <div
              className="image-input-wrapper w-100"
              style={{ height: "300px" }}
            ></div>
          </div>
          <label
            for="upload-pic"
            className="col-md-12 col-form-label btn btn-default"
          >
            Upload Cover Picture
          </label>
          <input
            id="upload-pic"
            type="file"
            className="btn btn-default invisible"
            accept=".png, .jpg, .jpeg"
            onChange={onImageChange}
          />
        </div>
      </div>
    </>
  );
};
