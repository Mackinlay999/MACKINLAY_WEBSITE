import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact_style from "../Contact/Contact.module.css";
import support from "../../Assets/support.svg";
import mail from "../../Assets/email.svg";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "http://localhost:5995/api/send-email",
          formData
        );

        if (response.status !== 200) {
          throw new Error("Failed to send email");
        }

        console.log("Email sent:", response.data);
        toast.success("Email sent successfully");

        // Clear form data on success
        setFormData({
          product: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to send email");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const Data = [
    { Logo: support, Title: "Support", Details: "+91 88966 19811" },
    { Logo: mail, Title: "Email", Details: "contactus@mackinlay.in" },
  ];

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className={Contact_style.contact_form}>
        <Container className={Contact_style.contact_details_form}>
          <Row className="justify-content-center align-items-center">
            <Col xl={6} lg={6} md={12}>
              <div className={Contact_style.contact_content}>
                <div className={Contact_style.contact_title}>
                  Need Help? <br /> Contact Mackinlay
                </div>
                <div className={Contact_style.contact_content}>
                  Doesn’t matter if you are new to us or already a part of the
                  Mackinlay family, we are here to help. Reach out to us for
                  anything you need and we will do our best to resolve your
                  inquiry.
                </div>
                <div className={Contact_style.contact_details_title}>
                  Contact Us
                </div>
                {Data.map((value, index) => (
                  <div
                    className={Contact_style.contact_details_container}
                    key={index}
                  >
                    <div className={Contact_style.contact_details_logo}>
                      <img
                        src={value.Logo}
                        alt=""
                        className={Contact_style.contact_details_logo_image}
                      />
                    </div>
                    <div className={Contact_style.contact_details_logo_title}>
                      {value.Title}:
                    </div>
                    <div className={Contact_style.contact_details_number}>
                      {value.Details}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xl={3} lg={4} md={12}>
              <form onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className={Contact_style.contact_name}
                />
                {errors.name && (
                  <span className={Contact_style.error}>{errors.name}</span>
                )}
                <br />
                <br />

                <PhoneInput
                  country={'in'}
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="Phone"
                  inputProps={{
                    name: 'phone',
                    required: true,
                  }}
                  containerClass={Contact_style.contact_input_container}
                  inputClass={Contact_style.contact_input}
                />
                {errors.phone && (
                  <span className={Contact_style.error}>{errors.phone}</span>
                )}
                <br />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className={Contact_style.contact_email}
                />
                {errors.email && (
                  <span className={Contact_style.error}>{errors.email}</span>
                )}
                <br />
                <br />
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className={Contact_style.cntctselect}
                >
                  <option value="">Select a product</option>
                  <option
                    value="hrconnectpro"
                    className={Contact_style.cntctselect_drop}
                  >
                    HRConnectPro
                  </option>
                  <option
                    value="connectera"
                    className={Contact_style.cntctselect_drop}
                  >
                    ConnectEra
                  </option>
                  <option
                    value="mediai"
                    className={Contact_style.cntctselect_drop}
                  >
                    MediAI Connect
                  </option>
                  <option
                    value="globalguardian"
                    className={Contact_style.cntctselect_drop}
                  >
                    Global Guardian
                  </option>
                  <option
                    value="WorldSync"
                    className={Contact_style.cntctselect_drop}
                  >
                    WorldSync!
                  </option>
                </select>
                <br />
                <br />

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className={Contact_style.contact_message}
                ></textarea>
                {errors.message && (
                  <span className={Contact_style.error}>{errors.message}</span>
                )}
                <br />
                <br />

                <button
                  type="submit"
                  className={Contact_style.contact_button}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
