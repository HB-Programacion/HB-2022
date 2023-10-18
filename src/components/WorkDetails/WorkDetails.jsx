import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import letterNext from "../../assets/work/letter-next.svg";

import "./WorkDetails.css";

const WorkDetails = () => {
  const allDataWork = JSON.parse(localStorage.getItem("work-details"));
  const dataIdSpecific = JSON.parse(localStorage.getItem("work-specific"));

  const [currentIndex, setCurrentIndex] = useState(dataIdSpecific);
  const matchingWorkDetail = allDataWork[currentIndex - 1];
  const nextMatchingWorkDetail = allDataWork[currentIndex];

  console.log("nextMatchingWorkDetail", nextMatchingWorkDetail);

  const navigate = useNavigate();

  const {
    imgbg,
    urlTitle,
    subtitle,
    tabs,
    image1,
    descriptionChallenge,
    decriptionSolution,
    gif1,
    gif2,
    gif3,
    gif4,
    gif5,
    gif6,
    gif7,
    img3,
    img5,
    img6,
    img7,
    text1,
    text2,
    text3,
  } = matchingWorkDetail.workDetails;

  const { imageNext, textNext } = nextMatchingWorkDetail.workDetails;

  const handleNextButtonClick = () => {
    if (currentIndex < allDataWork.length - 1) {
      console.log("lenght", allDataWork.length);
      setCurrentIndex(currentIndex + 1);
      console.log("final ok", currentIndex + 1);
    } else {
      console.log("final");
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const updatedMatchingWorkDetail = allDataWork[currentIndex];
    navigate(`/workDetails/${matchingWorkDetail.id}`);
    // Update any state variables that depend on the new matchingWorkDetail
  }, [currentIndex, allDataWork]);

  return (
    <>
      {/* <div className="box-video-background">
        <img src={imgbg} alt="hnk" width="100%" height="100%" className="video-mp4" />
      </div>
      <div className=" bg-black">
        <div className="box-workDetails">
          <img src={urlTitle} />
          <p className="subtitle-project">
            {subtitle}
          </p>
          <div className="box-project-detail">
            {tabs.map((tab, index) => (
              <div key={index} className="project-detail-item">{tab}</div>
            ))}
          </div>
          <div className="box-img-details">
            <img src={image1} className="w-100" />

            <h5 className="text-challenge">CHALLENGE</h5>
            <p className="description-challenge">
              {descriptionChallenge}
            </p>
            <h5 className="text-challenge">SOLUTION</h5>
            <p className="description-challenge">
              {decriptionSolution}
            </p>
          </div>
          <img src={gif2} className="w-100" />
          <img src={gif1} className="gif-80" />

          <p className="p-white">
            {text1}
          </p>
        </div>
        <img src={gif3} className="w-100" />
        <img src={gif4} className="gif-70" />
        <img src={gif5} className="gif-90" />

        <div className="box-workDetails">
          <p className="p-white text-right">
            
          </p>
        </div>
        <img src={gif6} className="w-100" />
          {text2}
        <div className="box-workDetails">
          <img src={img3} className="w-100" />
          <p className="text-gray-poject">
            {text3}
          </p>
        </div>
      </div>
      <div className="">
          <img src={imageNext} alt="Imagen" className=""/>
          <div className="">
            <a href="https://www.ejemplo.com" className="">{textNext}</a>
          </div>
      </div> */}

      <div className="box-video-background">
        <video
          src={imgbg}
          alt="hnk"
          width="100%"
          height="100%"
          className="video-mp4"
          autoplay="autoplay"
          loop="loop"
          muted
          defaultMuted
          playsinline
        ></video>
        {/* <iframe
          src="https://player.vimeo.com/video/857674518?autoplay=1&autopause=0&loop=1&muted=1&title=0&portrait=0&byline=0"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe> */}
      </div>
      <div className=" bg-black">
        <div className="box-workDetails">
          <img src={urlTitle} />
          <p className="subtitle-project">{subtitle}</p>
          <div className="box-project-detail">
            {tabs.map((tab, index) => (
              <div key={index} className="project-detail-item">
                {tab}
              </div>
            ))}
          </div>
          <div className="box-img-details">
            <img src={image1} className="w-100" />

            <h5 className="text-challenge">CHALLENGE</h5>
            <p className="description-challenge">{descriptionChallenge}</p>
            <h5 className="text-challenge">SOLUTION</h5>
            <p className="description-challenge">{decriptionSolution}</p>
          </div>
          <img src={gif1} className="w-100" />
          <img src={gif2} className="w-90" />
          <img src={img3} className="w-90" />

          <p className="p-white">{text1}</p>

          <p className="p-white">{text2}</p>
        </div>
        <img src={gif3} className="w-100" />
        <img src={gif4} className="w-100" />
        <img src={gif5} className="gif-90" />
        <img src={img5} className="gif-70" />
        <img src={gif6} className="w-100" />
        <img src={gif7} className="gif-70" />
        <img src={img6} className="w-100" />

        <div className="box-workDetails">
          <p className="text-gray-poject text-left">{text3}</p>
        </div>
        <img src={img7} className="w-100" />
      </div>
      <div className="bg-black">
        <img src={letterNext} className="letter-next"/>
        <div className="nextButton">
          <img src={imageNext} alt="Imagen" className="img-next-project" />
          <div onClick={handleNextButtonClick} className="btn-title-next">{textNext}</div>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
