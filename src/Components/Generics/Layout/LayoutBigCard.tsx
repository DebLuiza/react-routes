import React from 'react'
import styles from "./Style/LayoutBigCard.module.scss"

const LayoutBigCard = (props: any) => {
  return (
    <div className={styles['big-card']}>
      {props.children}
    </div>
  )
}

export { LayoutBigCard }