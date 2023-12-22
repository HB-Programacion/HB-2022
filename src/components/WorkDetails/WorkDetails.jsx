import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hnkDesk from "../../assets/work/workDetails/hnk-desk.png";
import letterNext from "../../assets/work/letter-next.svg";

import "./WorkDetails.css";
import { useWindowDimensions } from "../CustomHooks/UseWindowDimensions/UseWindowDimensions";

const WorkDetails = () => {
  const allDataWork = JSON.parse(localStorage.getItem("work-details"));
  const dataIdSpecific = JSON.parse(localStorage.getItem("work-specific"));

  const [currentIndex, setCurrentIndex] = useState(dataIdSpecific);
  const matchingWorkDetail = allDataWork[currentIndex - 1];
  const nextMatchingWorkDetail = allDataWork[currentIndex];


  const navigate = useNavigate();

  const {
    videoPrincipal,
    urlTitle,
    subtitle,
    tabs,
    banner1,
    descriptionChallenge,
    decriptionSolution,
    videoBlock1,
    text1,
    videoBlock2,
    videoBlock3,
    text2,
    videoBlock4,
    videoBlock5,
    videoBlock6,
    text3,
    videoBlock7
  } = matchingWorkDetail.workDetails;

  const { imageNext, textNext } = nextMatchingWorkDetail.workDetails;

  const handleNextButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

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
  }, []);

  const { width } = useWindowDimensions();
  const breakpoint = 1200;

  return (
    <>
      <div className="box-video-background">
        <video
          src={videoPrincipal}
          alt="hnk"
          width="100%"
          height="100%"
          className="video-mp4"
          autoPlay="autoplay"
          loop="loop"
          muted
          defaultMuted
          playsInline
        ></video>
      </div>
      <div className=" bg-black">
        <div className="box-workDetails">
          { width > breakpoint ?
            <img src={hnkDesk} alt="img"/> :
            <img src={urlTitle} alt="img"/>
          }
          <p className="subtitle-project">{subtitle.toUpperCase()}</p>
          <div className="box-project-detail">
            {tabs.map((tab, index) => (
              <div key={index} className="project-detail-item">
                {tab}
              </div>
            ))}
          </div>
          <div className="box-img-details">
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner1} type="video/mp4" /> //banner 1
            </video>

            <h5 className="text-challenge">CHALLENGE</h5>
            <p className="description-challenge container__challenge">{descriptionChallenge}</p>
            <h5 className="text-challenge">SOLUTION</h5>
            <p className="description-challenge container__challenge">{decriptionSolution}</p>
          </div>
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={videoBlock1} type="video/mp4" /> //frame 290
            </video>
          <p className="p-white container-parrafo">{text1}</p>
        </div>
          <video
            className="w-100"
            controls={false}
            autoPlay
            muted
            playsInline
            loop={true}
          >
            <source src={videoBlock2} type="video/mp4" /> //frame 293
          </video>
          <video
            className="w-100"
            controls={false}
            autoPlay
            muted
            playsInline
            loop={true}
          >
            <source src={videoBlock3} type="video/mp4" /> //frame 294
          </video>
          <p className="p-white">{text2}</p>
          <video
            className="w-100"
            controls={false}
            autoPlay
            muted
            playsInline
            loop={true}
          >
            <source src={videoBlock4} type="video/mp4" /> //frame 295
          </video>
          <video
            className="w-100"
            controls={false}
            autoPlay
            muted
            playsInline
            loop={true}
          >
            <source src={videoBlock5} type="video/mp4" /> //frame 296
          </video>
          <video
            className="w-100"
            controls={false}
            autoPlay
            muted
            playsInline
            loop={true}
          >
            <source src={videoBlock6} type="video/mp4" /> //frame 298
          </video>
        <div className="box-workDetails">
          <p className="text-gray-poject text-left">{text3}</p>
        </div>
        <video
            className="w-100"
            controls={false}
            autoPlay
            muted
            playsInline
            loop={true}
          >
            <source src={videoBlock7} type="video/mp4" /> //frame 294
          </video>
      </div>
      <div className="bg-black">
        <img src={letterNext} className="letter-next" alt="letterNext"/>
        <div className="nextButton">
          {imageNext && <img src={imageNext} alt="Imagen" className="img-next-project" />}
          <div onClick={handleNextButtonClick} className="btn-title-next">{textNext}</div>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;