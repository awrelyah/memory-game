import React from 'react'

function Header(props) {
  return (
    <div className='header'>
        <div className='title'>MEMORY GAME</div>
        <div>Click on different characters and test your memory!</div>
        <div className='scores'>
            <div>current score - {props.score.current}</div>
            <div>max score - {props.score.max}</div>
        </div>
    </div>
  )
}

export default Header