import React from 'react'
import styles from "./Style/LayoutSmallCard.module.scss"

const LayoutSmallCard = (props: any) => {
  return (
    <div className={styles['small-card']}>
      <div className={styles['small-space']}></div>
      {props.children}
    </div>
  )
}

export { LayoutSmallCard }