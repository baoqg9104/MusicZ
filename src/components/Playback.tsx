import { useContext } from "react";
import { SongContext } from "./SongContext";
import AudioPlayer from "react-h5-audio-player";
import styles from "../styles/Playback.module.css";
import "/public/styles.css"
import { SongPlaylistContext } from "./SongPlaylistContext";

function Playback() {
  const { selectedSong, setSelectedSong } = useContext(SongContext)!;
  const { playlist } = useContext(SongPlaylistContext)!;

  const handleSongEnd = () => {
    const currentIndex = playlist.findIndex(
      (song) => song.audioUrl === selectedSong?.audioUrl
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < playlist.length) {
      setSelectedSong(playlist[nextIndex]);
    } else {
      setSelectedSong(playlist[0]); // Stop playback or loop to the first song
    }
  };

  return (
    <>
      {selectedSong ? (
        <div
          className="container-fluid text-light"
          style={{
            backgroundColor: "#121927",
            height: "90px",
            position: "fixed",
            bottom: "0",
          }}
        >
          <div className="row w-100">
            <div className="col-3 d-flex align-items-center ps-5">
              <img
                src={selectedSong?.img}
                alt=""
                style={{ width: "63px", borderRadius: "5px" }}
              />
              <div className="ms-3 fw-semibold">
                <p className="m-0">{selectedSong?.name}</p>
                <p
                  className="m-0"
                  style={{ fontSize: "15px", color: "#999999" }}
                >
                  {selectedSong?.artist}
                </p>
              </div>
            </div>
            <div className="col-9">
              <AudioPlayer
                autoPlay
                src={selectedSong?.audioUrl}
                className={`${styles.audioPlayer}`}
                onEnded={handleSongEnd}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Playback;
