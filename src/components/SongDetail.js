import React from "react";
import { connect } from "react-redux";

function SongDetail(props) {
  return (
    <div>
      {!props.selectedSong ? (
        "No song selected"
      ) : (
        <div>
          <h3>Details for:</h3>
          <p>Title: {props.selectedSong.title}</p>
          <p>Duration: {props.selectedSong.duration}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
