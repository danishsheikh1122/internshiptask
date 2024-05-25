// Define your content components
import React, { useState } from "react";
const Page1 = () => (
  <div className="text-content">
    page 1 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil
    fuga beatae ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellendus corrupti consectetur dolor modi ab a suscipit doloremque hic
    laudantium quisquam sit veniam iste, ea ipsum sint nostrum sequi
    reprehenderit? Asperiores aperiam necessitatibus laboriosam perspiciatis
    incidunt similique omnis quis! Repellendus dignissimos vero quaerat animi,
    nulla debitis architecto molestias suscipit eos culpa iste quibusdam optio
    doloribus maiores dolorem sed modi odio quas veniam soluta cupiditate!
    Labore quo aperiam minus maxime repellendus consectetur dolorum a excepturi
    placeat non provident, error voluptatum optio similique.
  </div>
);
const Page2 = () => (
  <div className="text-content">
    page 2 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil
    fuga beatae ipsam?
  </div>
);
const Page3 = () => (
  <div className="text-content">
    page 3 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil
    fuga beatae ipsam
  </div>
);
const Page4 = () => (
  <div className="text-content">
    page 4 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil
    fuga beatae
  </div>
);

const Slider = (obj) => {
  // console.log(obj.obj.sliderData);
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState("Button 1Name");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="slider">
      <div className="btn-container">
        {/* Buttons to change the selected tab */}
        {obj.obj.sliderData.map((elem, index) => {
          return (
            <button key={index} onClick={() => handleTabChange(elem.btnName)}>
              {elem.btnName}
            </button>
          );
        })}
        {/* <button onClick={() => handleTabChange("page1")}>Page1 content</button>
        <button onClick={() => handleTabChange("page2")}>Page2</button>
        <button onClick={() => handleTabChange("page3")}>Page3</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button>
        <button onClick={() => handleTabChange("page4")}>Page4</button> */}
      </div>
      {/* <div className="pageContent-container"> */}
      {/* Render different content based on the selected tab */}
      {/* {selectedTab === "page1" && <Page1 />}
        {selectedTab === "page2" && <Page2 />}
        {selectedTab === "page3" && <Page3 />}
        {selectedTab === "page4" && <Page4 />} */}
      {/* {obj.obj.sliderData.map((elem, index) => {
          return (
            selectedTab===elem.btnName && elem.pageContent  */}
      {/* );
        })} */}

      {/* </div> */}
      <div className="pageContent-container">
        {obj &&
          obj.obj.sliderData.map(
            (elem, index) =>
              selectedTab === elem.btnName && (
                <div key={index}>{elem.pageContent}</div>
              )
          )}
      </div>
    </div>
  );
};

export default Slider;
