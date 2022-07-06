import React from 'react'
import Image from 'next/image'

const Banner = ({
    className,
    childWrapClass,
    title,
    subTitle,
    text,
    link,
    backgroundImage,
    colorOverly,
}:{
    className: string
    childWrapClass: string,
    title: string,
    subTitle: string,
    text: string,
    link: string,
    backgroundImage: string,
    colorOverly: string,
}) => {
  let background = require(`../public/images/${backgroundImage}`)
  return (
    <div className={`ex-element ex-banner ${className}`} style={{backgroundImage: `url(${background.default.src})`}}>
      <div className={childWrapClass} style={{backgroundColor: colorOverly}}>
        <h3 className='ex-jumbotron-title'>{title}</h3>
        <h4 className='ex-jumbotron-sub-title'>{subTitle}</h4>
        <p className='ex-jumbotron-paragraph'>{text}</p>
        <a className='ex-jumbotron-button btn btn-primary' href={link}>Details</a>
      </div>
    </div>
  )
}

export default Banner