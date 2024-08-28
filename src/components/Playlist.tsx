import SongPlaylist from "./SongPlaylist";
import _24 from "../assets/music/24.jpg";
import { useContext, useEffect } from "react";
import { SongPlaylistContext } from "./SongPlaylistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Playlist.module.css"

function Playlist() {
  const { playlist } = useContext(SongPlaylistContext)!;

  return (
    <>
      <div className="container p-4 pe-0 ps-2" style={{ color: "white" }}>
        <div className="row ps-4" style={{ marginBottom: "50px" }}>
          <div className="col-4">
            <h2>Playlist</h2>
          </div>
          <div className={`col-8 ${styles.playBtn}`}>
            <FontAwesomeIcon
              icon={faCirclePlay}   
              style={{ color: "#1ed760", fontSize: "40px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={`row`}>
          {playlist.map((song, index) => (
            <SongPlaylist
              id={(index + 1).toString()}
              img={song.img}
              name={song.name}
              artist={song.artist}
              audioUrl={song.audioUrl}
            ></SongPlaylist>
          ))}
        </div>
      </div>
    </>
  );
}

export default Playlist;
