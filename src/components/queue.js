import React, { Component } from 'react';
import * as styles from 'stylesheets/search.css';

class Queue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.songs}>Queue is empty</div>
      </div>
    );
  }
}

export default Queue;
