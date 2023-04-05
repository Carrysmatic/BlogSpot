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
          <nav>
            <ul>
              <li>
                <div class="home-icon">
                  <div class="roof">
                    <div class="roof-edge"></div>
                  </div>
                  <div class="front"></div>
                </div>
              </li>
              <li>
                <div class="about-icon">
                  <div class="head">
                    <div class="eyes"></div>
                    <div class="beard"></div>
                  </div>
                </div>
              </li>
              <li>
                <div class="work-icon">
                  <div class="paper"></div>
                  <div class="lines"></div>
                  <div class="lines"></div>
                  <div class="lines"></div>
                </div>
              </li>
              <li>
                <div class="mail-icon">
                  <div class="mail-base">
                    <div class="mail-top"></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
            <div className={styles.contentTitle}>
              <h2>Whatever is begun in anger ends in shame</h2>
            </div>
            <div className={styles.contentText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
                aliquet nunc nisl sit amet nisl. Sed ultrices, nisl ut aliquam
                <a href="#">
                  <i className={styles.arrowLink}></i>
                </a>
              </p>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>Whatever is begun in anger ends in shame</h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>Whatever is begun in anger ends in shame</h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>Whatever is begun in anger ends in shame</h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>Whatever is begun in anger ends in shame</h2>
            </div>
            <div className={styles.contentDetails}>
              <span className={styles.contentCategory}>Category</span>
              <span className={styles.contentDate}>Date</span>
            </div>
          </div>
          <div className={styles.contentBoxTitles}>
            <div className={styles.contentTitleSub}>
              <h2>Whatever is begun in anger ends in shame</h2>
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
