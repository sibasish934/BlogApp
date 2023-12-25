import React from "react";
import styles from "./features.module.css";
import Image from "next/image";
const Features = () => {
  return (
    <div className={styles.container}>
      <h2>
        Hey, Everyone. Discover New Ideas Related to latest technology and new
        tech blogs.
      </h2>
      <div className={styles.sidecontainer}>
        <div className={styles.imageBox}>
          <Image src="/p1.jpeg" alt="first-image" className={styles.img} width={600} height={550} />
        </div>
        <div className={styles.content}>
          <h3> Lorem ipsum dolor sit amet, alim consectetur adipiscing elit.</h3>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>Read more.</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
