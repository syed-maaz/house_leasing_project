import React, { useState, useEffect } from "react";
import { getFileUrl, uploadImage } from "../../common/crud/fileUploadCrud";

export const FileUploadComponent = (props) => {
  const [uploadedPicture, setUploadedPicture] = useState(
    "https://leaseninja-images.s3.amazonaws.com/1596725230128?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATJI2D45AJT7C654S%2F20200806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200806T144802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLWVhc3QtMSJHMEUCIQDN2rh5dSngDMsoCcvrZ8ZJ6tsWZ4R6rkeFMlUI%2BiAWgwIgOJ6Y98djxQJ%2F7b5S%2BEbH33NYZaDOwtnCXUB2ChBQHXQq%2FgEI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMjYwNzc0MzU3MTIiDJ1vl5OcB8akjTBxqyrSAXX1%2BWu5NNLnT44RlZUjwVz0Q7yGtW6zgzsT12RXgBe4%2FO%2FXbfj4ZmZYlmphyJpllzN4Jl9ZBxnBj4%2FfphzgdJWbvYwzHoHtlcDz9zdTgRGxARXBFEwdLHIAYMCBp4LUsekJrJoilcc59xHQthQ%2BQt1cWelDfrvflpwBAhuN31Ta0myCHpD1QsPHD13G6VdhW%2FQdva9xYhiLFJlRjEDIZzEVr1EEPthCJBYk33IZjY7Ti3Uz8%2F8ShEKN8xc2vL4l0A66W9JinCn2F%2BCRHZ2GRP4VhDCRr7D5BTrgAacMkmaAoJoOAZtNPuw3bYkiIEq4OB7iOG%2Bt21Bd838X3XgcaieqwHcs1d5sHvNs6JneHQ5qFSPcxkuj4F%2BqhplXVPYgHxMwjfcUB8TjrtQC%2Fe%2FdAbSiN48f%2F4cDjrfEQSu01%2BzZrrB3YsUwHmuanWNxueei2mzJ78Tb%2BvXfQlOgdf9LGXAUXmWPCd%2BJN18xnqOAAs3wbGjL%2BAeCU9iIKOoUR%2BTXST3pN3h02UCjsqKCIqVXuZAQFDtVux0xE5WAaZ4%2BVM4UT8751O5KLQtj1yOxpNctNj3eLyoU7WoaCj%2Bl&X-Amz-Signature=4bdeb465d49169e7fedc0f0010bda63a46344c37d4bc180f94bf7c7276fa85cf"
  );

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
