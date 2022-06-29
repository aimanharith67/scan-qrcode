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

  const numberHandler4 = (e) => {
    e.preventDefault();
    props.setNumbers(4);
    navigate("/Qrcode");
    console.log("number:", props.numbers);
  };

  const numberHandler5 = (e) => {
    e.preventDefault();
    props.setNumbers(5);
    navigate("/Qrcode");
    console.log("number:", props.numbers);
  };

  const RewardHandler = () => {
    if (
      props.scanResultWebCam === "International Psychology Centre Booth" &&
      props.scanResultWebCam2 === "Dietetics & Nutrition Services Booth" &&
      props.scanResultWebCam3 === "Blood Donation Booth" &&
      props.scanResultWebCam4 === "VR Games Booth" &&
      props.scanResultWebCam5 === "BookDoc Info Booth"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "" &&
      props.scanResultWebCam2 === "Dietetics & Nutrition Services Booth" &&
      props.scanResultWebCam3 === "Blood Donation Booth" &&
      props.scanResultWebCam4 === "VR Games Booth" &&
      props.scanResultWebCam5 === "BookDoc Info Booth"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "International Psychology Centre Booth" &&
      props.scanResultWebCam2 === "" &&
      props.scanResultWebCam3 === "Blood Donation Booth" &&
      props.scanResultWebCam4 === "VR Games Booth" &&
      props.scanResultWebCam5 === "BookDoc Info Booth"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "International Psychology Centre Booth" &&
      props.scanResultWebCam2 === "Dietetics & Nutrition Services Booth" &&
      props.scanResultWebCam3 === "" &&
      props.scanResultWebCam4 === "VR Games Booth" &&
      props.scanResultWebCam5 === "BookDoc Info Booth"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "International Psychology Centre Booth" &&
      props.scanResultWebCam2 === "Dietetics & Nutrition Services Booth" &&
      props.scanResultWebCam3 === "Blood Donation Booth" &&
      props.scanResultWebCam4 === "" &&
      props.scanResultWebCam5 === "BookDoc Info Booth"
    ) {
      return handleShow();
    } else if (
      props.scanResultWebCam === "International Psychology Centre Booth" &&
      props.scanResultWebCam2 === "Dietetics & Nutrition Services Booth" &&
      props.scanResultWebCam3 === "Blood Donation Booth" &&
      props.scanResultWebCam4 === "VR Games Booth" &&
      props.scanResultWebCam5 === ""
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
          Scan the QR code provided by the booth to claim amazing rewards from
          BookDoc!
        </p>
      </div>
      <div className="wrapper">
        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam ===
                  "International Psychology Centre Booth"
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              International Psychology Centre Booth
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              At International Psychology Centre Booth, free services
              consultation includes Adult Counseling, Couple Therapy, Addiction
              Therapy, Divorce Mediation, Corporate Counseling, Sex Therapy,
              Child Counseling, Family Therapy, Business / Life Coaching,
              Educational Therapy, Hypnotherapy, Psycho Nutritional Therapy,
              Health Counseling, Legal, Sports Counseling, Art Therapy, Mental
              Health Counseling and Personal Growth
            </p>
            {props.scanResultWebCam ===
            "International Psychology Centre Booth" ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button
                className="custom-btn"
                // style={{ marginLeft: "25px" }}
                onClick={numberHandler1}
              >
                Scan QR here
              </Button>
            )}
          </div>
        </div>

        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam2 ===
                  "Dietetics & Nutrition Services Booth"
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              Dietetics & Nutrition Services Booth
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              Our dietitians provide personalised, practical advice and supports
              to all in- and out-patients and the community in a professional
              environment. Our competent diet technicians assisted in monitoring
              in-patients’ meals especially those on a therapeutic diet by
              ensuring nutritional therapy is carried out before diet
              intervention by dieticians is required.
            </p>
            {props.scanResultWebCam2 ===
            "Dietetics & Nutrition Services Booth" ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button className="custom-btn" onClick={numberHandler2}>
                Scan QR here
              </Button>
            )}
          </div>
        </div>
        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam3 === "Blood Donation Booth"
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              Blood Donation Booth
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              One blood donation can save as many as three lives. Sustainable
              and quality blood services play a critical role in the health of a
              society and in preparing for, and responding to, disasters. You
              can make a blood donation at any of the 4 bloodbanks booth or at a
              community blood donation drive near you!
            </p>
            {props.scanResultWebCam3 === "Blood Donation Booth" ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button className="custom-btn" onClick={numberHandler3}>
                Scan QR here
              </Button>
            )}
          </div>
        </div>
        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam4 === "VR Games Booth"
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              VR Games Booth
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              Walk wirelessly in an open space, Multiplayer option up to 3
              players, Some experiences include use of VR guns. Choose between
              15 min & 30 min experiences within your time slot.
            </p>
            {props.scanResultWebCam4 === "VR Games Booth" ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button className="custom-btn" onClick={numberHandler4}>
                Scan QR here
              </Button>
            )}
          </div>
        </div>
        <div className="colI">
          <details>
            <summary
              style={{
                textDecoration:
                  props.scanResultWebCam5 === "BookDoc Info Booth"
                    ? "line-through"
                    : "none",
              }}
            >
              {" "}
              BookDoc Info Booth
              <div className="chevron">
                <span className="chev"></span>
              </div>
            </summary>
          </details>
          <div className="animate">
            <p className="content">
              BookDoc, with a presence in 5 countries and 20 cities including
              Malaysia, Singapore, Indonesia, Hong Kong and Thailand, is an
              online platform that operates across the healthcare continuum
              connecting patients to healthcare professionals anytime and
              anywhere, while incentivising all to stay active.
            </p>
            {props.scanResultWebCam5 === "BookDoc Info Booth" ? (
              <h5 className="visit">Visited</h5>
            ) : (
              <Button className="custom-btn" onClick={numberHandler5}>
                Scan QR here
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
          <Modal.Title>Congratulation!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You can head to the reward booth to claim your prize.
        </Modal.Body>
        <Modal.Footer>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/"
              onClick={handleClose}
            >
              OK
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
