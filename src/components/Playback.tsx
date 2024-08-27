import { useContext } from "react";
import { SongContext } from "./SongContext";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import styles from "../styles/Playback.module.css";
import "/public/styles.css"

function Playback() {
  const { selectedSong } = useContext(SongContext)!;

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
                  style={{ fontSize: "15px", color: "#838383" }}
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
