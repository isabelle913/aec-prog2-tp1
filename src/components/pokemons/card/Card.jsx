import React from "react";
import "./Card.css";
import Img from "../img/Img";
import Text from "../text/Text";

const Card = (props) => {
  const className = ["section-habilities"];

  if (props.index === props.currentIndex){
    className.push('selected');
  } 

  const onMouseEnter = () => props.onMouseEnter(props.index);
  const onMouseLeave = () => props.onMouseLeave(props.index);


  return (
    <>
      <div
        className="card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Img img={props.img} />
        <Text className="center name" as="h2" text={props.name} />
        <p></p>
        <div className={className.join(" ")}>
          <div>
            <Text className="center bold" text="Type" />
            <Text className="center" text={props.type} />
          </div>
          <div>
            <Text className="center bold" text="Grandeur" />
            <Text className="center" text={props.height} />
          </div>
          <div>
            <Text className="center bold" text="Poids"></Text>
            <Text className="center" text={props.weight} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
