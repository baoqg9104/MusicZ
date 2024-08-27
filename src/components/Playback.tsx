import { useContext } from "react";
import { SongContext } from "./SongContext";
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

function Playback() {
  const { selectedSong } = useContext(SongContext)!;

  return (
    <>
      <AudioPlayer
        autoPlay
        src={selectedSong?.audioUrl}
      />
    </>
  );
}

export default Playback;
