import React, { Component } from 'react';
import * as styles from 'stylesheets/search.css';
import Track from 'components/track';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: ['lol'],
    };
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <input type="text" placeholder="Search Artist" className={styles.search} />
        {this.state.tracks.length ?
          <div className={styles.tracks}>
            <Track image="https://i1.sndcdn.com/artworks-000190756321-wnozgz-t500x500.jpg" title="Nxworries - Anderson Paak & Knxwledge - Suede" author="Stones Throw Records" duration="2:57" />
            <Track image="https://i1.sndcdn.com/artworks-000190756321-wnozgz-t500x500.jpg" title="Quiasimoto - Planned Attack" author="Stones Throw Records" duration="2:50" />
            <Track image="https://i1.sndcdn.com/artworks-000190756321-wnozgz-t500x500.jpg" title="NxWorries - Anderson Paak & Knxwledge - Lyk Dis" author="Stones Throw Records" duration="2:57" />
            <Track image="https://i1.sndcdn.com/artworks-000190756321-wnozgz-t500x500.jpg" title="Nxworries - Anderson Paak & Knxwledge - Suede" author="Stones Throw Records" duration="2:57" />
            <Track image="https://i1.sndcdn.com/artworks-000190756321-wnozgz-t500x500.jpg" title="Nxworries - Anderson Paak & Knxwledge - Suede" author="Stones Throw Records" duration="2:57" />
            <Track image="https://i1.sndcdn.com/artworks-000190756321-wnozgz-t500x500.jpg" title="Nxworries - Anderson Paak & Knxwledge - Suede" author="Stones Throw Records" duration="2:57" />
          </div> :
            <div className={styles.empty}>
              No Tracks
            </div>}
      </div>
    );
  }
}

export default Search;
