import React from "react";
import { Link } from "react-router-dom";

function Footer(obj) {
  console.log(obj.obj[7].footerLeft);
  // console.log(obj.obj[8]);
  return (
    <div className="footer">
      <div className="left">
        <ul>
          {
            obj.obj[7].footerLeft.map((item, index) => {
              return (
                <Link className="link" to={item.link} key={index}>
                  {item.btnText}
                </Link>
              );
            })
            // console.log(obj.obj.data[1].navData)
          }
        </ul>
      </div>
      <div className="right">
        <ul>
          {
            obj.obj[7].footerLeft.map((item, index) => {
              return (
                <Link className="link" to={item.link} key={index}>
                  {item.btnText}
                </Link>
              );
            })
            // console.log(obj.obj.data[1].navData)
          }
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
