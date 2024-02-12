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
    titleDesk,
    titleMobile,
    subtitle,
    tabs,
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    descriptionChallenge,
    decriptionSolution,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    footer
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
            <img src={titleDesk} alt="img"/> :
            <img src={titleMobile} alt="img"/>
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
            { banner1 && (
              <video
                className="w-100"
                controls={false}
                autoPlay
                muted
                playsInline
                loop={true}
              >
                <source src={banner1} type="video/mp4" />
              </video>
            )}
            { descriptionChallenge && (
              <>
                <h5 className="text-challenge">CHALLENGE</h5>
                <p className="description-challenge container__challenge">{descriptionChallenge}</p>
              </>
            )}
            { decriptionSolution && (
              <>
                <h5 className="text-challenge">SOLUTION</h5>
                <p className="description-challenge container__challenge">{decriptionSolution}</p>
              </>
            )}
          </div>
            { banner2 && (
              <video
                className="w-100"
                controls={false}
                autoPlay
                muted
                playsInline
                loop={true}
              >
                <source src={banner2} type="video/mp4" />
              </video>
            )}
            { text2 && (
              <div className="box-workDetails">
                <p className="p-white container-parrafo">{text2}</p>
              </div>
            )}
        </div>
          { banner3 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner3} type="video/mp4" />
            </video>
          )}
          { text3 && (
            <div className="box-workDetails">
              <p className="p-white container-parrafo">{text3}</p>
            </div>
          )}
          { banner4 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner4} type="video/mp4" />
            </video>
          )}
          { text4 && (
            <div className="box-workDetails">
              <p className="p-white">{text4}</p>
            </div>
          )}
          { banner5 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner5} type="video/mp4" />
            </video>
          )}
          {text5 && (
            <div className="box-workDetails">
              <p className="p-white container-parrafo">{text5}</p>
            </div>
          )}
          {banner6 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner6} type="video/mp4" />
            </video>
          )}
          {text6 && (
            <div className="box-workDetails">
              <p className="p-white container-parrafo">{text6}</p>
            </div>
          )}
          {banner7 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner7} type="video/mp4" />
            </video>
          )}
          { text7 && (
            <div className="box-workDetails">
              <p className="p-white container-parrafo">{text7}</p>
            </div>
          )}
          { banner8 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner8} type="video/mp4" />
            </video>
          )}
          { text8 && (
            <div className="box-workDetails">
              <p className="text-gray-poject text-left">{text8}</p>
            </div>
          )}
          { banner9 && (
            <video
              className="w-100"
              controls={false}
              autoPlay
              muted
              playsInline
              loop={true}
            >
              <source src={banner9} type="video/mp4" />
            </video>
          )}
          { text9 && (
              <div className="box-workDetails">
                <p className="text-gray-poject text-left">{text9}</p>
              </div>
            )
          }
        <img src={footer} alt="img"/>
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