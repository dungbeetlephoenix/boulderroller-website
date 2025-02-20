import React from 'react';
import '../styles/SplashPage.css'; // local splash page styling

const SplashPage: React.FC = () => {
  return (
    <div className="splash-page">
      {/* Fixed top banner with marquee */}
      <header className="banner banner-top">
        <div className="marquee">
          <div className="marquee-content">
            Boulder Rollers — The Next Evolution of Digital Collectibles
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="content-container">
        <div className="content-layout">
          <section className="main-content">
            <div className="brand-section">
              <div className="logo-wrapper">
                <div className="logo-square">
                  BR
                </div>
              </div>
              <h1 className="title">Boulder Rollers</h1>
              <p className="subtitle">Unleash Your Collectibles</p>
            </div>
          </section>

          <aside className="action-column">
            <div className="action-container">
              <button className="action-button">Explore</button>
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
              <div className="qr-container">
                <img
                  src="/assets/qr-code.png"
                  alt="QR Code"
                  className="qr-code"
                />
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Fixed bottom banner with marquee */}
      <footer className="banner banner-bottom">
        <div className="marquee">
          <div className="marquee-content">
            &copy; {new Date().getFullYear()} Boulder Rollers — All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SplashPage;