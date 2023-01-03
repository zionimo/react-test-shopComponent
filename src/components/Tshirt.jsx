import "../css/Tshirt.css";
import shirt1 from "../img/옷1.png";
import shirt2 from "../img/옷2.png";
import shirt3 from "../img/옷3.png";

const Tshirt = () => {
  const array = [
    { img: shirt1, name: "short red t-shirt" },
    { img: shirt2, name: "long green t-shirt" },
    { img: shirt3, name: "graphic t-shirt" },
  ];
  console.log(array[0]);

  return (
    <div className="card">
      {array.map((i) => (
        <div className="tshirt-component">
          <img src={i.img} alt="" key={i} />
          <p>{i.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tshirt;
