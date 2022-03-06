import React, { useState, useEffect } from "react";
import "./landing.css";
import pikachu from "./pika.png";
import baulbasaur from "./baulbasaur.png";
import { RandomReveal } from "react-random-reveal";

import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
const Landing = () => {
  let num = 0;
  const [img, setImg] = useState();
  const imgs = [pikachu, baulbasaur];
  useEffect(() => {
    setImg(imgs[Math.floor(Math.random() * 2)]);

    num++;
  }, []);

  return (
    <div className="body">
      <div className="container">
        <div className="info">
          <div className="logo">
            <div className="ball">
              <span></span>
            </div>
          </div>
          <div className="text">
            <h1>
              {" "}
              <RandomReveal isPlaying duration={2} characters="Pokemon " />
               the ultimate tips and tricks 
               <RandomReveal isPlaying duration={2} characters=" guide" />

            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dignissimos necessitatibus maiores aliquam nisi in dolorem,
              asperiores molestiae excepturi? Suscipit nam voluptatum soluta
              enim perferendis ad fugiat odio. Autem, odio.
            </p>
          </div>

          <div className="buttons">
            <Link to={"/pokegrid"}>
              <button>Start</button>
            </Link>
          </div>
        </div>
        <div className="img_">
          <Zoom>
            <img src={img} alt="" id="img" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Landing;
