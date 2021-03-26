import React from "react";

//! Icons
import { FaPlay, FaPause } from "react-icons/fa";
import { BsSkipForwardFill, BsFillSkipBackwardFill } from "react-icons/bs";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <BsFillSkipBackwardFill className="control-icons" />
        <FaPlay className="control-icons" />
        {/* <FaPause className="control-icons" /> */}
        <BsSkipForwardFill className="control-icons" />
      </div>
    </div>
  );
};

export default Player;
