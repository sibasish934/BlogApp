"use client";

import React, { useContext } from 'react';
import styles from "./themeToggle.module.css";
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';


const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext);
  const themeChanged = ()=>{
    toggle();
  }
  return (
    <div className={styles.container} onClick={themeChanged} style={theme ==="dark" ? {backgroundColor:"#fff"}: {backgroundColor:"#f172a"}}>
        <Image src="/moon.png" alt='moon' width={20} height={20} />
        <div className={styles.ball} style={theme ==="dark" ? {left: 1, backgroundColor:"#0f172a"}: {right:1, backgroundColor:"#fff"}}></div>
        <Image src="/sun.png" alt='moon' width={20} height={20} />
    </div>
  )
}

export default ThemeToggle;