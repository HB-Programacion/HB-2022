import React from "react";
import gif from "../../assets/home/gif.png";
import divider from "../../assets/home/Divider.svg";
import tabs from "../../assets/home/Filtro.png";
import img1 from "../../assets/home/project 1.png";
import img2 from "../../assets/home/project 2.png";
import img3 from "../../assets/home/project 3.png";
import img4 from "../../assets/home/project 4.png";
import img5 from "../../assets/home/project 5.png";
import img6 from "../../assets/home/project 6.png";
import load from "../../assets/home/load-more.png";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <img src={gif} className="gif" />
      <img src="https://via.placeholder.com/1420x616" width={"100%"} />
      <img src={divider} className="gif" />
      <div className="container__text">
        <h1>
          Nos adelantamos al futuro, nos anticipamos a las posibilidades,
          proponemos soluciones que van más alla de lo evidente y del brief,
          somos analíticos y pensamos siempre en la mejor solución de acuerdo al
          problema.
        </h1>
        <div className='container__filter'>
          <img src={tabs} width={"90%"} />
        </div>

        <div className="container__projects">
            <div>
                <img src={img1} width={"100%"}/>
            </div>
            <div>
                <img src={img2} width={"100%"}/>
            </div>
            <div>
                <img src={img3} width={"100%"}/>
            </div>
            <div>
                <img src={img4} width={"100%"}/>
            </div>
            <div>
                <img src={img5} width={"100%"}/>
            </div>
            <div>
                <img src={img6} width={"100%"}/>
            </div>
        </div>
        <img src={load} width={"23%"} />
      </div>
    </div>
  );
};

export default Home;
