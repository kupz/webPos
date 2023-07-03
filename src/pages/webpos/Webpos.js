import MenuIcon from "@mui/icons-material/Menu";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Webpos() {
  return (
    <div className="webpos">
      <div className="webpos-content">
        <div className="webpos-products">
          <div className="product-nav">
            <span>
              <MenuIcon />
            </span>
            <span>
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
