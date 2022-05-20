import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const BrandDetails = ({brandName, brandAddress, brandEmail}:{
    brandName: string,
    brandAddress: string,
    brandEmail: string
}) => {
  return (
      <>
        <h1>{brandName}</h1>
        <span>
        <h2>Hello test</h2>
        <FontAwesomeIcon icon={faCoffee} />
        <h4>{brandAddress}</h4>
        <h4>{brandEmail}</h4>
        </span>
      </>
    )
}

export default BrandDetails