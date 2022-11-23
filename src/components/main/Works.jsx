import React from 'react'
import Work from './work'

const workItem=[
  {
    title:'Research Project',
    text:'There are many variations of passages of Lorem Ipsum available',
  },
  {
    title:'Targeting',
    text:'There are many variations of passages of Lorem Ipsum available',
  },
  {
    title:'Research Project',
    text:'There are many variations of passages of Lorem Ipsum available',
  }
]

export default function Works() {
  return (
    <section className="works"  id="works">
          <div className="container">
            <h5 className="works-text">HOW IT WORK</h5>
            <h2 className="works-title">
              Three Simple Step To Started Working Process
            </h2>
            <div className="works-content">
              {
                workItem.map(({title,text} ,index)=>{
                  return <Work key={index} title={title} text={text}/>
                })
              }
            </div>
            <div className="works-img">
              <img src="./src/assets/images/main-img.svg" className="works-img-img" />
            </div>
          </div>
        </section>
  )
}
