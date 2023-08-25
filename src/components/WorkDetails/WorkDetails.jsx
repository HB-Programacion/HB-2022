import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import section from "../../assets/heinekenFest/divider-hnk.png";
import sectionMobile from "../../assets/heinekenFest/divider-mobile.svg";
import img1 from "../../assets/heinekenFest/img-hnk-1.png";
import img2 from "../../assets/heinekenFest/img-hnk-2.png";
import img3 from "../../assets/heinekenFest/img-hnk3.png";
import img4 from "../../assets/heinekenFest/img-hnk-4.png";
import img5 from "../../assets/heinekenFest/img-hnk-5.png";
import img6 from "../../assets/heinekenFest/img-hnk-6.png";
import next from "../../assets/heinekenFest/next-divider.svg";
import backNext from "../../assets/heinekenFest/next-background.png";
import imgNext from "../../assets/heinekenFest/img-next.png";

import "./WorkDetails.css";

const WorkDetails = () => {
  const allDataWork = JSON.parse(localStorage.getItem("work-details"));
  const dataIdSpecific = JSON.parse(localStorage.getItem("work-specific"));

  const [currentIndex, setCurrentIndex] = useState(dataIdSpecific);
  const matchingWorkDetail = allDataWork[currentIndex-1];
  const nextMatchingWorkDetail = allDataWork[currentIndex];

  console.log('nextMatchingWorkDetail', nextMatchingWorkDetail)

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
    if (currentIndex < allDataWork.length-1) {
      console.log('lenght', allDataWork.length)
      setCurrentIndex(currentIndex+1);
      console.log('final ok', currentIndex+1 )
    }else{
      console.log('final')
      setCurrentIndex(0)
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
          autoPlay
        ></video>
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
      <div className="nextButton">
        <img src={imageNext} alt="Imagen" className="" />
        <button onClick={handleNextButtonClick}>{textNext}</button>
      </div>
    </>
  );
};

export default WorkDetails;
