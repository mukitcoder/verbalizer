import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon icon={faStar} />;
const lessonIcon = <FontAwesomeIcon icon={faPlayCircle} />;
const studentIcon = <FontAwesomeIcon icon={faUsers} />;

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`https://mukitcoder.github.io/jsonapi/fakeDbFour.JSON`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="col-md-6 mt-5 text-center mx-auto">
        <h3 className="fw-bold">Our Courses</h3>
        <h1 className="fw-bold text-primary">Choose Your Language</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 px-4">
        {courses.map((course) => (
          <div key={course.id} className="col shadow">
            <div className="card">
              <img src={course.img} className="card-img-top w-100 mx-auto" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-secondary fw-bolder"><abbr className="text-primary fw-bold">${course.price}</abbr>/Life Time</h5>
                <h4 className="card-title fw-bold">
                {course.title}
                </h4>
                <p className="card-text">
                  {course.description}
                </p>
                <div className="d-flex justify-content-between">
                    <div>
                       {lessonIcon} {course.lessons} Lessons
                    </div>
                    <div>
                      {studentIcon} {course.students} Students
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex justify-content-center"> 
                       <p className="me-2">{course.rating}.0 </p>
                       <small className="text-warning">{star}</small>
                       <small className="text-warning">{star}</small>
                       <small className="text-warning">{star}</small>
                       <small className="text-warning">{star}</small>
                       <small className="text-warning">{star}</small>
                    </div>
                    <div>
                        <button className="btn btn-outline button-style">Enroll Now</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
