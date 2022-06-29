import React, { useState, useRef, useEffect } from "react";
import { Container, Card, CardContent, TextField } from "@material-ui/core";
import { Button, Row, Col, Modal } from "react-bootstrap";
import "./qrcode.css";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";

// QR Code
function Qrcode(props) {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const qrRef = useRef(null);
  const [scanResultFile, setScanResultFile] = useState("");
  const [wrongQr, setWrongQr] = useState("");

  console.log(props.scanResultWebCam[props.numbers]);
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

  const handleErrorWebCam = (error) => {
    if (
      props.scanResultWebCam != "International Psychology Centre Booth" &&
      props.scanResultWebCam2 != "Dietetics & Nutrition Services Booth" &&
      props.scanResultWebCam3 != "Blood Donation Booth" &&
      props.scanResultWebCam4 != "VR Games Booth" &&
      props.scanResultWebCam5 != "BookDoc Info Booth"
    ) {
      console.log(error);
      return error;
    }
  };

  const handleScanWebCam = (result) => {
    if (result) {
      props.setScanResultWebCam(result);
      if (props.scanResultWebCam === "International Psychology Centre Booth") {
        setShow(true);
        console.log("Scan1", props.scanResultWebCam);
      } else if (
        props.scanResultWebCam != "International Psychology Centre Booth"
      ) {
        setWrongQr("Salah");
      }
    }
  };

  const handleScanWebCam2 = (result) => {
    if (result) {
      props.setScanResultWebCam2(result);
      if (props.scanResultWebCam2 === "Dietetics & Nutrition Services Booth") {
        setShow(true);
        console.log("Scan2", props.scanResultWebCam2);
      } else if (
        props.scanResultWebCam2 != "Dietetics & Nutrition Services Booth"
      ) {
        setWrongQr("Salah");
      }
    }
  };

  const handleScanWebCam3 = (result) => {
    if (result) {
      props.setScanResultWebCam3(result);
      if (props.scanResultWebCam3 === "Blood Donation Booth") {
        setShow(true);
        console.log("Scan3", props.scanResultWebCam3);
      } else if (props.scanResultWebCam3 != "Blood Donation Booth") {
        setWrongQr("Salah");
      }
    }
  };

  const handleScanWebCam4 = (result) => {
    if (result) {
      props.setScanResultWebCam4(result);
      if (props.scanResultWebCam4 === "VR Games Booth") {
        setShow(true);
        console.log("Scan4", props.scanResultWebCam4);
      } else if (props.scanResultWebCam4 != "VR Games Booth") {
        setWrongQr("Salah");
      }
    }
  };

  const handleScanWebCam5 = (result) => {
    if (result) {
      props.setScanResultWebCam5(result);
      if (props.scanResultWebCam5 === "BookDoc Info Booth") {
        setShow(true);
        console.log("Scan5", props.scanResultWebCam5);
      } else if (props.scanResultWebCam5 != "BookDoc Info Booth") {
        setWrongQr("Salah");
      }
    }
  };

  // Popup Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.numbers);

  return (
    <Container className="container" style={{ width: "40%" }}>
      <div>
        <Button>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Back Button
          </Link>
        </Button>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <Card>
        <h2 className="title">Scan your QR Code here!</h2>
        <CardContent>
          <Row>
            {/* <Col xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField
                label="Enter Text Here"
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                className="btn"
                variant="primary"
                color="primary"
                onClick={() => generateQrCode()}
              >
                Generate
              </Button>
              <br />
              <br />
              <br />
              {imageUrl ? (
                <a href={imageUrl} download>
                  <img src={imageUrl} alt="img" />
                </a>
              ) : null}
            </Col> */}
            {/* <Col xl={4} lg={4} md={6} sm={12} xs={12}>
              <Button
                className="btn"
                variant="danger"
                color="secondary"
                onClick={onScanFile}
              >
                Scan Qr Code
              </Button>
              <QrReader
                ref={qrRef}
                delay={300}
                style={{ width: "100%" }}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
              />
              <h3>Scanned Code:{scanResultFile}</h3>
            </Col> */}
            {/* <Col xl={4} lg={4} md={6} sm={12} xs={12}> */}
            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={
                props.numbers === 1
                  ? handleScanWebCam
                  : props.numbers === 2
                  ? handleScanWebCam2
                  : props.numbers === 3
                  ? handleScanWebCam3
                  : props.numbers === 4
                  ? handleScanWebCam4
                  : props.numbers === 5
                  ? handleScanWebCam5
                  : undefined
              }
            />
            <h3>
              Scan By WebCam Code:{" "}
              {props.numbers === 1
                ? props.scanResultWebCam
                : props.numbers === 2
                ? props.scanResultWebCam2
                : props.numbers === 3
                ? props.scanResultWebCam3
                : props.numbers === 4
                ? props.scanResultWebCam4
                : props.numbers === 5
                ? props.scanResultWebCam5
                : undefined}
            </h3>
            {props.scanResultWebCam ===
              "International Psychology Centre Booth" ||
            props.scanResultWebCam2 ===
              "Dietetics & Nutrition Services Booth" ||
            props.scanResultWebCam3 === "Blood Donation Booth" ||
            props.scanResultWebCam4 === "VR Games Booth" ||
            props.scanResultWebCam5 === "BookDoc Info Booth" ? (
              ""
            ) : (
              <p style={{ color: "red", fontSize: "16px" }}>{wrongQr}</p>
            )}

            {/* </Col> */}
          </Row>
        </CardContent>
      </Card>

      {/* Popup Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {" "}
            {props.numbers === 1
              ? props.scanResultWebCam
              : props.numbers === 2
              ? props.scanResultWebCam2
              : props.numbers === 3
              ? props.scanResultWebCam3
              : props.numbers === 4
              ? props.scanResultWebCam4
              : props.numbers === 5
              ? props.scanResultWebCam5
              : undefined}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for visiting our booth.</Modal.Body>
        <Modal.Footer>
          <Button>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              OK
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Qrcode;
