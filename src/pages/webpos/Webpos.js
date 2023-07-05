import MenuIcon from "@mui/icons-material/Menu";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ReceiptItem from "./ReceiptItem";

export default function Webpos() {
  const [menu, setMenu] = useState(false);
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
                <span>Add Product</span>
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
            <ReceiptItem />
          </div>
          <div className="preview">
            <span>TOTAL</span>
            <span>CASH</span>
            <span>CHANGE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
