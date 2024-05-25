import React from "react";
import {Link} from "react-router-dom";

function Header(obj) {
  // console.log(obj.obj.data[0].img);
  // console.log(navData)
  return (
    <div className="nav_bar">
      <div className="logo">
        <img src={obj.obj.data[0].img} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          {
            obj.obj.data[1].navData.map((item, index) => {
              return <Link className="link" to={item.link} key={index}>{item.btnText}</Link>
            })
            // console.log(obj.obj.data[1].navData)
          }
          {/* <li>
            <a href="">Learn</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">Certifications</a>
          </li> */}
        </ul>
      </div>
      <div className="mode">
        <img src="" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
