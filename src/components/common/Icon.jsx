import React from 'react'
import clsx from "clsx";
const Icon = ({ path = "options", className = "w-4 h-4" }) => {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={clsx(className)}
    />
  )
}

export default Icon