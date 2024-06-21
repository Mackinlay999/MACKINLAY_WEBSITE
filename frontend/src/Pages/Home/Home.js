import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home_css from "./Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Lottie from "lottie-react";

import animationData from "../../Assets/customer.json";

import AOS from "aos";
import "aos/dist/aos.css";

import partner from "../../Assets/partner.jpeg";
import digital from "../../Assets/digital.jpeg";
import hr from "../../Assets/hr.jpeg";

import Data from "./Data";

export default function Home() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className={Home_css.main_page}>
        <div className={Home_css.main_page_bg}>
          <Container>
            <Row className="justify-content-center">
              <Col xxl={6}>
                <div className={Home_css.main_page_desc}>
                  <div
                    className={Home_css.main_page_title}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    Welcome to Mackinlay
                  </div>
                  <div
                    className={Home_css.main_page_cnt}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    Your Partner in Digital Innovation
                  </div>
                  <button
                    className={Home_css.main_cntact_us}
                    onClick={navigateToContact}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    Contact Us
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={Home_css.about_us_section}>
          <div
            className={Home_css.about_us_section_title}
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            ABOUT MACKINLAY
          </div>
          <Container>
            <div
              className={Home_css.second_part}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <Row className="align-items-center">
                <Col xl={6} md={12}>
                  <div className={Home_css.about_us}>
                    <div className={Home_css.about_us_one}>
                      <div
                        className={Home_css.about_us_title}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        Your Partner in Digital Innovation
                      </div>
                      <div
                        className={Home_css.about_us_cnt}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        At Mackinlay, we're not just an IT firm; we're
                        visionaries in digital transformation. Since our
                        inception in 2021, we have swiftly become leaders in the
                        Information Technology sector. Specializing in the
                        Banking, Financial Services, and Insurance (BFSI)
                        industries, we expertly navigate this complex domain.
                        Our deep sector knowledge allows us to create bespoke
                        solutions tailored to our clients' unique needs.
                      </div>
                    </div>

                    <div
                      className={Home_css.about_us_two}
                      data-aos="zoom-in-up"
                      data-aos-duration="1500"
                    >
                      <div
                        className={Home_css.about_us_title}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        Embrace Innovation with Mackinlay
                      </div>
                      <div
                        className={Home_css.about_us_cnt}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        Our experienced team excels in both HR Tech and BFSI. We
                        are committed to delivering cutting-edge solutions that
                        enhance efficiency and drive excellence in business
                        operations.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={6} md={12}>
                  <div
                    className={Home_css.about_us_image}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img
                      src={partner}
                      alt="partner"
                      className={Home_css.about_us_image_logo}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className={Home_css.second_part}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <Row className="align-items-center">
                <Col xl={6} md={12}>
                  <div
                    className={Home_css.about_us_image}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img
                      src={digital}
                      alt="digital"
                      className={Home_css.about_us_image_logo}
                    />
                  </div>
                </Col>
                <Col xl={6} md={12}>
                  <div
                    className={Home_css.about_us}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <div className={Home_css.about_us_one}>
                      <div
                        className={Home_css.about_us_title}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        Digital Transformation
                      </div>
                      <div
                        className={Home_css.about_us_cnt}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        In today’s dynamic digital landscape, staying ahead is
                        crucial. At Mackinlay, we offer comprehensive digital
                        transformation services to help businesses adapt and
                        thrive. From strategy development to execution, we
                        ensure a smooth transition to digital platforms,
                        improving customer experience and operational
                        efficiency.
                      </div>
                    </div>

                    <div className={Home_css.about_us_two}>
                      <div
                        className={Home_css.about_us_title}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        Custom Solutions for BFSI
                      </div>
                      <div
                        className={Home_css.about_us_cnt}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        We understand the unique challenges and opportunities
                        within the BFSI sector. Our tailored solutions address
                        specific business needs, including:
                        <ul>
                          <li
                            className={Home_css.about_us_list}
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                          >
                            <span className={Home_css.about_us_bold}>
                              Core Banking Solutions:
                            </span>{" "}
                            Enhance operations with advanced banking software
                            that boosts efficiency and cuts costs.
                          </li>
                          <li
                            className={Home_css.about_us_list}
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                          >
                            <span className={Home_css.about_us_bold}>
                              Risk Management:
                            </span>
                            Implement strong risk management frameworks to
                            protect assets and comply with regulations.
                          </li>
                          <li
                            className={Home_css.about_us_list}
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                          >
                            <span className={Home_css.about_us_bold}>
                              Customer Relationship Management (CRM):{" "}
                            </span>
                            Improve customer interactions with innovative CRM
                            solutions that foster loyalty and retention.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div
              className={Home_css.second_part}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <Row className="align-items-center">
                <Col xl={6} md={12}>
                  <div className={Home_css.about_us}>
                    <div className={Home_css.about_us_two}>
                      <div
                        className={Home_css.about_us_title}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        HR Tech Innovations
                      </div>
                      <div
                        className={Home_css.about_us_cnt}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      >
                        Our expertise extends to transforming human resources
                        through technology. Our HR Tech solutions include:
                        <ul>
                          <li
                            className={Home_css.about_us_list}
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                          >
                            <span className={Home_css.about_us_bold}>
                              Talent Management Systems:
                            </span>{" "}
                            Streamline recruitment, onboarding, and employee
                            development.
                          </li>
                          <li
                            className={Home_css.about_us_list}
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                          >
                            <span className={Home_css.about_us_bold}>
                              Payroll and Benefits Administration:
                            </span>
                            Ensure precise and efficient payroll processing and
                            benefits management.
                          </li>
                          <li
                            className={Home_css.about_us_list}
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                          >
                            <span className={Home_css.about_us_bold}>
                              Employee Engagement Platforms:
                            </span>
                            Create a motivated, productive workforce with
                            interactive and engaging platforms.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xl={6} md={12}>
                  <div
                    className={Home_css.about_us_image}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img
                      src={hr}
                      alt="hr"
                      className={Home_css.about_us_image_logo}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className={Home_css.why_choose_us}>
          <div
            className={Home_css.why_choose_us_title}
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            Why Choose Mackinlay ?
          </div>
          <Container>
            <Row>
              {Data.map((value, index) => (
                <Col xl={3} lg={6} md={6} key={index}>
                  <div className={Home_css.why_choose_cart}>
                    <div className={Home_css.why_choose_logo}>
                      <img
                        src={value.Image}
                        alt=""
                        className={Home_css.why_choose_logo_image}
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                      />
                    </div>
                    <div
                      className={Home_css.why_choose_box_title}
                      data-aos="zoom-in-up"
                      data-aos-duration="1500"
                    >
                      {value.Title}
                    </div>
                    <div
                      className={Home_css.why_choose_box_cnt}
                      data-aos="zoom-in-up"
                      data-aos-duration="1500"
                    >
                      {" "}
                      {value.Content}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className={Home_css.contact_asap}>
          <div
            className={Home_css.contact_asap_heading}
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            How can we help ?
          </div>
          <Container>
            <Row className={`align-items-center ${Home_css.reverse_option}`}>
              <Col xl={6} lg={6} md={6}>
                <div
                  className={Home_css.contact_asap_title}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  Contact us today to learn how we can assist you in navigating
                  the digital world and driving your business forward.
                </div>

                <div
                  className={Home_css.contact_asap_title}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  For more information or to schedule a consultation, please
                  visit our website at{" "}
                  <span className={Home_css.about_us_bold}>
                    {" "}
                    www.mackinlay.in{" "}
                  </span>{" "}
                  or contact our customer service team at{" "}
                  <span className={Home_css.about_us_bold}>
                    contactus@mackinlay.in
                  </span>{" "}
                </div>

                <button
                  className={Home_css.main_cntact_us}
                  onClick={navigateToContact}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  Contact Us
                </button>
              </Col>

              <Col xl={6} lg={6} md={6}>
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className={Home_css.main_cntact_us_ani}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
