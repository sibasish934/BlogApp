import React from 'react'
import styles from "./Cardlist.module.css"
import Pagination from '../pagination/Pagination';

const Cardlist = () => {
  return (
    <div className={styles.container}>
        CardList
        <Pagination />
    </div>
  )
}

export default Cardlist;