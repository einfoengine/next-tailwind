import React from 'react'

const Column = (props:{
  className?: string,
  position: 'a' | 'b' | 'd' | 'd',
  children: any,
  greed: 1 | 2 | 3 | 4 | 5 | 6
}) => {
  return (
    <div className={`ex-column col col-md-${props.greed} ex-position-${props.position} ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Column