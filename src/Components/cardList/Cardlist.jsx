import React from 'react'
import styles from "./Cardlist.module.css"
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const Cardlist = () => {
  return (
    <div className={styles.container}>
        <h2>Recent Posts</h2>
        <Card />
        <Pagination />
    </div>
  )
}

export default Cardlist;