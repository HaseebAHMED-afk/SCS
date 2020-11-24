import React from "react";
import '../App.css'

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/img6.jpg" class="d-block w-100" alt="img6" />
          </div>
          <div class="carousel-item">
            <img src="./images/img2.jpg" class="d-block w-100" alt="img2" />
          </div>
          <div class="carousel-item">
            <img src="./images/img3.jpg" class="d-block w-100" alt="img3" />
          </div>
          <div class="carousel-item">
            <img src="./images/img5.jpg" class="d-block w-100" alt="img5" />
          </div>
          <div class="carousel-item">
            <img src="./images/img1.jpg" class="d-block w-100" alt="img1" />
          </div>
        </div>
    
      </div>
      <div className="overview-section">
        <h1>About Us</h1>
        <p>
            Located in the heart of Karachi, Strength Coaching Sytem provides high quality education at relatively low costs. Our excellent faculty uses the techniques and modern teaching method that allows the students to gain the cometitive edge in the educational fields
        </p>
      </div>
      <div className="vision">
      <h1 className="vision-heading">Vision</h1>
      <p className="vision-para" >To provide high quality education at relatively low cost.</p>
      </div>
      <div className="mission">
      <h1 className="mission-heading">Mission</h1>
      <p className="mission-para" >To use modern teaching techniques to deliver excellent course content.</p>
      </div>
    </div>
  );
};

export default Home;
