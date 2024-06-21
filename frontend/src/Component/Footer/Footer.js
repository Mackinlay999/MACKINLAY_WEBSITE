import React from "react";
import Footer_css from "./Footer.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandFacebook } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    {
      Title: "HOME",
      Link: "/",
    },
    {
      Title: "ABOUT US",
      Link: "/about",
    },
    {
      Title: "DISCOVER",
      Link: "/discover",
    },
    {
      Title: "CAREER",
      Link: "/career",
    },
    {
      Title: "CONTACT",
      Link: "/contact",
    },
  ];

  const SocialIcons = [
    {
      Icon: BsTwitterX,
      Link: "https://x.com/__mackinlay_",
    },
    {
      Icon: TbBrandFacebook,
      Link: "https://www.facebook.com/profile.php?id=61556885114831",
    },
    {
      Icon: AiOutlineLinkedin,
      Link: "https://www.linkedin.com/company/mackinlay/",
    },
    {
      Icon: BsInstagram,
      Link: "https://www.instagram.com/mackinlay_enterprise?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      Icon: FaWhatsapp,
      Link: "https://web.whatsapp.com/send?phone=919655261097",
    },
  ];

  return (
    <div className={Footer_css.footerparent}>
      <div className={Footer_css.headoffice}>
        <Container>
          <Row className="justify-content-between">
            <Col xl={3} lg={3} md={4} sm={6}>
              <div className={Footer_css.headoffice_section}>
                <div className={Footer_css.headoffice_title}>
                  Our Head Office
                </div>
                <div className={Footer_css.headoffice_underline}></div>

                <div className={Footer_css.headoffice_location}>
                  <div className={Footer_css.headoffice_icon}>
                    <ImLocation2
                      className={Footer_css.headoffice_icon_location}
                    />
                  </div>
                  <div className={Footer_css.headoffice_location_content}>
                    2 New Street, Melvelam, TK, Walajapet,
                    <br /> TamilNadu - 632513 <br /> India
                  </div>
                </div>

                <div className={Footer_css.headoffice_contact}>
                  <div className={Footer_css.headoffice_contact_icon}>
                    <FaPhoneVolume
                      className={Footer_css.headoffice_contact_icon_phone}
                    />
                  </div>
                  <div className={Footer_css.headoffice_contact_number}>
                    +91 88966 19811
                  </div>
                </div>

                <div className={Footer_css.headoffice_mail}>
                  <div className={Footer_css.headoffice_mail_icon}>
                    <IoMdMailUnread
                      className={Footer_css.headoffice_contact_mail_box}
                    />
                  </div>
                  <div className={Footer_css.headoffice_contact_mail_id}>
                    contactus@mackinlay.in
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={3} md={3} sm={6}>
              <div className={Footer_css.quick_links}>
                <div className={Footer_css.quick_links_title}>Quick Links</div>
                <div className={Footer_css.quick_links_underline}></div>
                <div className={Footer_css.quick_links_space}>
                  {Links.map((value, index) => (
                    <Link
                      to={value.Link}
                      key={index}
                      className={Footer_css.quick_link_anchor}
                    >
                      <div className={Footer_css.quick_links_data}>
                        <MdOutlineKeyboardArrowRight
                          className={Footer_css.quick_links_data_icon}
                        />
                        <div className={Footer_css.quick_links_data_cnt}>
                          {value.Title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>

            <Col xl={4} lg={4} md={5} sm={12}>
              <div className={Footer_css.newsletter}>
                <div className={Footer_css.newsletter_title}>Newsletter</div>
                <div className={Footer_css.newsletter_underline}></div>

                <div className={Footer_css.newsletter_content}>
                  Mackinlay, established in 2021, is a dynamic IT company with a
                  strong foothold in the HR Tech and BFSI domains. Leveraging
                  two years of expertise, we provide innovative solutions that
                  drive efficiency and excellence in business operations.
                </div>
                <div className={Footer_css.newsletter_social}>
                  {SocialIcons.map((icon, index) => (
                    <div
                      className={Footer_css.newsletter_social_icon}
                      key={index}
                    >
                      <a
                        href={icon.Link}
                        className={Footer_css.newsletter_social_icon_color}
                      >
                        <icon.Icon />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className={Footer_css.footer_underline}></div>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <div className={Footer_css.footer_rights}>
                © Copyright © 2024 | Mackinlay, All Right Reserved.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
