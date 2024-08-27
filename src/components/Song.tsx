import { useContext } from "react";
import styles from "../styles/Song.module.css";
import { SongContext } from "./SongContext";

interface Props {
  name: string;
  img: string;
  artist: string;
  audioUrl: string;
}

function Artist({ name, img, artist, audioUrl }: Props) {
  const { setSelectedSong } = useContext(SongContext)!;

  return (
    <>
      <div
        className={`d-inline-block ${styles.songCard}`}
        style={{ marginRight: "30px" }}
      >
        <div>
          <img
            src={img}
            className="w-100"
            style={{ borderRadius: "10px" }}
            alt=""
            onClick={() => setSelectedSong({ name, img, artist, audioUrl })}
          />
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

export default Artist;
