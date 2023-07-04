import MenuIcon from "@mui/icons-material/Menu";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

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
                  zIndex: "-1",
                }}
              >
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
        </div>
        <div className="webpos-receipt">
          <div className="receipt-nav">
            <span>Receipt</span>
            <span>
              <AccountCircleIcon />
            </span>
          </div>
          <div className="order-list"></div>
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
