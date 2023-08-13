import React from 'react'
import clsx from "clsx";
const Image = ({ path = "1", className = "w-4 h-4" }) => {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.jpg`}
      alt=""
      className={clsx(className, "rounded-full")}
    />
  )
}

export default Image