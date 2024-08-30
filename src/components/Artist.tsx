import styles from "../styles/Artist.module.css"

interface Props {
  name: string;
  img: string;
}

function Artist({ name, img }: Props) {
  return (
    <>
      <div className={`d-inline-block ${styles.artistCard}`} style={{ marginRight: "20px"}}>
        <div style={{borderRadius: "90%"}}>
          <img src={img} className="w-100" style={{borderRadius: "90%"}} alt="" />
        </div>
        <div className="text-center mt-2">
          <p style={{ fontWeight: 500}}>{name}</p>
        </div>
      </div>
    </>
  );
}

export default Artist;
