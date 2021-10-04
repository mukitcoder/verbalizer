import React from "react";
import "./AboutUs.css";
import aboutImage from "../../images/aboutimage1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faLaptop,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from "react-bootstrap";

const studentIcon = <FontAwesomeIcon icon={faUsers} />;
const book = <FontAwesomeIcon icon={faBookOpen} />;
const laptop = <FontAwesomeIcon icon={faLaptop} />;

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div>
            <img className="img-fluid" src={aboutImage} alt="" />
          </div>
        </div>
        <div className="col-md-7 my-auto">
          <h1>Know About Best Online Learning Platform With Verbalize</h1>
          <p>
            When you think about it, this makes a lot of sense. If you don’t set
            goals, how can you know what you want to achieve and measure whether
            you have achieved it?
          </p>

          <div className="row">
            <div className="col-md-6 fs-5">
              <div className="d-grid p-2">
                <div className="d-flex">
                  <p className="me-4 text-success"> {laptop} </p>{" "}
                  <p>Online Tutoring</p>
                </div>
                <div className="d-flex">
                  <p className="me-4 text-warning"> {book} </p>{" "}
                  <p>50+ Courses</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 fs-5">
              <div className="d-grid p-2">
                <div className="d-flex">
                  <p className="me-4 text-info"> {studentIcon} </p>{" "}
                  <p>Lifetime Access</p>
                </div>
                <div className="d-flex">
                  <p className="me-4 text-primary"> {studentIcon} </p>{" "}
                  <p>Activate Learning</p>
                </div>
              </div>
            </div>
            <h4>Students Passed: 85%</h4>
            <ProgressBar animated now={85} />
          </div>
        </div>
      </div>

      <div className="row my-4 about-style">
        <div className="col-md-6 mt-4 mx-auto text-center text-white">
          <h1 className="px-4 fw-bold">Our story</h1>
          <p className="mt-4">
            Varbalizer was founded by Daphne Koller and Andrew Ng in 2012 with a
            vision of providing life-transforming learning experiences to
            learners around the world. Today, Varbalizer is a global online
            learning platform that offers anyone, anywhere, access to online
            courses and degrees from leading universities and companies.
            Varbalizer received B Corp certification in February 2021, which means
            that we have a legal duty not only to our shareholders, but to also
            make a positive impact on society more broadly, as we continue our
            efforts to reduce barriers to world-class education for all. 82
            million learners, 100+ Fortune 500 companies, and more than 6,000
            campuses, businesses, and governments come to Varbalizer to access
            world-class learning—anytime, anywhere.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
