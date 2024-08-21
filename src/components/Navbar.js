import React, { useEffect, useRef, useState } from 'react'
import {ReactComponent as SnowflakeIcon} from '../assets/snowflake.svg';
import windSound from '../assets/wind.mp3';

function Navbar({ isSoundEnabled }) {
  const [isPlaying, setIsPlaying] = useState(isSoundEnabled);
  const audioRef = useRef(new Audio(windSound));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Play failed:', error);
      });
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying); // Toggle the playing state
  };
  
  return (
    <>
        <header className='App-header'>
          <div className="header-name">
            <SnowflakeIcon className='App-logo-spin' fill='#00ffff' height={40+'px'} width={40+'px'} style={{marginRight: 5+'px'}}/>
            <div>ChillCanvas</div>
          </div>
          <div className="header-buttons">
            <a type="button" className='button'>Home</a>
            <a type="button" className='button'>Contact</a>
            <div title='Sound' className={`sound-btn fa ${isPlaying  ? 'fa-volume-up ': 'fa-volume-off'}`} onClick={toggleSound}></div>

          </div>
        </header>
    </>
  )
}

export default Navbar