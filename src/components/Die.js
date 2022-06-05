import React from 'react'

function Die(props) {

  const styles = {
      backgroundColor: props.isHeld ? "#59E391" : ""
  }
    
  return (
    <div className="die" style={styles} onClick={props.holdDice}>
        <h2>{props.number}</h2>
    </div>
  )
}

export default Die;
