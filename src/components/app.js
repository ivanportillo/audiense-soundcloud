import React from 'react';
import Navbar from 'components/navbar';
import Player from 'components/player';
import * as styles from 'stylesheets/app.css';

const App = ({ children }) =>
  <div>
    <div className={styles.main}>
      <Navbar />
      {children}
      <Player />
    </div>
  </div>;

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
