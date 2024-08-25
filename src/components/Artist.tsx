
interface Props {
  name: string;
  img: string;
}

function Artist({ name, img }: Props) {
  return (
    <>
      <div style={{width: "180px"}}>
        <div style={{borderRadius: "90%"}}>
          <img src={img} className="w-100" style={{borderRadius: "90%"}} alt="" />
        </div>
        <div className="text-center mt-2">
          <p style={{fontSize: "18px"}}>{name}</p>
        </div>
      </div>
    </>
  );
}

export default Artist;
