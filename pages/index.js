import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuItems}>
          <div className={styles.searchBar}>
           <input type="text" placeholder="Type here to search..." />
          </div>
          <div className={styles.menuTitle}>
            <h1> Blog </h1>
            <p>
              Suppablog is simple and yet cool wordpress theme to lorem ipsum
              dolor sit.
            </p>
          </div>
          <div className={styles.menuList}>
            <ul>
              <li className={styles.listItemMenu}>
                <a href="#">Home</a>
              </li>
              <li className={styles.listItemMenu}>
                <a href="#">About</a>
              </li>
              <li className={styles.listItemMenu}>
                <a href="#">Scroll</a>
              </li>
              <li className={styles.listItemMenu}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <footer>
            <div className={styles.footer}>
              <p>
                © 2018 SUPPABLOG HTML TEMPLATE.
                <br />
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </footer>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.mediaSocialHolder}>
          <div className={styles.mediaSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              </div>
              <div className={styles.mediaSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              </div>
              <div className={styles.mediaSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              </div>
              <div className={styles.mediaSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              </div>
              <div className={styles.mediaSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              </div>
              <div className={styles.mediaSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              </div>
          </div>

        </div>
        <div className={styles.content}></div>
        <div className={styles.background}></div>
      </div>
    </>
  );
}
