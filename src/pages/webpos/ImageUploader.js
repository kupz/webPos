import React, { useState } from "react";

const ImageUploader = (props) => {
  const [imageSrc, setImageSrc] = useState("");
  const [placeHolder, setPlaceHolder] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
      props.setImageData(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    setPlaceHolder(true);
  };

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        border: "1px solid black",
        margin: "auto auto",
      }}
      onClick={() => {
        document.getElementById("fileInput").click();
      }}
    >
      <h5
        style={{
          textAlign: "center",
          margin: "auto auto",
          display: placeHolder ? "none" : "flex",
        }}
      >
        Click to upload image
      </h5>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploader;
