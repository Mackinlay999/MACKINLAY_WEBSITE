import React, { useEffect, useState } from "react";
import CareerStyle from "./Career.module.css";
import axios from "axios";
import { Card, Modal, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
import LogoLoader from "../../Component/Logo_Loader/LogoLoader";
import culture from '../../Assets/culture.jpg';
import commitment from '../../Assets/commitment.jpg'
import globalTeam from '../../Assets/globalteam.jpg'
import profDev from '../../Assets/proffDev.jpg'
import socialResp from '../../Assets/soacialResp.jpg'

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Isloading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    appliedJob: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  useEffect(() => {
    setLoading(true)
    axios
      // .get("http://localhost:5995/api/get-jobs")
      .get("https://mackinley-officialweb.onrender.com/api/get-jobs")
      .then((response) => {
        setLoading(false)
        setJobs(response.data);
      })
      .catch((error) => {
        setLoading(false)
        console.error("There was an error fetching the job data!", error);
      });
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const handleJobModalClose = () => {
    setShowJobModal(false);
    setSelectedJob(null);
  };

  const handleApplyClick = (jobTitle) => {
    setFormData({ ...formData, appliedJob: jobTitle });
    setShowJobModal(false);
    setShowApplyModal(true);
  };

  const handleApplyModalClose = () => {
    setShowApplyModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      appliedJob: "",
    });
    setFormErrors({
      name: "",
      email: "",
      phone: "",
      resume: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
    setFormErrors({ ...formErrors, resume: "" });
  };

  const validateForm = () => {
    const { name, email, phone, resume } = formData;
    if (!name || !email || !phone || !resume) {
      toast.error("Please fill out all fields.");
      setIsSubmitting(false);
      return false;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number with country code.");
      setIsSubmitting(false);
      return false;
    }
    return true;
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Disable the submit button
    setIsSubmitting(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("appliedJob", formData.appliedJob);

    try {
      const response = await axios.post(
        "http://localhost:5995/api/apply-job",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted:", response.data);
      toast.success("Job Applied Successfully");
      handleApplyModalClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={CareerStyle.__careerPage}>
      {/* <div>
        <Toaster />
      </div> */}

      <h2 className={CareerStyle.__headerText} data-aos="fade-right" data-aos-duration="1000">Our Company Culture</h2>
      <div className={CareerStyle.__section} data-aos="fade-up" data-aos-duration="1000">
        <div>
          <p className={CareerStyle.__headerDesc}>
            <strong>Welcome to Mackinlay:</strong> Fostering Excellence, Sustainability, and Inclusion
          </p>
          <p className={CareerStyle.__headerDesc}>
            At Mackinlay, fostering a positive and inclusive culture is not just a policy but the very foundation of our success. We believe that kindness, respect, and flexibility are essential values that shape our identity and drive our operations. By prioritizing these principles, we create an environment where every individual feels valued and empowered to contribute their best. Our commitment to inclusivity ensures diverse perspectives are not only welcomed but celebrated, enhancing creativity and innovation. This nurturing atmosphere promotes collaboration, personal growth, and a sense of belonging, ultimately fueling our collective achievements and strengthening our community.
          </p>
          <p className={CareerStyle.__headerDesc}>
            <strong> Our vision: </strong> is to become the industry's benchmark for trust and innovation, embodying an unwavering commitment to excellence, sustainability, and societal well-being. We aim to set new standards in quality and reliability, earning the confidence of our stakeholders through transparent practices and cutting-edge solutions. Our dedication to sustainability drives us to pioneer eco-friendly initiatives, reducing our environmental footprint while promoting renewable resources and green technologies. By fostering a culture of integrity and social responsibility, we strive to make a meaningful and positive impact on communities, ensuring that our growth and success contribute to a better, more equitable world for future generations.
          </p>
        </div>
        <img className={CareerStyle.__cultureImg} src={culture} alt="" />
      </div>

      <p className={CareerStyle.__careerDesc} data-aos="fade-up" data-aos-duration="1000">
        <h5>Core Values: </h5>
        <ol>
          <li>
            <span>Kindness and Respect:  </span>
            Every member of our team is valued for their unique contributions, fostering an environment where everyone feels supported and appreciated.</li>
          <li>
            <span>Innovation:  </span>
            We encourage creative thinking and innovative solutions, pushing boundaries to redefine industry standards.</li>
          <li>
            <span>Customer-Centricity:  </span>
            Our commitment to exceeding customer expectations drives everything we do, delivering exceptional value with every interaction.</li>
          <li>
            <span>Collaboration:  </span>
            Teamwork is key to our success, with diverse perspectives welcomed and encouraged to drive innovation and excellence.</li>
          <li>
            <span>Sustainability:  </span>
            Our operations are driven by eco-friendly practices and a commitment to reducing our environmental footprint.</li>
          <li>
            <span>Diversity and Inclusion:  </span>
            Embracing cultural diversity, we promote equal opportunities and a culture of inclusivity.</li>
        </ol>
      </p>

      <p className={CareerStyle.__careerDesc} data-aos="fade-up" data-aos-duration="1000">
        <h5>Living Our Values: </h5>
        <ul>
          <li>
            <span>Kindness and Respect: </span>
            We uphold fair treatment policies, maintain a zero-tolerance approach to discrimination, and implement regular feedback and recognition programs.</li>
          <li>
            <span>Innovation: </span>
            We provide platforms for idea-sharing, innovation labs, and regular hackathons to stimulate creative solutions.</li>
          <li>
            <span>Customer-Centricity: </span>
            Our team receives regular training on customer service excellence, supported by robust feedback loops for continuous improvement.</li>
          <li>
            <span>Collaboration: </span>
            Our workspaces and digital tools foster teamwork, with cross-departmental meetings and team-building activities enhancing cooperation.</li>
          <li>
            <span>Sustainability: </span>
            We practice green office protocols, run recycling programs, implement energy-efficient systems, and support our tree-planting initiative.</li>
          <li>
            <span>Diversity and Inclusion: </span>
            Our inclusive hiring practices, employee resource groups, and cultural awareness training ensure a welcoming environment for all.</li>
        </ul>
      </p>

      <p className={CareerStyle.__careerDesc} data-aos="fade-up" data-aos-duration="1000">
        <h5>Recruitment and Retention: </h5>
        <ul>
          <li>
            <span>Stringent Recruiting Policies: </span>
            Our multi-stage interview process involves diverse panels to ensure a comprehensive evaluation.</li>
          <li>
            <span>Cultural Fit: </span>
            Assessing cultural fit is a core component of our hiring process.</li>
          <li>
            <span>Retention Strategies: </span>
            We offer competitive benefits, continuous professional development, and clear career progression opportunities.</li>
        </ul>
      </p>

      <p className={CareerStyle.__careerDesc} data-aos="fade-up" data-aos-duration="1000">
        <h5>Our Workspaces: </h5>
        <ul>
          <li>
            <span>Innovative Workspace: </span>
            Our open, collaborative spaces with modern amenities inspire creativity and interaction.</li>
          <li>
            <span>Remote Opportunities: </span>
            We embrace flexible work arrangements to enhance work-life balance.</li>
          <li>
            <span>Global Presence: </span>
            We expand our inclusive culture globally, with branches in the UK, Netherlands, and Singapore.</li>
        </ul>
      </p>

      <div data-aos="fade-right">
        <p className={`${CareerStyle.__careerDesc} ${CareerStyle.__section}`}>
          <img className={CareerStyle.__corporateImg} src={socialResp} alt="" />
          <div>
            <span>Corporate Social Responsibility: </span>
            We are deeply committed to giving back to the community through a multifaceted approach that includes community engagement, volunteering programs, charity events, and strategic partnerships with local organizations. Our dedication to social responsibility is evident in our active participation and organization of various initiatives designed to support and uplift our community. This commitment extends to our sustainability practices, where we continually seek ways to positively impact the environment. One such initiative is our tree-planting program, which not only contributes to environmental conservation but also fosters a culture of sustainability within our organization. By integrating these efforts, we strive to create a positive and lasting impact, demonstrating our dedication to both social and environmental stewardship.
          </div>
        </p>

        <p className={`${CareerStyle.__careerDesc} ${CareerStyle.__section}`}>
          <div>
            <span>Professional Development: </span>
            At our company, we are dedicated to fostering continuous learning and career growth for all our employees. We offer robust mentorship programs that pair employees with experienced professionals to guide and support their career development. Additionally, we host a variety of workshops designed to enhance skills and knowledge in key areas relevant to our industry. To further support self-directed learning, we provide access to a wide range of online courses, enabling employees to learn at their own pace and on their own schedule. Our commitment to professional growth is also reflected in the clear career paths we have established, which outline the steps and milestones needed for advancement within the company. Regular performance reviews are conducted to provide constructive feedback, recognize achievements, and identify areas for improvement, ensuring that every employee has the opportunity to reach their full potential.
          </div>
          <img className={CareerStyle.__profDevImg} src={profDev} alt="" />
        </p>
      </div>

      <div data-aos="fade-left">
        <p className={`${CareerStyle.__careerDesc} ${CareerStyle.__section}`}>
          <img className={CareerStyle.__globalTeamImg} src={globalTeam} alt="" />
          <div>
            <span>Join Our Global Team: </span>
            If you're seeking a workplace where kindness, respect, flexibility, and cultural diversity are more than just words, Mackinlay welcomes you with open arms. At Mackinlay, we strive to create an inclusive environment that truly embraces and celebrates the unique contributions of every team member. We understand that a supportive and adaptable work culture is essential for fostering innovation and personal growth. Our commitment to cultural diversity ensures that you will be part of a global community where your individuality is not only acknowledged but also valued. Join us at Mackinlay and be part of a forward-thinking organization that prioritizes your development and success on a global scale.
          </div>
        </p>

        <p className={CareerStyle.__careerDesc}>
          <span>Career Opportunities: </span>
          Explore our current job openings and join our innovative and dynamic team, shaping the future of our industry. Visit our Career Page or contact us at <em>careers@mackinlay.in.</em>
        </p>

        <p className={`${CareerStyle.__careerDesc} ${CareerStyle.__section}`}>
          <div>
            <span>Commitment to Sustainability: </span>
            We are proud to announce our tree-planting initiative, a testament to our unwavering commitment to sustainability and environmental stewardship. This initiative is more than just a project; it is a core part of our mission to foster a healthier planet and a brighter future. By planting trees, we aim to combat climate change, enhance biodiversity, and improve air quality, making a tangible difference in the communities we serve. We invite you to join us in this important endeavor, contributing to a greener world while we continue to pursue excellence in every facet of our business. Together, we can create a lasting positive impact on our environment and set a standard for corporate responsibility.
          </div>
          <img className={CareerStyle.__commitmentImg} src={commitment} alt="" />
        </p>
      </div>

      {
        Isloading && <LogoLoader />
      }
      <div className={CareerStyle.career_container}>
        <h5>Explore job opportunities :</h5>
        <div className="container">
          <div className="row" data-aos="zoom-out-up">
            {jobs.map((job) => (
              <div key={job._id} className="col-md-4 mb-3">
                <Card onClick={() => handleJobClick(job)} className={CareerStyle.card}>
                  <Card.Body>
                    <Card.Header>
                      <img
                        src={job.imageUrl}
                        alt="network-error"
                        className={CareerStyle.headerImage}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {job.jobTitle}
                    </Card.Header>
                    <Card.Text>
                      Location: {job.location}
                      <br />
                      Job Type: {job.jobType}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {selectedJob && (
          <Modal show={showJobModal} onHide={handleJobModalClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedJob.jobTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedJob.imageUrl}
                alt="network-error"
                style={{ width: "100%", height: "60vh", marginBottom: "10px" }}
                className={CareerStyle.modalImage}
              />
              <Card.Text>
                <strong>Company Overview:</strong> {selectedJob.companyOverview}
              </Card.Text>
              <Card.Text>
                <strong>Position Overview:</strong>{" "}
                {selectedJob.positionOverview}
              </Card.Text>
              <Card.Text>
                <strong>Key Responsibilities:</strong>
                <ul>
                  {selectedJob.keyResponsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Qualifications:</strong>
                <ul>
                  {selectedJob.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>What We Offer:</strong>
                <ul>
                  {selectedJob.whatWeOffer.map((offer, index) => (
                    <li key={index}>{offer}</li>
                  ))}
                </ul>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleApplyClick(selectedJob.jobTitle)}
                style={{ float: "right" }}
              >
                Apply for this job
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleJobModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Modal show={showApplyModal} onHide={handleApplyModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for {formData.appliedJob}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPhone" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  country={'in'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formResume" className="mt-3">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.resume}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formAppliedJob" className="mt-3">
                <Form.Label>Applied Job</Form.Label>
                <Form.Control
                  type="text"
                  name="appliedJob"
                  value={formData.appliedJob}
                  readOnly
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Career;
