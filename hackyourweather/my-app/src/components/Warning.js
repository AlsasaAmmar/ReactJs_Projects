import React from 'react'
import ReactDOM from 'react-dom'


function Warning ({city}) {
  return ReactDOM.createPortal((
    <div>
      <p className='warning'>
       {city} is not found.<br></br> Please enter another city
      </p>
    </div>
  ), document.getElementById('portal-root'))
}

export default Warning
