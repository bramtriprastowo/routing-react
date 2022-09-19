import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <button
        type="button"
        className={`${styles.menuButton}`}
        onClick={showSidebar}
      >
        &#9930;
      </button>
      <div
        className={
          sidebar ? styles.menu + " " + styles.menuActive : styles.menu
        }
      >
        <span className={styles.menuBack} onClick={hideSidebar}>
          &larr;
        </span>
        <span className={styles.menuTitle} onClick={hideSidebar}>
          Contents
        </span>
        <span>
          <Link className={styles.menuLink} onClick={hideSidebar} to="/home">
            Home
          </Link>
        </span>
        <span>
          <Link
            className={styles.menuLink}
            onClick={hideSidebar}
            to="/formvalidation"
          >
            Form Validation
          </Link>
        </span>
        <span>
          <Link className={styles.menuLink} onClick={hideSidebar} to="/hooks">
            Hooks
          </Link>
        </span>
        <span>
          <Link
            className={styles.menuLink}
            onClick={hideSidebar}
            to="/lifecycle"
          >
            Lifecycle
          </Link>
        </span>
      </div>
    </>
  );
};

export default Sidebar;
