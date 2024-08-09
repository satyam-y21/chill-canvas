import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactComponent as SnowflakeIcon} from './assets/snowflake.svg';
import { useEffect, useState } from 'react';

function App() {
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u' || event.key === 'U' ) {
      event.preventDefault();
      console.log(event.key);
      
    }
  })
  return (
    <>
      <div className="App">
        <Navbar/>
        <main className='main-container'>
          <div className='image-container'>
            <div className="image-container-text">
              <h1>Explore the artistry of Winter</h1>
              <p>ChillCanvas, a dynamic frontend showcase that captures the season's essence through creative design and interactive features, demonstrating the power of modern web technologies.</p>
            </div>
          </div>
          <div className='places'>
            
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
        <Footer/>
      </div>
    </>
  );
}

export default App;
