import React, { useState } from "react";
import "../style/Home.css"



const Home = () => {
  

  return (
    <div className="homeMain">
      <div className="container homeCenter mt-1">
        <div className="homeinner mt-2 ">
          <div className="homeinnerLeft">LANGUAGE TEACHING CENTER</div>
          <div className="homeinnerRight">
            <button>
              <input type="search" />
              search
            </button>
          </div>
        </div>
        <section className="homeSection mt-2">
          <div className="leftSection">
            <ol>
              <li>
                <a href="">English Courses</a>
              </li>
              <li>
                <a href="">Mathematic Courses</a>
              </li>
              <li>
                {" "}
                <a href="">Spoken Courses</a>
              </li>
              <li>
                <a href="">Hindi Courses</a>
              </li>
              <li>
                <a href="">Science Courses</a>
              </li>
              <li>
                <a href="">English Courses</a>
              </li>
              <li>
                <a href="">Mathematic Courses</a>
              </li>
              <li>
                {" "}
                <a href="">Spoken Courses</a>
              </li>
              <li>
                <a href="">Hindi Courses</a>
              </li>
              <li>
                <a href="">Science Courses</a>
              </li>
            </ol>
          </div>
          <div className="rightSection">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  {/* <img src={firstSlider} class="d-block w-100" alt="..." /> */}
                </div>
                <div class="carousel-item">
                  {/* <img src={firstSlider} class="d-block w-100" alt="..." /> */}
                </div>
                <div class="carousel-item">
                  {/* <img src={firstSlider} class="d-block w-100" alt="..." /> */}
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        {/* <section className="secondHomeSection mt-2">
          {data.map((elem, i) => {
            return <HomeCard data={elem} />;
          })}
        </section> */}

        <section className="thirdHomeSection mt-2">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body">
                    <h5 class="card-title">Welcome to our center</h5>
                    <p class="card-text">
                      How do I decide what to put in a paragraph?
                    </p>
                    <p class="card-text">
                      Paragraphs are the building blocks of papers. Many
                      students define paragraphs in terms of length: a paragraph
                      is a group of at least five sentences, a paragraph is half
                      a page long, etc. In reality, though, the unity and
                      coherence of ideas among sentences is what constitutes a
                      paragraph. A paragraph is defined as “a group of sentences
                      or a single sentence that forms a unit” (Lunsford and
                      Connors 116).{" "}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body">
                    <h5 class="card-title">Teaching Support</h5>
                    <p class="card-text">
                      How do I decide what to put in a paragraph?
                    </p>
                    <p class="card-text">
                      Paragraphs are the building blocks of papers. Many
                      students define paragraphs in terms of length: a paragraph
                      is a group of at least five sentences, a paragraph is half
                      a page long, etc. In reality, though, the unity and
                      coherence of ideas among sentences is what constitutes a
                      paragraph. A paragraph is defined as “a group of sentences
                      or a single sentence that forms a unit” (Lunsford and
                      Connors 116).
                    </p>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body">
                    <h5 class="card-title">Latest News</h5>
                    <marquee
                      behavior="scroll"
                      scrollamount="2"
                      direction="up"
                      color="red"
                    >
                      <ul type="none">
                        <li>
                          {/* <ArrowRightIcon /> */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                        <li>
                          {/* <ArrowRightIcon /> */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                        <li>
                          {/* <ArrowRightIcon /> */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                        <li>
                          {/* <ArrowRightIcon /> */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                        <li>
                          {/* <ArrowRightIcon /> */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                        <li>
                          {/* <ArrowRightIcon /> */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                        <li>
                          {/* <ArrowRightIcon />{" "} */}
                          <a href="">
                            Hindi course available only 2000 per months
                          </a>
                        </li>
                      </ul>
                    </marquee>

                    {/* <Link to="/addUser" class="btn btn-primary">
                      Registration Form
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fourthHomeSection">
          <h2>
            <a href="">Registration here</a>
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Home;
