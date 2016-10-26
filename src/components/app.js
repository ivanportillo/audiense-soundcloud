import React from 'react';
import Navbar from 'components/navbar';
import * as styles from 'stylesheets/app.css';

const App = ({ children }) =>
  <div>
    <div className={styles.main}>
      <Navbar />
      {children}
      <div className={styles.player}>No track to play..</div>
    </div>
  </div>;

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
