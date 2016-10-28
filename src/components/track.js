import React, { Component } from 'react';
import * as styles from 'stylesheets/track.css';
import { connect } from 'react-redux';

import * as actions from 'actions';
import { bindActionCreators } from 'redux';

class Track extends Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
    this.addSong = this.addSong.bind(this);
  }

  playSong() {
    this.props.playTrack(this.props.song);
  }

  addSong() {
    this.props.queueTrack(this.props.song);
  }

  render() {
    const song = this.props.song;
    let duration = song.duration;
    const ms = duration % 1000;
    duration = (duration - ms) / 1000;
    const secs = duration % 60;
    duration = (duration - secs) / 60;
    const mins = duration % 60;
    return (
      <div className={styles.track}>
        <img className={styles.image} alt="Track" src={song.artwork_url} />
        <h1 className={styles.title}>
          {song.title}
          <span>from {song.user.username} {mins + ':' + secs}</span>
        </h1>
        <div onClick={this.playSong}><i className={'material-icons' + ' ' + styles.controls}>play_arrow</i></div>
        {this.props.queue ? null : <div onClick={this.addSong}><i className={'material-icons' + ' ' + styles.controls}>playlist_add</i></div>}
      </div>
    );
  }
}

Track.propTypes = {
  playTrack: React.PropTypes.func,
  queue: React.PropTypes.array,
  queueTrack: React.PropTypes.func,
  song: React.PropTypes.object,
};


const mapActionToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(null, mapActionToProps)(Track);
