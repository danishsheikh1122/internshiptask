import React from "react";
import Header from "./components/header/Header"
import Body from "./components/body/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Body></Body>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
