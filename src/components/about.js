import React, { Component } from 'react';
import * as styles from 'stylesheets/search.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.songs}>
          <img alt="Audiense Logo" height="200" src={'http://www.audiense.com/wp-content/uploads/2016/03/Audiense-socialintelligence-CROPPED.png'} />
          <span>Hola holita vecinitos</span>
        </div>
      </div>
    );
  }
}

export default About;
