// @flow
import React from 'react'

import './styles.scss'

type Props = {
  date: string,
  description: string,
}

function HistoryCard({date, description}: Props) {
  return (
    <div className="card history-card">
      <div className="card-body d-flex justify-content-center align-items-start flex-column">
        <h5 className="card-title">{date}</h5>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}

export default HistoryCard
