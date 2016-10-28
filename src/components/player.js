import React, { Component } from 'react';
import * as styles from 'stylesheets/player.css';
import { connect } from 'react-redux';

import * as actions from 'actions';
import { bindActionCreators } from 'redux';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const track = nextProps.playing;
    if (this.state.current !== track) {
      if (this.state.current) this.state.current.audio.pause();
      const audio = new Audio(track.stream_url + '?client_id=' + process.env.CLIENT_ID);
      audio.play();
      audio.addEventListener('ended', () => {
        if (this.props.queue.length) {
          this.props.playTrackQueue();
        }
      });
      this.setState({
        current: {
          ...track,
          audio,
        },
      });
    }
  }

  onClick() {
    if (this.state.current.audio.paused) {
      this.state.current.audio.play();
    } else {
      this.state.current.audio.pause();
    }
  }

  render() {
    const currentSong = this.state.current;
    return (
      <div className={styles.container}>
        {currentSong ?
          <div className={styles.player}>
            <img alt="album" className={styles.image} src={currentSong.artwork_url} />
            <h1 className={styles.title}>
              {currentSong.title}
              <span>by {currentSong.user.username}</span>
            </h1>
            <div className={styles.controls}>
              <i onClick={this.onClick} className="material-icons">pause</i>
            </div>
          </div>
            :
              <div className={styles.empty}>No track to play..</div>
        }
      </div>
    );
  }
}

Player.propTypes = {
  playTrackQueue: React.PropTypes.func,
  queue: React.PropTypes.array,
};

const mapStateToProps = state => ({
  playing: state.playing,
  queue: state.queue,
});

const mapActionToProps = dispatch =>
  bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapActionToProps)(Player);
