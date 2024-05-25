import React from "react";
import Footer from "../footer/Footer";
import Slider from "../slider/Slider";


const Body = (obj) => {
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
              <p>{obj.obj.data[3].belowTagLineData}</p>
            </div>
            <div className="bottom">
              <input
                type="button"
                value={obj.obj.data[4].buttonText}
                className="btn"
              />
              <p>{obj.obj.data[5].belowButtonText}</p>
            </div>
          </div>
          <div className="right">
            <Slider obj={obj.obj.data[6]}/>
          </div>
        </div>
        <div className="body-footer">
          <Footer obj={obj.obj.data}/>
        </div>
      </div>
    </>
  );
};

export default Body;
