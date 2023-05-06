import React from 'react'
import { atlassian, dropbox, google, shopify, slack } from './import'
import './brand.css'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='container'>
        <img src={google} alt='google' />
        <img src={dropbox} alt='dropbox' />
        <img src={atlassian} alt='atlassian' />
        <img src={shopify} alt='shopify' />
        <img src={slack} alt='google' />
      </div>
    </div>
  )
}

export default Brand
