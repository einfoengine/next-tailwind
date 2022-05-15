import { type } from 'os';
import React from 'react'

type container = '' | 'fluid';

const Row = (props:{
  className: string,
  container: container,
  children: any
}) => {
  return (
    <div className={'ex-row row'}>
          {props.children}
    </div>
  )
}

export default Row