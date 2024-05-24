// Define your content components
import React, { useState } from "react";
const Page1 = () => <div>page 1 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil fuga beatae ipsam? </div>;
const Page2 = () => <div>page 2 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil fuga beatae ipsam? </div>;
const Page3 = () => <div>page 3 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil fuga beatae ipsam? </div>;
const Page4 = () => <div>page 4 Content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iusto eius, facere laudantium voluptates dignissimos aliquid nihil fuga beatae ipsam? </div>;

const Slider = () => {
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState("page1");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="slider">
      <div className="btn-container">
        {/* Buttons to change the selected tab */}
        <button onClick={() => handleTabChange("page1")}>Page1</button>
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
        <button onClick={() => handleTabChange("page4")}>Page4</button>
      </div>
      <div className="pageContent-container">
        {/* Render different content based on the selected tab */}
        {selectedTab === "page1" && <Page1 />}
        {selectedTab === "page2" && <Page2 />}
        {selectedTab === "page3" && <Page3 />}
        {selectedTab === "page4" && <Page4 />}
      </div>
    </div>
  );
};

export default Slider;
