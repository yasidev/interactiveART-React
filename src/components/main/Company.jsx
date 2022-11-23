import React from "react";

export default function Company({imgSrc}) {
  return (
    <img
      src={imgSrc}
      alt="logo"
      className="companies-img"
    />
  );
}
