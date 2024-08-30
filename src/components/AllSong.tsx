import Song from "./Song";
import _24 from "../assets/music/24.jpg";

function AllSong() {
  return (
    <>
      <div
        className="container-fluid p-4 ps-lg-5 pe-lg-5 ps-3 pe-3 mb-5"
        style={{ color: "white" }}
      >
        <div className="row">
          <h2>Songs</h2>
        </div>
        <div className="row mt-5">
          <div className="col overflow-hidden">
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02a1bc26cdd8eecd89da3adc39"
              name="Đừng Làm Trái Tim Anh Đau"
              artist="Sơn Tùng M-TP"
              audioUrl="dunglamtraitimanhdau.mp3"
            ></Song>
            <Song img={_24} name="2 4" artist="W/N" audioUrl="24.mp3"></Song>
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
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02bc146f67374ea7e19c5d0c80"
              name="Những Lời Hứa Bỏ Quên"
              artist="Vũ."
              audioUrl="nhungloihuaboquen.mp3"
            ></Song>
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02e64a2e5a2a3a6d1bf81ab191"
              name="Bước Qua Mùa Cô Đơn"
              artist="Vũ."
              audioUrl="buocquamuacodon.mp3"
            ></Song>
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02ccd295bae4a6befd2a5eabe6"
              name="Câu Hứa Chưa Vẹn Tròn"
              artist="Phát Huy T4"
              audioUrl="cauhuachuatronven.mp3"
            ></Song>
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02c473bd9c857c189d48ec1753"
              name="Phận Duyên Lỡ Làng"
              artist="Phát Huy T4"
              audioUrl="phanduyenlolang.mp3"
            ></Song>
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02abe01bd5f90e28ec087c58ab"
              name="Khuất Lối"
              artist="H-Kray"
              audioUrl="khuatloi.mp3"
            ></Song>
            <Song
              img="https://i.scdn.co/image/ab67616d00001e02bae3f1a95694c6ae1e69905d"
              name="Tấm Lòng Son"
              artist="H-Kray"
              audioUrl="tamlongson.mp3"
            ></Song>
            <Song
              img="https://i.scdn.co/image/ab67616d00001e024934df4741e8bb13260af5de"
              name="Rượu Mừng Hóa Người Dưng"
              artist="TLong"
              audioUrl="ruoumunghoanguoidung.mp3"
            ></Song>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllSong;
