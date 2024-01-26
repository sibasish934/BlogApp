import React from 'react'
import styles from "../blog/blog.module.css";
import Cardlist from '@/Components/cardList/Cardlist';
import Menu from '@/Components/Menu/Menu';

const Page = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <Cardlist />
            <Menu />
        </div>
    </div>
  )
}

export default Page