import React from 'react';
import '../styles/SplashPage.css';
import PrismText from './PrismText';

const SplashPage: React.FC = () => {
  return (
    <div className="splash-page">
      {/* TOP MARQUEE - seamless infinite scroll */}
      <header className="banner banner-top">
        <div className="marquee">
          {/* Repeat enough times to ensure coverage */}
          <div className="marquee-content">
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★ 
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★
          </div>
          <div className="marquee-content">
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★ 
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★
          </div>
          <div className="marquee-content">
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★ 
            ★ BOULDERROLLER ★ stack mad DUNG ★ BOULDERROLLER ★ rolling my boulder is soooooooo ★
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="content-container">
        <div className="content-layout">
          {/* LEFT COLUMN: PURE CSS IPHONE */}
          <div className="left-column">
            <div className="iphone-container">
              <div className="iphone">
                <div className="iphone-edge">
                  <div className="iphone-face">
                    <div className="iphone-screen">
                      {/* Top bar */}
                      <div className="iphone-header">
                        <div className="header-time">
                          <p>4:20</p>
                        </div>
                        <div className="header-info">
                          {/* Battery icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6zm-4-6h-15v6h15v-6z" />
                          </svg>
                          {/* Wifi icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.213 16.984c.97-1.028 2.308-1.664 3.787-1.664s2.817.636 3.787 1.664l-3.787 4.016-3.787-4.016zm-1.747-1.854c1.417-1.502 3.373-2.431 5.534-2.431s4.118.929 5.534 2.431l2.33-2.472c-2.012-2.134-4.793-3.454-7.864-3.454s-5.852 1.32-7.864 3.455l2.33 2.471zm-4.078-4.325c2.46-2.609 5.859-4.222 9.612-4.222s7.152 1.613 9.612 4.222l2.388-2.533c-3.071-3.257-7.313-5.272-12-5.272s-8.929 2.015-12 5.272l2.388 2.533z" />
                          </svg>
                        </div>
                      </div>

                      {/* Notch area */}
                      <div className="iphone-utility">
                        <span className="iphone-speaker"></span>
                        <span className="iphone-camera"></span>
                      </div>

                      {/* Lock screen area */}
                      <div className="iphone-lock">
                        <div>
                          <div className="lock-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z" />
                            </svg>
                          </div>
                          <h2>4:20</h2>
                          <p>Sunday, April 20</p>
                        </div>
                      </div>

                      {/* Bottom area */}
                      <div className="iphone-footer">
                        <div className="swipe-action">
                          <p>Swipe up to unlock</p>
                          <span className="drag"></span>
                        </div>
                        <div className="iphone-footer-utility">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M11.861 2.716s.04 1.615.14 5.527c.02.775-.142 1.545-.471 2.247l-3.349 6.96c-.206.961.645 2.297 2.027 2.945 1.332.625 2.777.404 3.405-.398l3.35-6.96c.329-.702.79-1.332 1.397-1.812 3.051-2.38 4.366-3.416 4.366-3.416l-10.865-5.093zm2.657 10.896c-.234.5-.83.716-1.33.481s-.715-.83-.48-1.331c.234-.499.83-.715 1.33-.48s.714.831.48 1.33zm-1.384-13.612l10.866 5.093-.849 1.811-10.866-5.093.849-1.811zm-13.134 16.271c0 1.823.688 3.71 1.951 5.249 1.234 1.503 2.9 2.48 4.539 2.48 1.354 0 2.791-.87 3.447-2.177l-1.121-.649c-1.051 1.894-3.215 1.881-4.072.576-.777-1.186-.619-3.261.436-5.692 1.006-2.321-.332-4.08-2.084-4.08-1.554-.001-3.096 1.407-3.096 4.293zm1.392-1.104c.184-.921.728-1.906 1.704-1.906.838 0 1.537.83.906 2.284-.879 2.027-1.197 3.845-.947 5.292-1.342-1.559-2.059-3.69-1.663-5.67z" />
                            </svg>
                          </button>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LOGO, TEXT, STORE LINKS, ETC. */}
          <div className="right-column has-shader-effect">
            <div className="brand-section">
              {/* Logo */}
              <div className="logo-wrapper">
                <img
                  src="/assets/logo.png"
                  alt="Boulder Roller Logo"
                  className="logo-image"
                />
              </div>
              
              {/* Change TorusText to PrismText */}
              <PrismText />
              
              {/* Keep your existing stylized text */}
              <p className="stylized-text">
                A zero‐start physical activity token system. Own your segments with Boulder Roller. When you go for a ride with Boulder Roller your KOMs become your property, and you earn DUNG from the PLEBS riding on your segments. If a DUNG whale rides on your segment they add mad DUNG to your PILE. Go for ripper, claim some KOPs and earn DUNG in your SLEEP
              </p>

              {/* Action button */}
              <button className="action-button">Log in / Sign up</button>

              {/* Store links */}
              <div className="store-links">
                <a href="#" className="store-button">
                  <img
                    src="/assets/appstore.png"
                    alt="App Store"
                    className="store-image"
                  />
                </a>
                <a href="#" className="store-button">
                  <img
                    src="/assets/playstore.png"
                    alt="Play Store"
                    className="store-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QR code pinned bottom-right */}
        <div className="qr-container">
          <img
            src="/assets/qr-code.png"
            alt="QR Code"
            className="qr-code"
          />
        </div>
      </main>

      {/* BOTTOM MARQUEE - same seamless approach */}
      <footer className="banner banner-bottom">
        <div className="marquee">
          <div className="marquee-content">
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
          </div>
          <div className="marquee-content">
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
          </div>
          <div className="marquee-content">
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
            &copy; {new Date().getFullYear()} Boulder Roller — All rights reserved. ★ BOULDERROLLER ★ my DUNG PILE is soooooooo ★
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SplashPage;