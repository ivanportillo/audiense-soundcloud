import React from 'react';
import * as styles from 'stylesheets/track.css';

const Track = ({ image, title, author, duration }) =>
  <div className={styles.track}>
    <img className={styles.image} alt="Track" src={image} />
    <h1 className={styles.title}>
      {title}
      <span>from {author} {duration}</span>
    </h1>
    <i className={'material-icons' + ' ' + styles.controls}>play_arrow</i>
    <i className={'material-icons' + ' ' + styles.controls}>playlist_add</i>
  </div>;

Track.propTypes = {
  author: React.PropTypes.string,
  duration: React.PropTypes.duration,
  image: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Track;
