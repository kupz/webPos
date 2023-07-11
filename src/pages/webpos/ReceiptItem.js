import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOrder,
  updateOrderCustom,
  updateOrderDecrement,
} from "../../redux/slice/orderSlice";

export default function ReceiptItem(props) {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orders);
  const quantity = () => {
    const findItem = orderList.find((item) => item.id === props.id);
    return findItem.qty;
  };
  console.log(quantity());

  const handleIncrement = () => {
    dispatch(updateOrder(props.id));
  };

  const handleDecrement = () => {
    dispatch(updateOrderDecrement(props.id));
  };

  const handleOnchange = (e) => {
    if (!isNaN(e.target.value)) {
      dispatch(
        updateOrderCustom({ id: props.id, qty: parseInt(e.target.value) })
      );
    } else {
      dispatch(updateOrderCustom({ id: props.id, qty: 1 }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span onClick={handleIncrement} style={{ cursor: "pointer" }}>
          <ArrowDropUpIcon />
        </span>
        <input
          type="text"
          style={{
            width: "40px",
            textAlign: "center",
            padding: "1px",
            border: "0",
            outline: "none",
          }}
          value={quantity()}
          onChange={handleOnchange}
        />
        <span onClick={handleDecrement} style={{ cursor: "pointer" }}>
          <ArrowDropDownIcon />
        </span>
      </span>
      <h5>{props.sku}</h5>
      <h5>{props.price.toLocaleString()}</h5>
      <h5>{(props.price * quantity()).toLocaleString()}</h5>
    </div>
  );
}
