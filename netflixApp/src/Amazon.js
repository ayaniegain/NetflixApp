import React from "react";
import Card from "./Card";
import Sdata from "./ArrayData";

const Amazon = () => {
  return (
    <>
      <Card
        key={Sdata[2].id}
        imglink={Sdata[2].imglink}
        channel={Sdata[2].channel}
        serial={Sdata[2].serial}
        title={Sdata[2].title}
        link={Sdata[2].link}
      />
    </>
  );
};

export default Amazon;
