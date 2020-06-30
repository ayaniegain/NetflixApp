import React from "react";

const Images=(props)=>{
    
    return(
        <img
        style={{ height: "300px", width: "350px" }}
        src={props.imglink}
        className="card_img"
        alt="my pic"
      />
    )
        
}

export default Images;