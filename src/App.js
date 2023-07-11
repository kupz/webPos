// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ModalAddProduct from "./pages/webpos/ModalAddproduct";
import Webpos from "./pages/webpos/Webpos";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Homepage/Home";

function App() {
  const modal = useSelector((state) => state.modal.addProduct);

  return (
    <div className="App">
      <ToastContainer />
      {modal ? <ModalAddProduct /> : null}

      {/* <Webpos /> */}
      {/* <Dashboard /> */}
      <Home />
    </div>
  );
}

export default App;
