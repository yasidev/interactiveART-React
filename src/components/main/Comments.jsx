import React from 'react'
import Comment from './Comment'
import Company from './Company'


const comments=[
  {
    text:"Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined."
    ,
    imgSrc:"./src/assets/images/person-1.png",
    person:"Martin Jones, Creative Cons"
  },
  {
    text:"Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined."
    ,
    imgSrc:"./src/assets/images/person-2.png",
    person:"Martin Jones, Creative Cons"
  },
  {
    text:"Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined."
    ,
    imgSrc:"./src/assets/images/person-3.png",
    person:"Martin Jones, Creative Cons"
  }
]

const image=[
  "./src/assets/images/logo-1.svg",
  "./src/assets/images/logo-2.svg",
  "./src/assets/images/logo-3.svg",
  "./src/assets/images/logo-4.svg",
  "./src/assets/images/logo-5.svg"
]

export default function Comments() {
  return (
    <section className="person-comments" id="comments">
          <div className="container">
            <h2 className="person-comments-title">You’re in a good hand</h2>
            <p className="person-comments-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
            <div className="comments-container">
              <div className="comments">
              {
                comments.map(({text,imgSrc,person})=>{
                  return <Comment text={text} imgSrc={imgSrc} person={person}/>
                })
              }
              </div>
              <div className="companies">
                {image.map((imgSrc)=>{
                  return <Company imgSrc={imgSrc}/>
                })}
              </div>
            </div>
          </div>
        </section>
  )
}
