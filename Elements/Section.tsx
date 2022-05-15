import { type } from 'os';
import React from 'react'

const Section = (props:{
  className: string,
  container: '' | 'fluid',
  children: JSX.Element|JSX.Element[]
}) => {
  return (
    <section className={`ex-section ex-${props.className}`}>
        <div className={`ex-container ${props.container!='fluid'?'container':'container-fluid'}`}>
          {
            props.children
          }
        </div>
    </section>
  )
}

export default Section