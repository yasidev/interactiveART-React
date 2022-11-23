import React from 'react'

const button=['Contact us' ,'See our works']

export default function Button() {
  return (
    <div className="header-content-links">
        {
            button.map((item)=>{
                return(
                    <a  key={item} href="" className="header-content-link">
                      {item}
                    </a>
                )
            })
        }
    </div>
  )
}
