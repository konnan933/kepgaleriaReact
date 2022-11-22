import Kep from "./kep/Kep";

const kepAdat = [
  {
    id: "1",
    cim: "Kep 1",
    szerzo: "Szerzo 1",
    ut: "",
  },
  {
    id: "2",
    cim: "Kep 2",
    szerzo: "Szerzo 2",
    ut: "",
  },
  {
    id: "3",
    cim: "Kep 3",
    szerzo: "Szerzo 3",
    ut: "",
  },
];

function Galeria() {
  return (
    <>
      {kepAdat.map((kep) => {
        return <Kep key={kep.id} kepAdat={kep} />;
      })}
    </>
  );
}
export default Galeria;
