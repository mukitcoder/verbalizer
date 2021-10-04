import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Home.css";

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
          <div key={course.id} className="col">
            <div className="card">
              <img src={course.img} className="card-img-top w-100 mx-auto" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-secondary fw-bolder"><abbr className="text-primary fw-bold">${course.price}</abbr>/Life Time</h5>
                <h5 className="card-title">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
