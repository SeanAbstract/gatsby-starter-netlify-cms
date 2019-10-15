// @flow
import React from 'react'

import styles from './styles.module.scss'

type Props = {
  date: string,
  description: string,
}

function HistoryCard({date, description}: Props) {
  return (
    <div className={`card ${styles.historyCard}`}>
      <div className="card-body d-flex justify-content-center align-items-start flex-column">
        <h5 className={styles.cardTitle}>{date}</h5>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  )
}

export default HistoryCard
