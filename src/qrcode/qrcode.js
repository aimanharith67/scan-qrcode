import React, { useState, useRef } from "react";
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
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      props.setScanResultWebCam(result);
      setShow(true);
      console.log("Scan1", props.scanResultWebCam);
    }
  };

  const handleScanWebCam2 = (result) => {
    if (result) {
      props.setScanResultWebCam2(result);
      setShow(true);
      console.log("Scan2:", props.scanResultWebCam2);
    }
  };

  const handleScanWebCam3 = (result) => {
    if (result) {
      props.setScanResultWebCam3(result);
      setShow(true);
      console.log("Scan3", props.scanResultWebCam3);
    }
  };

  // Popup Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.numbers);

  return (
    <Container className="container">
      <div>
        <Button>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Back Button
          </Link>
        </Button>
      </div>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Card>
        <h2 className="title">
          Generate Download & Scan QR Code with React js
        </h2>
        <CardContent>
          <Row>
            <Col xl={4} lg={4} md={6} sm={12} xs={12}>
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
            </Col>
            <Col xl={4} lg={4} md={6} sm={12} xs={12}>
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
            </Col>
            <Col xl={4} lg={4} md={6} sm={12} xs={12}>
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
                  : undefined}
              </h3>
            </Col>
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
              : undefined}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Back Button
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Qrcode;
