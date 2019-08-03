
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-area">
        {/* <!-- Navbar Area --> */}
        <div className="oneMusic-main-menu">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              {/* <!-- Menu --> */}
              <nav className="classy-navbar justify-content-between" id="oneMusicNav">

                {/* <!-- Nav brand --> */}
                <a href="" className="nav-brand"><img src="img/core-img/logobaronpetit3.png" alt="" /></a>

                {/* <!-- Navbar Toggler --> */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                {/* <!-- Menu --> */}
                <div className="classy-menu">

                  {/* <!-- Close Button --> */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                <span className="top" />
                <span className="bottom" />
              </div>
                  </div>

                  {/* <!-- Nav Start --> */}
                  <div className="classynav align-items-center">
                    <ul>
                <li><Link exact to="/react-baron">HOME</Link></li>
                <li><Link to="/Mp3">VIDEOS</Link></li>

                <li><Link to="/GalleryPhoto">PHOTOS</Link></li>
                <li><Link to="/Events">TOUR</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://baroncrane.bigcartel.com/" className="btn see-more-btn">SHOP</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://baroncrane.bandcamp.com/" className="btn see-more-btn">MUSIC</a></li>

              </ul>

                  </div>
                  {/* <!-- Nav End --> */}

                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
