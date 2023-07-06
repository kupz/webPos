// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ModalAddProduct from "./pages/webpos/ModalAddproduct";
import Webpos from "./pages/webpos/Webpos";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const modal = useSelector((state) => state.modal.addProduct);

  return (
    <div className="App">
      <ToastContainer />
      {modal ? <ModalAddProduct /> : null}

      <Webpos />
    </div>
  );
}

export default App;
