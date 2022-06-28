import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../dashboard/dashboard.css";
import { useNavigate, Link } from "react-router-dom";

function Dashboard(props) {
  // Popup Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Booths
  const booths = [
    { title: "booth1", description: "booth1", btn: 1 },
    { title: "booth2", description: "booth2", btn: 2 },
    { title: "booth3", description: "booth3", btn: 3 },
  ];
  const navigate = useNavigate();
  //   console.log(booths);

  //   const numberHandler = (id) => {
  //     // e.preventDefault();
  //     props.setNumbers(id);
  //     navigate("/Qrcode");
  //     console.log("number:", props.numbers);
  //   };

  const numberHandler1 = (e) => {
    e.preventDefault();
    props.setNumbers(1);
    navigate("/Qrcode");
    console.log("number:", props.numbers);
  };

  const numberHandler2 = (e) => {
    e.preventDefault();
    props.setNumbers(2);
    navigate("/Qrcode");
    console.log("number:", props.numbers);
  };

  const numberHandler3 = (e) => {
    e.preventDefault();
    props.setNumbers(3);
    navigate("/Qrcode");
    console.log("number:", props.numbers);
  };

  const RewardHandler = () => {
    if (
      props.scanResultWebCam === "booth 1" &&
      props.scanResultWebCam2 === "booth 1" &&
      props.scanResultWebCam3 === "booth 1"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "" &&
      props.scanResultWebCam2 === "booth 1" &&
      props.scanResultWebCam3 === "booth 1"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "booth 1" &&
      props.scanResultWebCam2 === "" &&
      props.scanResultWebCam3 === "booth 1"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "booth 1" &&
      props.scanResultWebCam2 === "booth 1" &&
      props.scanResultWebCam3 === ""
    ) {
      return handleShow();
    }
  };

  useEffect(() => {
    RewardHandler();
    console.log("test");
  }, []);

  return (
    <div>
      <div>
        <h1>Scan the QR and win rewards!</h1>
        <p>
          Step: Scan all the QR code provided by the booth to claim amazing
          rewards from BookDoc!
        </p>
      </div>
      <div className="wrapper">
        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam != "" && props.scanResultWebCam != null
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              Booth 1
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              Introduced with HTML 5, the &lt;details&gt; element made it
              possible to create javascript-free accordions. However, they came
              with a downside, smooth opening and closing animations were not
              possible. Many would just use JS to allow animations, but that
              just defeats the purpose.
              <br />
              <br />
              Thankfully, there <em>is</em> a CSS-only trick to improve the
              element.
            </p>
            {props.scanResultWebCam != "" && props.scanResultWebCam != null ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button
                className="custom-btn"
                // style={{ marginLeft: "25px" }}
                onClick={numberHandler1}
              >
                yes
              </Button>
            )}
          </div>
        </div>

        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam2 != "" &&
                  props.scanResultWebCam2 != null
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              Booth 2
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              Introduced with HTML 5, the &lt;details&gt; element made it
              possible to create javascript-free accordions. However, they came
              with a downside, smooth opening and closing animations were not
              possible. Many would just use JS to allow animations, but that
              just defeats the purpose.
              <br />
              <br />
              Thankfully, there <em>is</em> a CSS-only trick to improve the
              element.
            </p>
            {props.scanResultWebCam2 != "" &&
            props.scanResultWebCam2 != null ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button className="custom-btn" onClick={numberHandler2}>
                yes
              </Button>
            )}
          </div>
        </div>
        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam3 != "" &&
                  props.scanResultWebCam3 != null
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              Booth 3
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              Introduced with HTML 5, the &lt;details&gt; element made it
              possible to create javascript-free accordions. However, they came
              with a downside, smooth opening and closing animations were not
              possible. Many would just use JS to allow animations, but that
              just defeats the purpose.222222222
              <br />
              <br />
              Thankfully, there <em>is</em> a CSS-only trick to improve the
              element.
            </p>
            {props.scanResultWebCam3 != "" &&
            props.scanResultWebCam3 != null ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button className="custom-btn" onClick={numberHandler3}>
                yes
              </Button>
            )}
          </div>
        </div>
      </div>{" "}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Tahniah</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulation</Modal.Body>
        <Modal.Footer>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/"
              onClick={handleClose}
            >
              Claim Reward
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {booths.map((item, i) => (
        <div className="wrapper" key={i}>
          <div className="colI">
            <details>
              <summary
                style={{
                  textDecoration:
                    props.scanResultWebCam !== "" &&
                    props.scanResultWebCam !== null
                      ? "line-through"
                      : "none",
                }}
              >
                {" "}
                {item.title}
                <div className="chevron">
                  <span className="chev"></span>
                </div>
              </summary>
            </details>
            <div className="animate">
              <p className="content">
                {item.description}
                <br />
                <br />
              </p>
              {props.scanResultWebCam !== "" &&
              props.scanResultWebCam !== null ? (
                <h5>Visited</h5>
              ) : (
                <Button
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    numberHandler(item.btn);
                  }}
                >
                  {item.btn}
                </Button>
              )}
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Dashboard;
