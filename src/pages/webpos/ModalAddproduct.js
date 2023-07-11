import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { addProduct } from "../../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductModal } from "../../redux/slice/modalTriggerSlice";
import ImageUploader from "./ImageUploader";

export default function ModalAddProduct() {
  const [imageData, setImageData] = useState(null);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleChangeSku = (e) => {
    setSku(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDescription(e.target.value);
  };

  const handleOnchangeBarcode = (e) => {
    if (!isNaN(e.target.value)) {
      setBarcode(e.target.value);
    }
  };

  const handleOnchangePrice = (e) => {
    if (!isNaN(e.target.value)) {
      setPrice(parseInt(e.target.value));
    }
  };

  const handleOnSubmit = () => {
    if (sku === "") {
      toast.error("SKU field is required");
    }
    if (name === "") {
      toast.error("Name field is required");
    }
    if (description === "") {
      toast.error("Description field is required");
    }
    if (barcode === "") {
      toast.error("Barcode field is required");
    }
    if (price === "") {
      toast.error("Price field is required");
    }

    if (
      sku !== "" &&
      name !== "" &&
      description !== "" &&
      barcode !== "" &&
      price !== ""
    ) {
      const newProduct = {
        sku: sku,
        name: name,
        desc: description,
        barcode: barcode,
        price: price,
        img: imageData,
      };

      dispatch(addProduct(newProduct));
      dispatch(toggleProductModal());
      toast.success("Product Successully added!");
    }
    console.log(products);
  };

  const handleCancel = () => {
    dispatch(toggleProductModal());
  };

  return (
    <div className="addproduct-modal-container">
      <div className="addproduct-form-container">
        <h2>Add Product</h2>
        <ImageUploader setImageData={setImageData} />
        <TextField
          id="outlined-basic"
          label="SKU code"
          variant="outlined"
          onChange={handleChangeSku}
          value={sku}
        />
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          id="outlined-basic"
          label="Product Description"
          variant="outlined"
          value={description}
          onChange={handleChangeDesc}
        />
        <TextField
          id="outlined-basic"
          label="Product Barcode"
          variant="outlined"
          value={barcode}
          onChange={handleOnchangeBarcode}
        />
        <TextField
          id="outlined-basic"
          label="Product Price"
          variant="outlined"
          value={price}
          onChange={handleOnchangePrice}
        />
        <div>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
