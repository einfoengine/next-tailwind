import { type } from 'os';
import React from 'react'

const Section = (props:{
  id: string
  className: string,
  container: 'fixed' | 'fluid',
  children: JSX.Element|JSX.Element[]
}) => {
  return (
    <section className={`ex-section ex-${props.className}`}>
        <div className={`ex-container m-auto ${props.container!='fluid'?'container':'container-fluid'}`}>
          {
            props.children
          }
        </div>
    </section>
  )
}

export default Section