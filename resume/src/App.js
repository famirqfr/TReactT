import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/home/home";
import Resume from "./Components/resume/resume";
import Contact from "./Components/contact/contact";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";


function App() {
  
  const [isToggleClassMobileHide, setToggleClassMobileHide] = useState(false);

  const handleToggleClassMobileHide = () => {
    setToggleClassMobileHide(!isToggleClassMobileHide);
  };

  return (
    <Router>
      <div className="App">
        <div className="preloader">
          <div className="preloader-animation">
            <div className="preloader-spinner"></div>
          </div>
        </div>
        <div id="page" className="page">

          <header id="site_header" className={`header ${isToggleClassMobileHide ? "" : "mobile-menu-hide"}`}>
            <div className="header-content">
              <div className="site-nav">
                <ul id="nav" className="site-main-menu">
                  <li>
                    <Link to="/home" onClick={handleToggleClassMobileHide}>خانه</Link>
                    {/* <a className="pt-trigger" href="#home" onClick={handleToggleClassMobileHide}></a> */}
                    {/* <Link className="pt-trigger" to="/">خانه</Link> */}
                  </li>
                  <li>
                    <Link to="/resume" onClick={handleToggleClassMobileHide}>رزومه</Link>
                    {/* <a className="pt-trigger" href="#resume" onClick={handleToggleClassMobileHide}></a> */}
                    {/* <Link className="pt-trigger" to="/resume">رزومه</Link> */}
                  </li>
                  <li>
                    <Link to="/contact" onClick={handleToggleClassMobileHide}>تماس</Link>
                    {/* <a className="pt-trigger" href="#contact" onClick={handleToggleClassMobileHide}></a> */}
                    {/* <Link className="pt-trigger" to="/contact">تماس</Link> */}
                  </li>
                </ul>
              </div>
              <div className="site-title-block mobile-hidden">
                <div className="site-title">امیرمحمد <span>غفاری</span></div>
              </div>
            </div>
          </header>
          <div className="mobile-header mobile-visible">
              <div className="mobile-logo-container">
              <div className="mobile-site-title">امیرمحمد غفاری</div>
              </div>
              <a className="menu-toggle mobile-visible" onClick={handleToggleClassMobileHide}>
                  <i className="fa fa-bars"></i>
              </a>
          </div>
          <div id="main" className="site-main">
            <div className="pt-wrapper">
              <div className="subpages">

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate replace to="/" />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>

              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="copyrights ltr">
            © 2022 All rights reserved. Amirmohammad Qaffari{" "}
            <a href="https://www.Famirqfr.com/">Famirqfr.com</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
