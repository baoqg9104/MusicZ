import Artist from "./Artist";
import mtp from "../assets/artists/mtp.jpg";
import thanhdat from "../assets/artists/thanhdat.jpg";
import quanap from "../assets/artists/quanap.jpg";

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
            <Artist name="Thành Đạt" img={thanhdat}></Artist>
            <Artist name="Quân A.P" img={quanap}></Artist>
            <Artist
              name="MONO"
              img="https://i.scdn.co/image/ab676161000051748221305ea63809ddb999fbc4"
            ></Artist>
            <Artist
              name="Phát Huy T4"
              img="https://i.scdn.co/image/ab6761610000517460abb110a775c765cc2f9f36"
            ></Artist>
            <Artist
              name="H-Kray"
              img="https://i.scdn.co/image/ab6761610000517498481c9b6f6aefcd4d5b0a28"
            ></Artist>
            <Artist
              name="TLong"
              img="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/a/0/c/7a0cf55c785497b853fb59c2d056cae2.jpg"
            ></Artist>
            <Artist
              name="Thanh Hưng"
              img="https://i.scdn.co/image/ab67616100005174394f4bba5e758ad7adc00a3c"
            ></Artist>
            <Artist
              name="Lâm Tuấn"
              img="https://i.scdn.co/image/ab67616100005174015d202bd46a1cbee46491ef"
            ></Artist>
            <Artist
              name="Quang Đăng Trần"
              img="https://i.scdn.co/image/ab67616100005174291fbc5a2a9f4695b74b29ff"
            ></Artist>
            <Artist
              name="Nhật Phong"
              img="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg"
            ></Artist>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllArtist;
