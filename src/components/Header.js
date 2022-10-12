import React from 'react'

function Header(props) {
  return (
    <div className='header'>
        <div className='title'>MEMORY GAME</div>
        <div className='scores'>
            <div>Current score - {props.score.current}</div>
            <div>Max score - {props.score.max}</div>
        </div>
    </div>
  )
}

export default Header