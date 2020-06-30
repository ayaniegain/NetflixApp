import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const FavC = "NETFLIX";

// const FavSeries = () => {
  // if (FavC === "NETFLIX") {
  //   return <Netflix />;
  // } else {
  //   return <Amazon />;
  // }

  
// };

const App = () => {
  return (
    <>
      <h1 style={{textAlign:"center"}}>List of Top 5 series in 2020</h1>
      {/* <FavSeries /> */}
      
    {((FavC === "NETFLIX")?<Netflix />:<Amazon />)}

    </>
  );
};

export default App;
