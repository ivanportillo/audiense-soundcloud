import React, { Component } from 'react';
import * as styles from 'stylesheets/search.css';
import Track from 'components/track';
import { connect } from 'react-redux';

import * as actions from 'actions';
import { bindActionCreators } from 'redux';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.props.searchQuery(ev.target.value);
  }

  render() {
    const tracksResult = this.props.tracks.map((song) => {
      return (<Track key={song.id} song={song} queue={false} />);
    });

    return (
      <div className={styles.mainContainer}>
        <input type="text" placeholder="Search Artist" className={styles.search} onChange={this.onChange} />
        {this.props.tracks.length ?
          <div className={styles.tracks}>
            {tracksResult}
          </div> :
            <div className={styles.empty}>
              No Tracks
            </div>}
      </div>
    );
  }
}

Search.propTypes = {
  searchQuery: React.PropTypes.func,
  tracks: React.PropTypes.array,
};

const mapStateToProps = state => ({
  tracks: state.tracks,
});

const mapActionToProps = dispatch =>
  bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapActionToProps)(Search);
