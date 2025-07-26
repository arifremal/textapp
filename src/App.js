import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Light Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode hasbeen enabeled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      setText("Dark Mode");

      document.body.style.backgroundColor = "white";
      showAlert("Light mode hasbeen enabeled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="  TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          heading="Enter the text to Analyze Below"
          showAlert={showAlert}
          mode={mode}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
