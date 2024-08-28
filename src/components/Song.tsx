import { useContext } from "react";
import styles from "../styles/Song.module.css";
import { SongContext } from "./SongContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { SongPlaylistContext } from "./SongPlaylistContext";

interface Props {
  name: string;
  img: string;
  artist: string;
  audioUrl: string;
}

function Song({ name, img, artist, audioUrl }: Props) {
  const { setSelectedSong } = useContext(SongContext)!;
  const { addSongToPlaylist } = useContext(SongPlaylistContext)!;

  return (
    <>
      <div
        className={`d-inline-block ${styles.songCard}`}
        style={{ marginRight: "30px" }}
      >
        <div>
          <img
            src={img}
            className={`w-100 ${styles.songCardImg}`}
            style={{ borderRadius: "10px" }}
            alt=""
            onClick={() => setSelectedSong({ name, img, artist, audioUrl })}
          ></img>

          <div className={styles.playBtn}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              style={{ color: "#1ed760", fontSize: "60px" }}
              onClick={() => setSelectedSong({ name, img, artist, audioUrl })}
            />
          </div>

          <div className={styles.addToPlaylist}>
            <FontAwesomeIcon
              icon={faSquarePlus}
              style={{ color: "#ffffff", fontSize: "45px" }}
              onClick={() => addSongToPlaylist({ name, img, artist, audioUrl })}
            />
          </div>
        </div>
        <div className="text-center mt-2">
          <p style={{ fontWeight: 500, marginBottom: "3px" }}>{name}</p>
        </div>
        <div className="text-center">
          <p style={{ fontWeight: 500, color: "#B3B3B3" }}>{artist}</p>
        </div>
      </div>
    </>
  );
}

export default Song;
