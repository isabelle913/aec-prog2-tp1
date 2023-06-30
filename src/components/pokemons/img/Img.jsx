import "./Img.css";
import React from "react";

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
