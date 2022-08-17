import React, { useState } from "react";
import { Link } from "react-scroll";
import data from "../data.json";
import "./Header.css";

function Header() {

  const [theme, setTheme] = useState(1);
  const ChangeTheme = () => {
    if (theme === 1){
      document.documentElement.style.setProperty("--primary-bg-color", "#180A0A");
      document.documentElement.style.setProperty("--secondry-bg-color", "#711A75");
      document.documentElement.style.setProperty("--primary-text", "#F10086");
      document.documentElement.style.setProperty("--secondry-text", "#F582A7");
      document.documentElement.style.setProperty("--primary-color", "#9b1fa1");
    }

    else if (theme === 2){
      document.documentElement.style.setProperty("--primary-bg-color", "#5800FF");
      document.documentElement.style.setProperty("--secondry-bg-color", "#0096FF");
      document.documentElement.style.setProperty("--primary-text", "#00D7FF");
      document.documentElement.style.setProperty("--secondry-text", "#72FFFF");
      document.documentElement.style.setProperty("--primary-color", "#360299");
    }
    
    else if (theme === 3){
      document.documentElement.style.setProperty("--primary-bg-color", "#6E85B7");
      document.documentElement.style.setProperty("--secondry-bg-color", "#546894");
      document.documentElement.style.setProperty("--primary-text", "#FFDBA4");
      document.documentElement.style.setProperty("--secondry-text", "#FFE9AE");
      document.documentElement.style.setProperty("--primary-color", "#B2C8DF");
    }
    
    else if (theme === 4){
      document.documentElement.style.setProperty("--primary-bg-color", "#94B49F");
      document.documentElement.style.setProperty("--secondry-bg-color", "#658570");
      document.documentElement.style.setProperty("--primary-text", "#CEE5D0");
      document.documentElement.style.setProperty("--secondry-text", "#FCF8E8");
      document.documentElement.style.setProperty("--primary-color", "#87a38a");
    }

    else{
      document.documentElement.style.setProperty("--primary-bg-color", "#041C32");
      document.documentElement.style.setProperty("--secondry-bg-color", "#04293A");
      document.documentElement.style.setProperty("--primary-text", "#ECB365");
      document.documentElement.style.setProperty("--secondry-text", "#fff3e4");
      document.documentElement.style.setProperty("--primary-color", "#064663");
    }
    setTheme(theme < 5 ? theme + 1 : 1)
    
  }
  return (
    <ul className="navbar">
      {data.Sections.map((section, key) => {
        return (
          <li key={key}>
            <Link
              to={`Element${section.Title}`}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {section.Title}
            </Link>
          </li>
        );
      })}
      <li className="right btn-theme" onClick={ChangeTheme}>
          <i className="fa  fa-paint-brush"></i>
      </li>
    </ul>
  );
}

export default Header;
