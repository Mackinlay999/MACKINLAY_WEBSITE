import React from 'react'
import aboutStyle from "./about.module.css"
import aboutIllustration from "../../Assets/AboutPoster.jpg";
const About = () => {

  return (
    <section className={aboutStyle.aboutMain__Container}>

      <div className={aboutStyle.about_heroSection}>

        <div className={aboutStyle.heroSection__InfoBox}>
          <h1 className={aboutStyle.heroSection__heading}>About Mackinlay</h1>

          <p className={aboutStyle.heroSection__description}>

            <span className={aboutStyle.__description__para}>
              Founded in 2021, Mackinlay stands at the forefront of the IT industry, delivering innovative solutions that transform the BFSI sector. Our specialization ensures a deep understanding of the intricate details, enabling us to offer customized solutions tailored to our clients' unique needs.
            </span>

            <span className={aboutStyle.__description__para}>
              By leveraging our expertise in HR Tech and BFSI, we streamline operations and enhance business performance through cutting-edge solutions. Our dedicated team combines extensive industry knowledge with technical expertise to achieve outstanding results and deliver maximum value to our clients.
            </span >

            <span className={aboutStyle.__description__para}>
              Our commitment to innovation drives us to continually evolve and adapt in response to the ever-changing landscape of the IT and BFSI industries. At Mackinlay, we prioritize building long-term partnerships with our clients, focusing on their success as a measure of our own. Our solutions are designed not only to meet current challenges but also to anticipate future needs, ensuring sustained growth and competitive advantage.
            </span>

            <span className={aboutStyle.__description__para}>
              With a proven track record of delivering high-impact results, Mackinlay is your trusted partner in navigating the complexities of the digital era, transforming challenges into opportunities for success.
            </span>

          </p>
        </div>

        <div className={aboutStyle.heroSection__posterBox}>
          <img src={aboutIllustration} alt="" className={`${aboutStyle.heroSection__poster} `} />
        </div>

      </div>

      <div className={`${aboutStyle.about__missionSection} 	 animate__animated animate__fadeInLeftBig`}>
        <h3 className={aboutStyle.heroSection__Secondaryheading}>Our Mission</h3>
        <p className={aboutStyle.heroSection__description}>
          <span className={aboutStyle.__description__para}>
            At Mackinlay, our mission is to propel digital transformation and achieve business success through pioneering IT solutions. We are dedicated to empowering our clients by harnessing the latest technologies and methodologies, guaranteeing exceptional outcomes and maximum value.
          </span>

          <span className={aboutStyle.__description__para}>
            We believe in a client-centric approach, ensuring that our solutions are tailored to meet the unique needs of each business. By fostering innovation and embracing emerging trends, we help our clients stay ahead in a competitive landscape. Our commitment to excellence and continuous improvement drives us to deliver superior results and sustainable growth for our clients.
          </span>
        </p>
      </div>

    </section>

  )
}

export default About