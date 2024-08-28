import { useContext } from "react";
import styles from "../styles/SongPlaylist.module.css";
import { SongContext } from "./SongContext";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SongPlaylistContext } from "./SongPlaylistContext";

interface Props {
  id: string;
  name: string;
  img: string;
  artist: string;
  audioUrl: string;
}

function SongPlaylist({ id, name, img, artist, audioUrl }: Props) {
  const { setSelectedSong } = useContext(SongContext)!;
  const { removeSongFromPlaylist } = useContext(SongPlaylistContext)!;

  return (
    <>
      <div className={`row ${styles.songPlaylistCard} pe-1`}>
        <div
          className="col-2 p-0 d-flex justify-content-center align-items-center fw-bold"
          style={{ color: "#777777", fontSize: "17px" }}
          onClick={() => setSelectedSong({ name, img, artist, audioUrl })}
        >
          {id.length === 1 ? "0" + id : id}
        </div>

        <div
          className="col-2 p-0 d-flex align-items-center"
          onClick={() => setSelectedSong({ name, img, artist, audioUrl })}
        >
          <img
            src={img}
            alt=""
            style={{ width: "55px", borderRadius: "5px" }}
          />
        </div>

        <div
          className="col-7"
          onClick={() => setSelectedSong({ name, img, artist, audioUrl })}
        >
          <p className="fw-semibold m-0 mt-2" style={{ fontSize: "15px" }}>
            {name}
          </p>
          <p
            className="fw-semibold"
            style={{ fontSize: "14px", color: "#999999" }}
          >
            {artist}
          </p>
        </div>
        <div className="col-1 p-0 d-flex justify-content-between align-items-center">
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ color: "#ffffff", fontSize: "23px" }}
            onClick={() => removeSongFromPlaylist(audioUrl)}
          />
        </div>
      </div>
    </>
  );
}

export default SongPlaylist;
