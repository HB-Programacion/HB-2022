import React from "react";
import banner from "../../assets/heinekenFest/hnk-video.png";
import section from "../../assets/heinekenFest/seccion-hnk.png";

import './HeinekenFest.css'

const HeinekenFest = () => {
  return (
    <div>
      <img src={banner} width={"100%"} />
      <div className="Container__title">
        <h2>HEINEKEN FEST</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequa.
        </p>
      </div>
      <img src={section} width={"100%"}/>
    </div>
  );
};

export default HeinekenFest;
