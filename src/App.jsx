import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";

function App() {
  const [colors, setColors] = useState(new Values("#0049B7").all(10));
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
