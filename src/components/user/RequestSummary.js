import React from 'react'
import {useNavigate} from 'react-router-dom'

function RequestSummary() {
    const navigate = useNavigate()
  return (
    <>
    <div>RequestSummary</div>
    <button onClick={() => navigate(-1)}>go back</button>
    </>
    
  )
}

export default RequestSummary