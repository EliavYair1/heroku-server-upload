import React from 'react';
import '../components/css components/about.css';
import Footer from './footer';
import team from '../services/theTeam';
import logo from '../logo/new logo revised/HD file.png';
const About = () => {
  const teamMate = team();
  return (
    <>
      <div className="container-fluid aboutContainer ">
        <h1 className="about-title text-center display-3 pt-5">About Us</h1>
        <br />
        <div className="row ">
          <div className="col-12 text-center d-flex flex-column align-items-center ">
            {teamMate.map((user) => {
              return (
                <div className="container" key={user.id}>
                  <div className="row d-flex justify-content-center ">
                    <div
                      className="col-9 d-flex justify-content-around text-light mt-5  flex-lg-row flex-md-column  align-items-md-center
                     align-items-sm-center
                      flex-sm-column  bg-dark main-team-container"
                    >
                      <div className="col-11 col-lg-8 col-md-8 col-sm-8 mt-4 inner-team-container">
                        <h2 className="">
                          {user.firstName} &nbsp;
                          {user.lastName}
                        </h2>
                        <p className="title ">{user.title}</p>
                        <p className="">{user.city}</p>
                        <p className="">{user.age}</p>
                        <div className="team-icon-row">
                          <a href={`mailto:${user.email}`}>
                            <i className="bi bi-envelope text-light  m-2" />
                          </a>
                          <a href={user.gitHub} target="blank">
                            <i className="bi bi-github m-2" />
                          </a>
                          <a href={user.linkedin} target="blank">
                            <i className="bi bi-linkedin m-2" />
                          </a>
                          <a href={user.facebook} target="blank">
                            <i className="bi bi-facebook m-2" />
                          </a>
                        </div>
                      </div>
                      <div className="col-4 col-md-8 col-sm-8 text-light p-3    ">
                        <img
                          className="img-fluid aboutUsImage"
                          src={user.img}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <div className="upper container mt-5  ">
          <div className="vision bg-image ">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-12">
                  <div className="m-5 p-5  text-center">
                    <h2 className=" about-text-stroke about-vision about-text-stroke  mt-3 d-sm-none d-xs-none  d-md-none d-xs-none d-lg-block ">
                      Level-Up Gaming Vision
                    </h2>
                    <h3 className=" about-text-stroke about-vision  about-text-stroke mt-3 d-sm-none d-xs-none  d-lg-block d-md-none">
                      Were In A Constant Persuit To Provide A Different Online
                      Gaming Experience...
                    </h3>
                    <div className="col-12 vision-list">
                      <ul className=" mt-3 list-unstyled ">
                        <li>
                          <p className="  mt-2">
                            Focus Almost Exclusively On Games From The 4 Main
                            Gaming Platforms
                          </p>
                        </li>
                        <li>
                          <p className="">
                            Deliver An Additional Value With Events For Our
                            Premium Customers
                          </p>
                        </li>
                        <li>
                          <p className="">
                            Create A Unique And Beautiful Online Store - Mission
                            Accomplished 😉
                          </p>
                        </li>
                        <li>
                          <p className="">
                            Bring You The Best Possible Prices On The Market
                          </p>
                        </li>
                        <li
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-duration="2500"
                          data-aos-easing="ease-in-sine"
                        >
                          <p className="">
                            Be Attentive To Our Customers Requests
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-around d-sm-none  d-md-none d-xs-none d-lg-flex d-xl-flex">
                      <img src={logo} className="vision-logo " alt="" />
                      <img src={logo} className="vision-logo " alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="development container-fluid mt-5">
          <h1 className="text-center about-title mb-5 display-5 text-decoration-underline">
            Tools And Packages Used For Development
          </h1>
          <div className="row text-left text-md-center text-sm-center  ">
            <div className="col-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
              <h1 className="about-title text-decoration-underline">
                Front-End
              </h1>
              <ul className="text-white d-flex flex-column justify-content-between list-unstyled">
                <li className="mt-4 h4"> Developed With React</li>
                <li className="mt-4 h4">React - Icons</li>
                <li className="mt-4 h4">React - Toastify</li>
                <li className="mt-4 h4">React Router Dom</li>
                <li className="mt-4 h4">React - Redux</li>
                <li className="mt-4 h4">Redux</li>
                <li className="mt-4 h4">Axios</li>
                <li className="mt-4 h4">Bootstrap - 5 </li>
                <li className="mt-4 h4">Bootstrap Icons</li>
                <li className="mt-4 h4">Framer Motion</li>
                <li className="mt-4 h4">Aos - Animation</li>
                <li className="mt-4 h4">Joi</li>
                <li className="mt-4 h4">Jwt-Decode</li>
                <li className="mt-4 h4">Simple React Lightbox</li>
              </ul>
            </div>
            <div className="col-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h1 className="about-title text-decoration-underline">
                Back-End
              </h1>
              <ul className="text-white d-flex flex-column  list-unstyled">
                <li className="mt-4 h4">Mongoose</li>
                <li className="mt-4 h4">Express</li>
                <li className="mt-4 h4">Config</li>
                <li className="mt-4 h4">Cors</li>
                <li className="mt-4 h4">Nodmon</li>
                <li className="mt-4 h4">Json Web Token</li>
                <li className="mt-4 h4">Lodash</li>
                <li className="mt-4 h4">Morgan</li>
                <li className="mt-4 h4">Bcrypt</li>
                <li className="mt-4 h4">Joi</li>
                <li className="mt-4 h4">Mongodb</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default About;
