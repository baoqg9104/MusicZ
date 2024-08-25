import Artist from "./Artist";
import mtp from "../assets/artists/mtp.jpg"

function Library() {

  return (
    <>
      <div className="container-fluid p-4 ps-5 pe-5" style={{backgroundColor: "#0B1321", height: "100vh", color: "white"}}>
        <div className="row">
          <h2>My Library</h2>
        </div>
        <div className="row mt-5">
          <h3 className="mb-4">Popular Artists</h3>
          <div>
            <Artist name="Sơn Tùng M-TP" img={mtp}></Artist>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
