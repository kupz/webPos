import product1 from "../../assets/headset.jpg";

export default function ProductCard(props) {
  return (
    <div>
      <span>
        <h4>{props.name}</h4>
        <img src={product1} alt="" />
        <p>Price : P{props.price}</p>
        <p>
          {props.description}
        </p>
      </span>
    </div>
  );
}
