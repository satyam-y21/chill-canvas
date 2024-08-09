import React from 'react'
import {ReactComponent as SnowflakeIcon} from '../assets/snowflake.svg';

function Navbar() {
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
          </div>
        </header>
    </>
  )
}

export default Navbar