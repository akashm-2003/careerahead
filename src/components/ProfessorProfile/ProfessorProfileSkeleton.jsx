import React from "react";

export const ProfessorProfileSkeleton = ({
  widthCls = null,
  heightCls = null,
  style = {},
  shape = "rounded-full",
  className = null,
}) => {
  const classNames = ["bg-base-300", "animate-pulse", shape];
  if (className) {
    classNames.push(className);
  }
  if (widthCls) {
    classNames.push(widthCls);
  }
  if (heightCls) {
    classNames.push(heightCls);
  }

  return <div className={classNames.join(" ")} style={style} />;
};
