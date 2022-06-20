import React from 'react'
import Image from 'next/image'

const Banner = ({
    className,
    title,
    subTitle,
    text,
    link,
    backgroundImage,
    backgroundColor,
    backgroundOverlay
}:{
    className: string
    title: string,
    subTitle: string,
    text: string,
    link: string,
    backgroundImage: string,
    backgroundColor: string,
    backgroundOverlay: string
}) => {
  let background = require(`../public/images/${backgroundImage}`)
  return (
    <div className={`ex-element ex-banner ${className}`} style={{backgroundColor: backgroundColor,  backgroundImage: `url(${background.default.src})`}}>        
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{text}</p>
        <a className='btn btn-primary' href={link}>Details</a>
    </div>
  )
}

export default Banner