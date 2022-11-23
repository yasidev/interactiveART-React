import React from 'react'

export default function PortfolioItem({imgSrc}) {
  return (
    <div className="portfolio-item">
    <img
      src={imgSrc}
      alt="portfolio"
      className="portfolio-img"
    />
  </div>
  )
}
