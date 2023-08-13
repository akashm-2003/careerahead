import React from 'react'
const IconButton = ({icon = "options",className = "w-4 h-4",onClick}) => {
  return (
    <button onClick={onClick}  type="button" className={className}>
      <img src={`https://assets.codepen.io/3685267/${icon}.svg`} alt="icon" className="w-full h-full"/>
    </button>
  )
}

export default IconButton