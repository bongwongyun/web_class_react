import React from 'react'

function loading(props) {
  return (
    <div id='loading' className={`loading__active ${props.color}`}>
        <div className="loading__text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
    </div>
  )
}

export default loading

//단축키 rfce(소문자로)