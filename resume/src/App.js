import logo from './logo.svg';
import './App.css';
import Home from './Components/home/home';
import Resume from './Components/resume/resume'
import Contact from './Components/contact/contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      {/* Loading animation */}
      <div className="preloader">
        <div className="preloader-animation">
          <div className="preloader-spinner"></div>
        </div>
      </div>
      {/* /Loading animation */}
      {/* Content */}
      <div id="page" className="page">
        {/* Header */}
        <header id="site_header" className="header mobile-menu-hide">
          <div className="header-content">
            {/* Navigation */}
            <div className="site-nav">
              {/* Main menu */}
              <ul id="nav" className="site-main-menu">
                
                <li>
                  <Link className="pt-trigger" to="/">خانه</Link>
                </li>
                <li>
                  <Link className="pt-trigger" to="/resume">رزومه</Link>
                </li>
                <li>
                  <Link className="pt-trigger" to="/contact">تماس</Link>
                </li>
              </ul>
              {/* /Main menu */}
            </div>

            <div className="site-title-block mobile-hidden">
              <div className="site-title">امیرمحمد <span>غفاری</span></div>
            </div>
            {/* /Navigation */}
          </div>
        </header>
        {/* /Header */}

        {/* Mobile Header */}
        <div className="mobile-header mobile-visible">
          <div className="mobile-logo-container">
            <div className="mobile-site-title">امیرمحمد غفاری</div>
          </div>

          <a className="menu-toggle mobile-visible">
            <i className="fa fa-bars"></i>
          </a>
        </div>
        {/* /Mobile Header */}

        {/* Main Content */}
        <div id="main" className="site-main">
          {/* Page changer wrapper */}
          <div className="pt-wrapper">
            {/* Subpages */}
            <div className="subpages">
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </div>
          {/* /Page changer wrapper */}
        </div>
        {/* /Main Content */}
      </div>
      <footer>
      <div className="copyrights ltr">
        © 2022 All rights reserved. Amirmohammad Qaffari <a href="https://www.Famirqfr.com/">Famirqfr.com</a>
      </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;
