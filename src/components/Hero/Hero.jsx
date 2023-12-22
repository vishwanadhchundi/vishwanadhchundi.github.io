import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishwanadh Chundi</h1>
        <p className={styles.description}>
        Dedicated Full Stack Web Developer proficient in
JavaScript and experienced in the MERN stack
(MongoDB, Express.js, React.js, Node.js). Strong
problem-solving skills and a commitment to delivering
efficient and scalable web applications. Collaborative team
player with excellent communication skills and a proactive
attitude.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
