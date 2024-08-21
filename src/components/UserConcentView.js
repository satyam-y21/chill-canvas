import React from 'react'

function UserConcentView({onConsent}) {
  return (
    <>
        <div className="concent-view">
            <h2>Welcome to ChillCanvas</h2>
            <p>Would you like to start with sound?</p>
            <button className='consent-button' onClick={() => onConsent(true)}>Continue with sound</button>
            <button className='consent-button' onClick={() => onConsent(false)}>Continue without sound</button>
        </div>
    </>
  )
}

export default UserConcentView