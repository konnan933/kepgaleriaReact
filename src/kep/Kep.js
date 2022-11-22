import "./Kep.css";

function Kep({ kepAdat }) {
  return (
    <div className="kep">
      <h3>{kepAdat.cim}</h3>
      <img src={kepAdat.ut} alt="kep" />
      <h4>{kepAdat.szerzo}</h4>
    </div>
  );
}
export default Kep;
