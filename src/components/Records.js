import React from 'react'

function Records(props) {
  return (
    <div className="records">
        <div className="recordsinfo">
            <div>Record:</div>
            <div className="bold">{props.record ? props.record : "No Games played"}</div>
        </div>
        <div className="recordsinfo">
            <div>Current Rolls:</div>
            <div className="bold">{props.trys}</div>
        </div>
    </div>
  )
}

export default Records
