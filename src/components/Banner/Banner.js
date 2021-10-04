import React from "react";
import "./Banner.css";
import bannerImage from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 ps-5 d-flex align-items-center justify-content-center">
            <div className="">
              <h1 className="fw-bold text-primary">Learn New Languages and Move Forward</h1>
              <p className="py-3 text-gray">
                The first step to learning a new language fast is to set goals
                for what you want to achieve. When you think about it, this
                makes a lot of sense. If you don’t set goals, how can you know
                what you want to achieve and measure whether you have achieved
                it?
              </p>
              <button className="btn btn-outline button-style">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-4 ps-5">
              <img className="img-fluid w-75 " src={bannerImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
