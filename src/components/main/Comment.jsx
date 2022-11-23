import React from "react";

export default function Comment({text,imgSrc,person}) {
  return (
    <div className="comment">
      <div className="comment-content">
        <p className="comment-body">
          {text}
        </p>
      </div>
      <div className="comment-info">
        <img
          src={imgSrc}
          alt=""
          className="comment-img"
        />
        <p className="comment-person">{person}</p>
      </div>
    </div>
  );
}
