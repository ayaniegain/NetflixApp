import React from "react";
import Images from "./Images";

const Color = {
  backgroundColor: "yellow",
  color: "green",
  textAlign: "center",
};
const Card = (props) => {
  return (
    <>
      <div style={Color}>
        <div className="card">
        <Images imglink={props.imglink}/>
          <div className="card_info">
            <h5 className="card_catagory">
              {props.channel} original series {props.serial}
            </h5>
            <p className="card_title">{props.title}</p>
            <a href={props.link} className="btn btn-primary">
              <button
                style={{
                  margin: "4px 4px 4px 4px",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                watch now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
