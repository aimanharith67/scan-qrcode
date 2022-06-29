import React, { useState } from "react";
import Qrcode from "./qrcode/qrcode";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [scanResultWebCam2, setScanResultWebCam2] = useState("");
  const [scanResultWebCam3, setScanResultWebCam3] = useState("");
  const [scanResultWebCam4, setScanResultWebCam4] = useState("");
  const [scanResultWebCam5, setScanResultWebCam5] = useState("");
  const [numbers, setNumbers] = useState(Number);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashboard
              scanResultWebCam={scanResultWebCam}
              setScanResultWebCam={setScanResultWebCam}
              scanResultWebCam2={scanResultWebCam2}
              setScanResultWebCam2={setScanResultWebCam2}
              scanResultWebCam3={scanResultWebCam3}
              setScanResultWebCam3={setScanResultWebCam3}
              scanResultWebCam4={scanResultWebCam4}
              setScanResultWebCam4={setScanResultWebCam4}
              scanResultWebCam5={scanResultWebCam5}
              setScanResultWebCam5={setScanResultWebCam5}
              numbers={numbers}
              setNumbers={setNumbers}
            />
          }
        ></Route>
        <Route
          path="/Qrcode"
          element={
            <Qrcode
              scanResultWebCam={scanResultWebCam}
              setScanResultWebCam={setScanResultWebCam}
              scanResultWebCam2={scanResultWebCam2}
              setScanResultWebCam2={setScanResultWebCam2}
              scanResultWebCam3={scanResultWebCam3}
              setScanResultWebCam3={setScanResultWebCam3}
              scanResultWebCam4={scanResultWebCam4}
              setScanResultWebCam4={setScanResultWebCam4}
              scanResultWebCam5={scanResultWebCam5}
              setScanResultWebCam5={setScanResultWebCam5}
              numbers={numbers}
              setNumbers={setNumbers}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
