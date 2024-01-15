// this is how we give multiple classes to a element in next js.
// className={`${styles.firstClass} ${styles.SecondClass}`}

import React from 'react'
import styles from "./pagination.module.css"
const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination;