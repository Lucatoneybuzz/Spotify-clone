import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
    setVolume, // Assuming you have a setVolume method in your context
    mute, // Assuming you have a mute method in your context
    unmute, // Assuming you have an unmute method in your context
  } = useContext(PlayerContext);

  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(1);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      unmute();
    } else {
      mute();
    }
  };

  const adjustVolume = (event) => {
    const newVolume = event.target.value;
    setVolumeState(newVolume);
    setVolume(newVolume);
  };

  const toggleMiniPlayer = () => {
    setIsMiniPlayer(!isMiniPlayer);
    // Add logic to switch to mini player view
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="Track" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="Play" />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[30vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="Mic" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="Queue" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="Speaker" onClick={toggleMute} />
        <div className="w-20 bg-slate-50 h-1 rounded">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={adjustVolume}
            className="w-full h-full"
          />
        </div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" onClick={toggleMiniPlayer} />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="Zoom" onClick={toggleFullscreen} />
      </div>
    </div>
  );
};

export default Player;
