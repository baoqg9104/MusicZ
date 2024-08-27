import Library from "./Library";
import Playback from "./Playback";
import Playlist from "./Playlist";
import { SongProvider } from "./SongContext";

function Layout() {
  return (
    <>
      <SongProvider>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0" style={{ backgroundColor: "#101727" }}>
              <Playlist></Playlist>
            </div>
            <div className="col-9 p-0" style={{ backgroundColor: "#0B1321" }}>
              <Library></Library>
            </div>
          </div>
        </div>
        <Playback></Playback>
      </SongProvider>
    </>
  );
}

export default Layout;
