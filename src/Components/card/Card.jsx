import React from 'react'
import styles from "../card/card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
           <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt= "" fill className={styles.image} />
           </div>
           <div className={styles.textContainer}>
            <div className={styles.details}>
             <span className={styles.date}>11.02.2023 - </span>
             <span className={styles.category}>Culture</span> </div>
             <Link href="/"><h2 className={styles.blogTitle}>Lorem ipsum dolor sit amet consecteture adipisicing elit.</h2></Link>
             <p className={styles.desc}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
             <Link className={styles.link} href="/">Read More</Link>
           </div>
        </div>
  )
}

export default Card;