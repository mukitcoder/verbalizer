import React from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarker,
    faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const map = <FontAwesomeIcon icon={faMapMarker} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;

const Contact = () => {
  return (
    <div>
      <div className="row">
        <div className="wrapper">
          <div className="overlay">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-9">
                <div className="contact-us text-center">
                  <h3 className="contact-us-text text-white">Contact Us</h3>
                  <p className="mb-5 w-50 mx-auto contact-us-text text-white">
                  Just send us your questions or concerns by starting a new case and we will give you the help you need.
                  </p>
                  <div className="row text-white">
                    <div className="col-md-6">
                      <div className="mt-5 text-center px-3">
                        <div className="d-flex flex-row align-items-center">
                          {" "}
                          <span className="icons text-danger">
                            {map}
                          </span>
                          <div className="address text-left">
                            {" "}
                            <span>Address</span>
                            <p>461, Sugar camp, San jose, California, USA</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mt-3">
                          {" "}
                          <span className="icons text-danger">
                            {phoneIcon}
                          </span>
                          <div className="address text-left">
                            {" "}
                            <span>Phone</span>
                            <p>501 205 2929</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mt-3">
                          {" "}
                          <span className="icons text-danger">
                            {email}
                          </span>
                          <div className="address text-left">
                            {" "}
                            <span>Email</span>
                            <p>contact@bbbootstrap.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-center px-1">
                        <div className="forms p-4 py-5 bg-white">
                          <h5>Send Message</h5>
                          <div className="mt-4 inputs">
                            {" "}
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />{" "}
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />{" "}
                            <textarea
                              className="form-control"
                              placeholder="Type your message"
                            ></textarea>{" "}
                          </div>
                          <div className="button mt-4 text-left">
                            {" "}
                            <button className="btn btn-dark">Send</button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
