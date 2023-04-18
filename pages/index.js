import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuItems}>
          {/* <div className={styles.searchBar}>
            <input type="text" placeholder="Type here to search..." />
          </div> */}
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
                <a href="#" className="active">
                  Home
                </a>
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
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
            <div className={styles.contentTitle}>
              <h1>Whatever is begun in anger ends in shame</h1>
            </div>
            <div className={styles.contentText}>
              <p>
                Now when I had mastered the language of this water and had come
                to know every trifling feature that bordered the great river as
                familiarly as I knew the letters of the alphabet, I had made a
                valuable acquisition. I still keep in mind a certain wonderful
                sunset which I witnessed when and steamboating
                <a href="#">
                  <i className={styles.arrowLink}></i>
                </a>
              </p>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>
                {" "}
                <a href="#">Whatever is begun in anger ends in shame</a>{" "}
              </h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>
                {" "}
                <a href="#">Whatever is begun in anger ends in shame</a>{" "}
              </h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>
                {" "}
                <a href="#">Whatever is begun in anger ends in shame</a>{" "}
              </h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>
                {" "}
                <a href="#">Whatever is begun in anger ends in shame</a>{" "}
              </h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>
                {" "}
                <a href="#">Whatever is begun in anger ends in shame</a>{" "}
              </h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <div className={styles.backgroundImage}>
            <img src="./image_back.jpg" alt="background" />
          </div>
        </div>
      </div>
    </>
  );
}
