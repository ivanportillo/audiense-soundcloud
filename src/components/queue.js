import React, { Component } from 'react';
import * as styles from 'stylesheets/queue.css';
import Track from 'components/track';
import { connect } from 'react-redux';

import * as actions from 'actions';
import { bindActionCreators } from 'redux';

class Queue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const queueTracks = this.props.queue.map((song) => {
      return (<Track key={song.id} song={song} />);
    });
    return (
      <div className={styles.mainContainer}>
        {this.props.queue.length ?
          <div className={styles.queue}>
            {queueTracks}
          </div> :
            <div className={styles.empty}>Queue is empty</div> }
      </div>
    );
  }
}

Queue.propTypes = {
  queue: React.PropTypes.array,
};

const mapStateToProps = state => ({
  queue: state.queue,
});

const mapActionToProps = dispatch =>
  bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapActionToProps)(Queue);
