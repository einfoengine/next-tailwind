import React from 'react'

const Logo = (props: any) => {
  return (
    <img className={`${props.className}`} src="/images/logo.jpg" alt="Logo" />
  )
}

export default Logo