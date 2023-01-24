import React from "react";
import banner from "../../assets/umana/umana-banner.png";
import section from "../../assets/umana/divider-umana.png";
import umana from "../../assets/umana/img-umana.png";
import imgNext from "../../assets/rappi/next-img-gif.png";


import "./Umana.css";

const Umana = () => {
  return (
    <>
      {/* <div className="box-video-background">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className="video-mp4"
        >
          <source
            src="https://res.cloudinary.com/henribarrett/video/upload/v1674493533/hb-2023/video-hnk-sin-graf_wgyup8.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div> */}
<div className="container__banner-parallax">
<img src={banner} alt="" width={"100%"}/>
</div>
      <div className="container-main">
        <div className="Container__title">
          <h2>Umana</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequa.
          </p>
        </div>
        <img src={section} width={"100%"} />
        <div className="container__mosaico">

        <div className="">
            <img src={umana} width={"80%"} className="" />
          </div>
    
          <div className="container__gift-next">
            {/* <h2>NEXT</h2> */}
            <img src={imgNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Umana;
