import React from "react";
import "./Card.css";
import Img from "../img/Img";

const Card = (props) => {
  //console.log(props);
  return (
    <>
      <div className="card">
        <Img img={props.img}></Img>
        <p>name</p>
        <p>type</p>
        <p>height</p>
        <p>weight</p>
      </div>
    </>
  );
};

export default Card;
