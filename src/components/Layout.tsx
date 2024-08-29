import AllArtist from "./AllArtist";
import AllSong from "./AllSong";
import Library from "./Library";
import Playback from "./Playback";
import Playlist from "./Playlist";
import { SongProvider } from "./SongContext";
import { SongPlaylistProvider } from "./SongPlaylistContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <>
      <SongPlaylistProvider>
        <SongProvider>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 p-0" style={{ backgroundColor: "#101727" }}>
                <Playlist></Playlist>
              </div>
              <div className="col-9 p-0" style={{ backgroundColor: "#0B1321" }}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/MusicZ/" element={<Library></Library>} />
                    <Route path="/MusicZ/AllArtist" element={<AllArtist></AllArtist>} />
                    <Route path="/MusicZ/AllSong" element={<AllSong></AllSong>} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </div>
          <Playback></Playback>
        </SongProvider>
      </SongPlaylistProvider>
    </>
  );
}

export default Layout;
