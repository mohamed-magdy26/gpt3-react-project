import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__feature'>
      <div className='gpt3__feature-title'>
        <div></div>
        <p>{title}</p>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Feature
