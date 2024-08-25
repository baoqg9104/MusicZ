import Library from "./Library";
import Playback from "./Playback";
import Playlist from "./Playlist";

function Layout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-0">
            <Playlist></Playlist>
          </div>
          <div className="col-9 p-0">
            <Library></Library>
          </div>
        </div>
      </div>
      <Playback></Playback>
    </>
  );
}

export default Layout;
