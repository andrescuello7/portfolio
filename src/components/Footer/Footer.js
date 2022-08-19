import "./Footer.css";
import { useState } from "react"
import axios from "axios";
import { Form, Modal, Button, Alert } from "react-bootstrap";

const Footer = () => {
  //States
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [alert, setAlert] = useState(false);
  const [alertTrue, setAlertTrue] = useState(false);
  const [dataInputConsults, setDataInputConsults] = useState({});


  //Funcion of method Post of consults
  const ConsultsOfUser = async () => {
    try {
      await axios.post("https://server-gmail.herokuapp.com/api/consult", dataInputConsults);
      setAlertTrue(true)
    } catch (error) {
      console.log(error);
      setAlert(true)
    }
  };

  //Change the text in form
  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...dataInputConsults, [name]: value };
    setDataInputConsults(changedInput);
  };
  return (
    <div>
      <div>
        <div>
          <footer>
            <div className="main-content ">
              <div className="left box m-4">
                <h2>About us</h2>
                <div className="content">
                  <p>
                    Hello, I am a Full Stack Developer, I have been a Developer since April 2020, I have my Rolling Code School studies, they taught me the basics for development, today I worked in Silentium Apps as a Mobile developer and in Rolling Code as a mentor and teacher in web and backend development..
                  </p>
                  <div className="social d-flex justify-content-around">
                    <a href="#">
                      <span className="fab fa-facebook-f"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-instagram"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-youtube"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="right box m-4">
                <h2>Contact Us</h2>
                <div className="content">
                  <form className="">
                    <div className="email">
                      <div className="msg">
                        <div className="text">Email</div>
                        <input
                          name="email" type="email" onChange={HandleChange}
                          required
                        />
                      </div>
                      <div className="msg">
                        <div className="text">Message</div>
                        <textarea
                          name="description" as="textarea" onChange={HandleChange}
                          id=""
                          cols="22"
                          rows="2"
                          required
                        ></textarea>
                      </div>
                      <div className="mt-4">
                        <Button className="btn btn-primary w-100" onClick={ConsultsOfUser}>
                          Send message
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="center box m-4">
                <h2>Address</h2>
                <div className="mt-2">
                  <div className="place">
                    <span className="m-2 fas fa-map-marker-alt button-map"></span>
                    <span className="text">San Miguel de Tucuman, Argentina</span>
                  </div>
                  <div className="phone">
                    <span className="m-2 fas fa-phone-alt button-map"></span>
                    <span className="text">+ 549 (381) 5615474</span>
                  </div>
                  <div className="email">
                    <span className="m-2 fas fa-envelope button-map"></span>
                    <span className="text">andrescuellotrabajo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div>
        <div className="footer">
          <div className="footerInterno">
            <p className="text-center mt-2">
              &copy;{new Date().getFullYear()} Todos los derechos reservados |{" "}
              <b className="text-primary">All right reserved</b> | Terms Of
              Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
