import React from 'react';
import { Link } from 'react-router';
import * as styles from 'stylesheets/navbar.css';

const Navbar = () =>
  <div className={styles.menubar}>
    <Link to="/search" className={styles.menuButton} activeClassName={styles.activeButton}>
      <i className="material-icons">search</i>
      <span>Search</span>
    </Link>
    <Link to="/queue" className={styles.menuButton} activeClassName={styles.activeButton}>
      <i className="material-icons">list</i>
      <span>Queue</span>
    </Link>
    <Link to="/about" className={styles.menuButton} activeClassName={styles.activeButton}>
      <i className="material-icons">business</i>
      <span>About</span>
    </Link>
  </div>;


export default Navbar;
