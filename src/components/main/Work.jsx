import React from 'react'

export default function Work({title,text}) {
  return (
    <div className="works-content-item">
        <h4 className="works-content-title">{title}</h4>
        <p className="works-content-text">
        {text}
        </p>
    </div>
  )
}
