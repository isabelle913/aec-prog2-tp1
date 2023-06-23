import React from "react";
import "./Img.css";

const Img = (props) => {
  return (
    <>
      <div>
        <img
          src={props.img.src}
          alt={props.img.alt}
          loading={props.img.loading}
        />
      </div>
    </>
  );
};

export default Img;
