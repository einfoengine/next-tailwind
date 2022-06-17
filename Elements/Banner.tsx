import React from 'react'

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
  return (
    <div className={`ex-element ex-banner ${className}`} style={{backgroundColor: backgroundColor, backgroundImage: backgroundImage}}>        
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{text}</p>
        <a href={link}>Details</a>
    </div>
  )
}

export default Banner