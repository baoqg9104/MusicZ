import Artist from "./Artist";
import mtp from "../assets/artists/mtp.jpg";
import _24 from "../assets/music/24.jpg";
import styles from "../styles/Library.module.css";
import { useRef } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Song from "./Song";
import { Link } from "react-router-dom";

function Library() {
  const artistScrollRef = useRef<HTMLDivElement>(null);
  const songScrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = (scrollRef: React.RefObject<HTMLDivElement>) => {
    if (scrollRef.current) {
      const distance = 225;
      const step = 5;
      const interval = 7;
      let scrolled = 0;

      const smoothScroll = setInterval(() => {
        if (scrollRef.current && scrolled < distance) {
          scrollRef.current.scrollBy({ left: step, behavior: "auto" });
          scrolled += step;
        } else {
          clearInterval(smoothScroll);
        }
      }, interval);
    }
  };

  const scrollLeft = (scrollRef: React.RefObject<HTMLDivElement>) => {
    if (scrollRef.current) {
      const distance = 225;
      const step = 5;
      const interval = 7;
      let scrolled = 0;

      const smoothScroll = setInterval(() => {
        if (scrollRef.current && scrolled < distance) {
          scrollRef.current.scrollBy({ left: -step, behavior: "auto" });
          scrolled += step;
        } else {
          clearInterval(smoothScroll);
        }
      }, interval);
    }
  };

  return (
    <>
      <div
        className="container-fluid p-4 ps-lg-5 pe-lg-5 ps-3 pe-3 mb-5"
        style={{ color: "white" }}
      >
        <div className="row">
          <h2>My Library</h2>
        </div>
        <div className="row mt-5">
          <div className="d-flex mb-4 align-items-center justify-content-between">
            <h3 className="d-inline-block">Popular Artists</h3>
            <Link
              className={`d-inline-block me-lg-4 mt-2 fw-semibold ${styles.showAll}`}
              style={{textDecoration: "none"}}
              to="/MusicZ/AllArtist"
            >
              Show all
            </Link>
          </div>
          <div className="d-flex">
            <button
              className={`btn ${styles.scrollButton}`}
              onClick={() => scrollLeft(artistScrollRef)}
              style={{}}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: "#ffffff" }}
              />
            </button>
            <div
              className={`d-flex overflow-auto ${styles.artistWrapper}`}
              ref={artistScrollRef}
            >
              <Artist name="Sơn Tùng M-TP" img={mtp}></Artist>
              <Artist
                name="W/N"
                img="https://i.scdn.co/image/ab67616100005174316c0f0bc6cf3a29c203ab1e"
              ></Artist>
              <Artist
                name="Vũ."
                img="https://i.scdn.co/image/ab676161000051742d7150aa7e90e9a85610ab3d"
              ></Artist>
              <Artist
                name="Long Cao"
                img="https://yt3.googleusercontent.com/ytc/AIdro_lWTuKFEj7Bwv2uTc6jOeBXx0IPnAOfQevhzdNg-eIUDA=s160-c-k-c0x00ffffff-no-rj"
              ></Artist>
              <Artist
                name="PhucXp"
                img="https://i.scdn.co/image/ab676161000051742d730a3ebb6723d917887847"
              ></Artist>
            </div>
            <button
              className={`btn ${styles.scrollButton}`}
              onClick={() => scrollRight(artistScrollRef)}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="d-flex mb-4 align-items-center justify-content-between">
            <h3 className="d-inline-block">Popular Song</h3>
            <Link
              className={`d-inline-block me-lg-4 mt-2 fw-semibold ${styles.showAll}`}
              style={{textDecoration: "none"}}
              to="/MusicZ/AllSong"
            >
              Show all
            </Link>
          </div>
          <div className="d-flex">
            <button
              className={`btn ${styles.scrollButton}`}
              onClick={() => scrollLeft(songScrollRef)}
              style={{ height: "220px" }}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: "#ffffff" }}
              />
            </button>
            <div
              className={`d-flex overflow-auto ${styles.artistWrapper}`}
              ref={songScrollRef}
            >
              <Song
                img="https://i.scdn.co/image/ab67616d00001e02a1bc26cdd8eecd89da3adc39"
                name="Đừng Làm Trái Tim Anh Đau"
                artist="Sơn Tùng M-TP"
                audioUrl="dunglamtraitimanhdau.mp3"
              ></Song>
              <Song
                img={_24}
                name="2 4"
                artist="W/N"
                audioUrl="24.mp3"
              ></Song>
              <Song
                img="https://i.scdn.co/image/ab67616d00001e02dc031e2429585e32b4ccb69b"
                name="id 072019"
                artist="W/N"
                audioUrl="id072019.mp3"
              ></Song>
              <Song
                img="https://i.scdn.co/image/ab67616d00001e02123c7870fc7a0a61c0ab4012"
                name="Như Anh Đã Thấy Em"
                artist="PhucXp"
                audioUrl="nhuanhdathay.mp3"
              ></Song>
              <Song
                img="https://i.scdn.co/image/ab67616d00001e02ccc76f160c5ba1da853530ae"
                name="Chẳng Thể Tìm Được Em"
                artist="PhucXp"
                audioUrl="changthetimduocem.mp3"
              ></Song>
              <Song
                img="https://i.scdn.co/image/ab67616d0000b2738898ca25107af040f275a749"
                name="Bông Hoa Đẹp Nhất"
                artist="Quân AP"
                audioUrl="bonghoadepnhat.mp3"
              ></Song>
            </div>
            <button
              className={`btn ${styles.scrollButton}`}
              onClick={() => scrollRight(songScrollRef)}
              style={{ height: "220px" }}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
