import Artist from "./Artist";
import mtp from "../assets/artists/mtp.jpg";
import thanhdat from "../assets/artists/thanhdat.jpg"

function AllArtist() {
  return (
    <>
      <div
        className="container-fluid p-4 ps-lg-5 pe-lg-5 ps-3 pe-3 mb-5"
        style={{ color: "white" }}
      >
        <div className="row">
          <h2>Artists</h2>
        </div>
        <div className="row mt-5">
          <div className="col">
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
            <Artist
              name="Thành Đạt"
              img={thanhdat}
            ></Artist>
            <Artist
              name="Quân A.P"
              img="src\assets\artists\quanap.jpg"
            ></Artist>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllArtist;
