import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Page404 = () => {
  return (
    <>
      <div className={styles.boxContainer}>
        <div className={styles.centeredElement}>
          <span className={styles.code}>404</span>
          <span className={styles.message}>Not Found</span>
          <br />
          {/* <button className={styles.buttonHome}>
            <Link to="/home" className={styles.buttonHomeText}>Back to Home</Link>
          </button> */}
          <button type="button" className={styles.buttonHome}>
            <Link to="/home" className={styles.buttonHomeText}>Back to Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page404;
