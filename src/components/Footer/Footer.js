import React from "react";
import "./Footer.css";
import footerLogo from "../../images/footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const insta = <FontAwesomeIcon icon={faInstagram} />;
const fb = <FontAwesomeIcon icon={faFacebook} />;
const tweet = <FontAwesomeIcon icon={faTwitter} />;
const yt = <FontAwesomeIcon icon={faYoutube} />;

const Footer = () => {
  return (
    <div className="footer-section text-white text-center mt-2">
      <div className="row">
        <div className="col-md-3">
          <div className="p-4">
            <img className="img-fluid w-75 my-3" src={footerLogo} alt="" />
            <p>
              If you don’t set goals, how can you know what you want to achieve
              and measure whether you have achieved it?
            </p>
          </div>
          <div className="ms-3">
            <a className="fs-2 me-4" href="#">
              {fb}
            </a>
            <a className="fs-2 me-4" href="#">
              {insta}
            </a>
            <a className="fs-2 me-4" href="#">
              {tweet}
            </a>
            <a className="fs-2 me-4" href="#">
              {yt}
            </a>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <h5>Quick Links</h5>
          <hr />
          <ul className="footer-list text-center pe-4">
            <li>About Us</li>
            <li className="py-3">Teacher</li>
            <li className="">Pricing</li>
            <li className="py-3">Courses</li>
            <li className="">Contact</li>
          </ul>
        </div>
        <div className="col-md-3 mt-5">
          <h5>Useful Links</h5>
          <hr />
          <ul className="footer-list text-center pe-4">
            <li>Privacy policy</li>
            <li className="py-3">Terms and Conditions</li>
            <li className="">Disclaimer</li>
            <li className="py-3">Support</li>
            <li className="">FQA</li>
          </ul>
        </div>
        <div className="col-md-3 mt-5">
          <h5 className="mb-5">Stay Connected</h5>
          <hr />
          <div class="input-group mb-3 mt-5 w-75 mx-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="btn btn-outline button-style" id="basic-addon2">
              Send
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
