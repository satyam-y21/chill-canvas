import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserConcentView from './components/UserConcentView';
import { useState } from "react";

function App() {
  const [showConsentView, setShowConsentView] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const handleUserConsent = (enableSound) => {
    setIsSoundEnabled(enableSound);
    setShowConsentView(false);
  };
  // document.addEventListener('contextmenu', function(event) {
  //   event.preventDefault();
  // });
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U') ) {
      event.preventDefault();
      console.log(event.key);
      
    }
  })
  return (
    <>
      {
        showConsentView ? (
          <UserConcentView onConsent={handleUserConsent} />
        ) : (
          <div className="App">
            <Navbar isSoundEnabled={isSoundEnabled} />
            <main className='main-container'>
              <div className='image-container'>
                <div className="image-container-text">
                  <h1>EXPLORE THE ARTISTRY OF WINTER</h1> 
                  <p>ChillCanvas, a dynamic frontend showcase that captures the season's essence through creative design and interactive features, demonstrating the power of modern web technologies.</p>
                </div>
              </div>
              <div className='places'>
                <h3></h3>
              </div>
            </main>
            <div className="snow-ball-container">
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
              <div className="snow-ball"></div>
            </div>
            <div className="snow-ball-container-2">
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
              <div className="snow-ball-2"></div>
            </div>
            <Footer/>
          </div>
        )
      }
    </>
  );
}

// Features:
//  Interactive Animations
//  Canvas or WebGL
//  Dynamic Content Loading (lazy loading)
//  Advanced Typography
//  Accessibility and Responsiveness
//  Theme Switcher
//  Sound Effects

export default App;
