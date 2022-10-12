import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='title'>MEMORY GAME</div>
        <div className='scores'>
            <div>Current score</div>
            <div>Max score</div>
        </div>
    </div>
  )
}

export default Header