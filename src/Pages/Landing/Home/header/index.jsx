import React from "react";
import styles from "./style.module.scss";

import exampleImage from "../../shared/images/example.png";

const landingHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.p1}>MODERN INTERIOR</p>

            <p className={styles.p2}>Create Your<br/> Interior Design.</p>

            <p className={styles.p3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quas a delectus ad quasi sit unde libero veritatis culpa dolorem.
              Iste quos veritatis veniam error distinctio odio, ea laborum
              adipisci?
            </p>

            <button className={styles.button}>START</button>
          </div>

          <img 
            src={exampleImage}
            alt="example image"
            className={styles.exampleImage}
          />
        </div>
      </header>
    </>
  );
};

export default landingHeader;
