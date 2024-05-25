// import React, { useEffect,useState } from "react";
// import Header from "./components/header/Header";
// import Body from "./components/body/Body";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// const App = () => {

//   const [obj,setobj]=useState()
//   useEffect(() => {
//     fetchData();
//   },[]);
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3000/apiv1"
//       );
//       const data = await response.json();
//       setobj(data)
//       // console.log(data.data[0]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {/* <Header img={obj[0]} navData={obj[1]}></Header> */}
//               <Header obj={obj}></Header>
//               {/* {console.log(obj)} */}
//               <Body></Body>
//             </>
//           }
//         ></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  const [obj, setObj] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/apiv1");
      const data = await response.json();
      setObj(data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <div>Loading...</div> // You can replace this with a loading spinner or any loading indicator
            ) : (
              <>
                <Header obj={obj} />
                <Body obj={obj}  />
              </>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
