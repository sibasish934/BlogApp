import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link';
import Image from 'next/image';
const Comment = () => {

  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder='write a comment...' className={styles.input}></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ): (
        <Link href="/login">Login to Write a Comment.</Link>     
      )
    }
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.user}>
          <Image src="/p1.jpeg" alt='user' width={50} height={50} className={styles.image} />
          <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>13.12.2002</span>
          </div>
        </div>
        <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
    </div>
    </div>
  )
}

export default Comment