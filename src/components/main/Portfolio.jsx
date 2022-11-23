import React from 'react'
import PortfolioItem from './PortfolioItem'

const image=[
  "./src/assets/images/portfolio-1.jpg",
  "./src/assets/images/portfolio-2.jpg",
  "./src/assets/images/portfolio-3.jpg",
  "./src/assets/images/portfolio-4.jpg",
  "./src/assets/images/portfolio-5.jpg",
  "./src/assets/images/portfolio-6.jpg"
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
          <div className="container">
            <h5 className="portfolio-text">PORTFOLIO</h5>
            <h2 className="portfolio-title">
              Three Simple Step To Started Working Process
            </h2>
            <div className="portfolio-items">
              {
                image.map((imgSrc)=>{
                  return <PortfolioItem imgSrc={imgSrc}/>
                })
              }
            </div>
          </div>
        </section>
  )
}
