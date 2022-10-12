import React from 'react'

function Header(props) {
  return (
    <div className='header'>
      <div>
      <div className='title'>MEMORY GAME</div>
        <div>Click on different characters and test your memory!</div>
      </div>
        <div className='scores'>
            <div className='score'>current score - {props.score.current}</div>
            <div className='score'>max score - {props.score.max}</div>
        </div>
    </div>
  )
}

export default Header