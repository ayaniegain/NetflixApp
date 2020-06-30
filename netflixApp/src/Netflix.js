import React from "react";
import Card from "./Card";
import Sdata from "./ArrayData";

const Netflix = () => {
    return(

        <>
    <Card
      key={Sdata[0].id}
      imglink={Sdata[0].imglink}
      channel={Sdata[0].channel}
      serial={Sdata[0].serial}
      title={Sdata[0].title}
      link={Sdata[0].link}
      />
    <Card
      key={Sdata[1].id}
      imglink={Sdata[1].imglink}
      channel={Sdata[1].channel}
      serial={Sdata[1].serial}
      title={Sdata[1].title}
      link={Sdata[1].link}
      />
    <Card
      key={Sdata[4].id}
      imglink={Sdata[4].imglink}
      channel={Sdata[4].channel}
      serial={Sdata[4].serial}
      title={Sdata[4].title}
      link={Sdata[4].link}
      />
    <Card
      key={Sdata[3].id}
      imglink={Sdata[3].imglink}
      channel={Sdata[3].channel}
      serial={Sdata[3].serial}
      title={Sdata[3].title}
      link={Sdata[3].link}
      />
  </>
      )
};
export default Netflix;
