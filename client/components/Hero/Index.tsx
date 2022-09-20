import React from 'react'
// import Image from 'next/image'
import Modal from '../../Elements/Modal'
import Registration from '../Registration'

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
  let background = require(`../../public/images/${backgroundImage}`)
  return (
    <div className={`ex-element ex-banner ${className}`} style={{backgroundImage: `url(${background.default.src})`}}>
      <div className={childWrapClass} style={{backgroundColor: colorOverly}}>
        <h3 className='ex-jumbotron-title ex-text-white'>{title}</h3>
        <h4 className='ex-jumbotron-sub-title ex-text-dal-white'>{subTitle}</h4>
        <p className='ex-jumbotron-paragraph ex-text-dal-white'>{text}</p>        
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationModal">
          Register
        </button>
      </div>
        <Modal modalId="registrationModal" modalTitle='Registation form' modalSubmitText="Register">
          <Registration path='http://localhost:8000/api/users/registration'/>
        </Modal>
    </div>
  )
}

export default Banner