import { useDispatch, useSelector } from "react-redux";
import { addOrder, updateOrder } from "../../redux/slice/orderSlice";

export default function ProductCard(props) {
  const orderList = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const handleProductCLick = () => {
    const isExist = orderList.some((item) => item.id === props.id);
    if (!isExist) {
      const newOrder = {
        name: props.name,
        price: props.price,
        id: props.id,
        sku: props.sku,
        qty: 1,
      };
      dispatch(addOrder(newOrder));
      console.log(orderList);
    } else {
      dispatch(updateOrder(props.id));
      console.log("this is id" + props.id);
    }
    console.log(isExist);
    console.log(orderList);
  };
  return (
    <div onClick={handleProductCLick}>
      <span>
        <h4>{props.name}</h4>
        <img
          src={props.img}
          alt=""
          style={{ border: "1px solid black", margin: "5px 0px" }}
        />
        <p>Price: ₱ {props.price.toLocaleString()}</p>
        <p>{props.description}</p>
      </span>
    </div>
  );
}
