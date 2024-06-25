import React, { useContext } from 'react'
import discover from './Discover.module.css'
import hrconnectpro from '../../Assets/hrconnectpro.jpg';
import connectera from '../../Assets/connect.jpg';
import mediAI from '../../Assets/mediAI.png';
import globalGuardian from '../../Assets/globalguardian.png';
import worldsync from '../../Assets/worldsync.jpeg'
import { FaArrowRightLong } from "react-icons/fa6";
import { bucket } from './ProductData';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from './ServicesCard'
import serviceitems from '../../Data/ServicePageData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Discover = () => {
  const navigate = useNavigate()
  const [data] = useContext(bucket)
  const ServiceItems = [];
  for (let i = 0; i < serviceitems.length; i += 4) {
    ServiceItems.push(serviceitems.slice(i, i + 4));
  }
  const handleNavigate = () => {
    navigate('/ask-demo')
  }

  return (
    <div className={discover.__discoverPage}>
      <header className={discover.__header}>
        <h2 className={discover.__headerText} data-aos="fade-right" data-aos-duration="1000">Dicover Mackinlay</h2>
        <p className={discover.__headerDesc} data-aos="fade-up" data-aos-duration="1000">
          Discover a world of innovation with <strong>HRConnect Pro</strong>, <strong>MediAI Connect</strong>, <strong>ConnectEra</strong>, <strong>Global Guardian</strong> and <strong> WorldSync</strong> – Your gateway to cutting-edge solutions! HR Connect Pro revolutionizes human resource management with advanced tools for streamlined processes and enhanced employee engagement. MediAI Connect harnesses the power of artificial intelligence to transform healthcare delivery, ensuring precise diagnostics and personalized treatments. Connect-Era offers state-of-the-art connectivity solutions, bridging gaps and enabling seamless communication across platforms. Global Guardian provides top-notch security measures, safeguarding your digital and physical assets with unparalleled reliability. WorldSync ensures global synchronization of data and operations, optimizing efficiency and productivity. Together, these platforms form a one-stop shop for all your innovative needs, paving the way for a brighter, more connected future. Explore now and transform your business with these cutting-edge solutions!
          <p className={discover.__headerDesc}>A one-stop shop for innovation! -solutions for every need. Explore now!</p>
        </p>
      </header>

      <section className={`${discover.__innovations} ${discover.__header}`}>
        <h2 className={discover.__headerText} data-aos="fade-right" data-aos-duration="1000">Our Innovations:</h2>
        <ul data-aos="fade-up">
          <li className={`${discover.__items} ${discover.__completed}`} onClick={() => navigate('/discover/HRConnectPro')}>HRConnect Pro</li>
          <li className={`${discover.__items} ${discover.__upcoming}`}>MediAI Connect</li>
          <li className={`${discover.__items} ${discover.__upcoming}`}>ConnectEra</li>
          <li className={`${discover.__items} ${discover.__upcoming}`}>Global Guardian</li>
          <li className={`${discover.__items} ${discover.__upcoming}`}>WorldSync</li>
        </ul>
      </section>

      <div data-aos="fade-left" data-aos-duration="1000">
        <Swiper
          style={{ padding: "2em 0" }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ type: 'fraction' }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            {data?.filter(item => item.cat === 'HRConnectPro')
              .map((item, id) => {
                return (
                  <div key={id}>
                    <div className={discover.__card} >
                      <img className={discover.__cardImg} src={hrconnectpro} alt="" />
                      <h4 className={discover.__cardTitle}>{item.title.slice(0, 14)} 🧑‍💻</h4>
                      <p className={discover.__cardDescription}>Your comprehensive solution for transforming HR management</p>
                      <Link to={`/discover/${item.cat}`}>
                        <button className={discover.__cardBtn}>
                          <span className={discover.__learnBtn}>Learn More</span>
                          <FaArrowRightLong className={discover.__arrowIcon} />
                        </button>
                      </Link>
                      <button className={discover.__demoBtn} onClick={handleNavigate}>
                        Ask for a demo
                      </button>
                    </div>
                  </div>
                )
              })}
          </SwiperSlide>
          <SwiperSlide>
            {data?.filter(item => item.cat === 'MediAI')
              .map((item, id) => {
                return (
                  <div key={id}>
                    <div className={discover.__card} >
                      <img className={discover.__cardImg} src={mediAI} alt="" />
                      <h4 className={discover.__cardTitle}>{item.title.slice(0, 14)} 🩺</h4>
                      <p className={discover.__cardDescription}>An innovative healthcare platform designed to transform the way medical services are delivered.</p>
                      <Link to={`/discover/${item.cat}`}>
                        <button className={discover.__cardBtn}>
                          <span className={discover.__learnBtn}>Learn More</span>
                          <FaArrowRightLong className={discover.__arrowIcon} />
                        </button>
                      </Link>
                      <button className={discover.__demoBtn} onClick={handleNavigate}>
                        Ask for a demo
                      </button>
                    </div>
                  </div>
                )
              })}
          </SwiperSlide>
          <SwiperSlide>
            {data?.filter(item => item.cat === 'ConnectEra')
              .map((item, id) => {
                return (
                  <div key={id}>
                    <div className={discover.__card} >
                      <img className={discover.__cardImg} src={connectera} alt="" />
                      <h4 className={discover.__cardTitle}>{item.cat} 💕</h4>
                      <p className={discover.__cardDescription}>A global community where meaningful relationships flourish.</p>
                      <Link to={`/discover/${item.cat}`}>
                        <button className={discover.__cardBtn}>
                          <span className={discover.__learnBtn}>Learn More</span>
                          <FaArrowRightLong className={discover.__arrowIcon} />
                        </button>
                      </Link>
                      <button className={discover.__demoBtn} onClick={handleNavigate}>
                        Ask for a demo
                      </button>
                    </div>
                  </div>
                )
              })}
          </SwiperSlide>
          <SwiperSlide>
            {data?.filter(item => item.cat === 'Global Guardian')
              .map((item, id) => {
                return (
                  <div key={id}>
                    <div className={discover.__card} >
                      <img className={discover.__cardImg} src={globalGuardian} alt="" />
                      <h4 className={discover.__cardTitle}>{item.cat} 🛡️</h4>
                      <p className={discover.__cardDescription}>Your Ultimate Digital Identity and Authentication Solution.</p>
                      <Link to={`/discover/${item.cat}`}>
                        <button className={discover.__cardBtn}>
                          <span className={discover.__learnBtn}>Learn More</span>
                          <FaArrowRightLong className={discover.__arrowIcon} />
                        </button>
                      </Link>
                      <button className={discover.__demoBtn} onClick={handleNavigate}>
                        Ask for a demo
                      </button>
                    </div>
                  </div>
                )
              })}
          </SwiperSlide>
          <SwiperSlide>
            {data?.filter(item => item.cat === 'WorldSync')
              .map((item, id) => {
                return (
                  <div key={id}>
                    <div className={discover.__card} >
                      <img className={discover.__cardImg} src={worldsync} alt="" />
                      <h4 className={discover.__cardTitle}>{item.cat} 🔄️</h4>
                      <p className={discover.__cardDescription}>Your ultimate solution for seamless attendance tracking and payroll processing across the globe.</p>
                      <Link to={`/discover/${item.cat}`}>
                        <button className={discover.__cardBtn}>
                          <span className={discover.__learnBtn}>Learn More</span>
                          <FaArrowRightLong className={discover.__arrowIcon} />
                        </button>
                      </Link>
                      <button className={discover.__demoBtn} onClick={handleNavigate}>
                        Ask for a demo
                      </button>
                    </div>
                  </div>
                )
              })}
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Service Contents ------------------------------------> */}
      <div className={discover.ServicePageContainer}>
        <h2 className={discover.__headerText} data-aos="fade-right">Our Best Services</h2>
        <p className={discover.ServiceDescription} data-aos="fade-up" data-aos-duration="600">
          At Mackinlay, our commitment to excellence in UI/UX design and IT services is at the core of what we do, ensuring your business not only survives but thrives in the competitive digital landscape. We offer a full spectrum of services tailored to your specific requirements, from intuitive and engaging user interface designs to robust and innovative IT solutions. Our team of experts works closely with you to understand your goals and challenges, delivering bespoke strategies that enhance user experiences, streamline operations, and boost overall efficiency. With Mackinlay by your side, you can be confident that your digital presence will be compelling, effective, and aligned with the latest industry standards, driving your business towards sustained success.
        </p>
        {ServiceItems.map((chunk, index) => (
          <div key={index}>
            <ServiceCard serviceitem={chunk} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Discover
