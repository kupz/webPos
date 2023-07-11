import MenuIcon from "@mui/icons-material/Menu";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ReceiptItem from "./ReceiptItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductModal } from "../../redux/slice/modalTriggerSlice";

import defaultImg from "../../assets/productDefault.png";

export default function Webpos() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orders);

  const handleAddProduct = () => {
    setMenu(!menu);
    dispatch(toggleProductModal());
  };

  const products = useSelector((state) => state.products);

  const getOrderSum = () => {
    let sum = 0;
    orderList.forEach((item) => {
      sum += item.qty * item.price;
    });
    return sum.toLocaleString();
  };

  return (
    <div className="webpos">
      <div className="webpos-content">
        <div className="webpos-products">
          <div className="product-nav">
            <span className="position-relative">
              <span onClick={() => setMenu(!menu)}>
                <MenuIcon />
              </span>
              <div
                className="expandable-menu"
                style={{
                  display: menu ? "flex" : "none",
                  zIndex: "100",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setMenu(!menu)}
                >
                  <h4>Close</h4>
                  <CloseIcon />
                </span>
                <span>Dashboard</span>
                <span onClick={handleAddProduct}>Add Product</span>
                <span></span>
              </div>
            </span>
            <span className="searchBar">
              <input type="text" />
              <SearchIcon />
            </span>
            <span>
              <QrCodeScannerIcon />
            </span>
          </div>
          <div className="product-container">
            {products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  description={item.desc}
                  price={item.price}
                  sku={item.sku}
                  id={item.id}
                  img={item.img ? item.img : defaultImg}
                />
              );
            })}
          </div>
        </div>

        <div className="webpos-receipt">
          <div className="receipt-nav">
            <span>Receipt</span>
            <span>
              <AccountCircleIcon />
            </span>
          </div>
          <div className="order-list">
            {orderList.map((item) => {
              return (
                <ReceiptItem
                  sku={item.sku}
                  price={item.price}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className="preview">
            <span>TOTAL : {getOrderSum()} </span>
            <span>CASH</span>
            <span>CHANGE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
