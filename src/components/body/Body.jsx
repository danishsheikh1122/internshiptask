import React from "react";
import Footer from "../footer/Footer"
import Slider from "../slider/Slider";
const Body = () => {
  
  
  return (
    <>
      <div className="body">
        <div className="body-body">
          <div className="left">
            <div className="top">
              <span className="feedback">Feedback</span>
              <span className="text">help us to improve</span>
            </div>
            <div className="center">
              <h1>
                Turn your knowledge into <span>income.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ex veritatis non maiores, eius est rem! Officia fuga
                laboriosam commodi eos maiores consequuntur, possimus sunt illo
                sequi enim perferendis consectetur?
              </p>
            </div>
            <div className="bottom">
              <input type="button" value="text here" className="btn" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                temporibus fugit maiores numquam consectetur dicta fugiat eum
                voluptatem perferendis pariatur.
              </p>
            </div>
          </div>
          <div className="right"> 
          <Slider/>
          </div>
        </div>
        <div className="body-footer">
          <Footer />
        </div>

      </div>
    </>
  );
};

export default Body;
