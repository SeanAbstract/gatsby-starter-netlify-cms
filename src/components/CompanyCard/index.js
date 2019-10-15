// @flow
import React from 'react'

type Props = {
  brandLogo: any,
  brandDescription: string,
}

function CompanyCard(props: Props) {
  return (
    <div className="col-md-3 text-left">
      <img src={props.brandLogo} alt="Brand Logo" />
      <p>{props.brandDescription}</p>
    </div>
  )
}

export default CompanyCard
