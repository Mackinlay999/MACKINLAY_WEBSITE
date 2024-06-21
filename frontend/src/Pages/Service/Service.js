// src/Component/Servicelayout.js
import React from "react";
import serviceitems from '../../Data/ServicePageData.js';
import ServiceCard from "./ServicesCard.js";
import Style from  "../Service/Service.module.css"
function Service() {
    const ServiceItems = [];
    for (let i = 0; i < serviceitems.length; i += 4) {
        ServiceItems.push(serviceitems.slice(i, i + 4));
    }

    return (
        <>
            <div className={Style.ServicePageContainer}>
                <ServiceCard
                    head="Our Best Services"
                />
                <hr className={Style.hrLineOurServices}/>
                <p className={Style.ServiceDescription}>At Mackinlay, we are dedicated to providing top-notch UI/UX design and IT services to help your business thrive in the digital world. Our comprehensive service offerings are designed to meet your unique needs and drive your success.
                 </p>
                {ServiceItems.map((chunk, index) => (
                    <div key={index}>
                        <ServiceCard
                            serviceitem={chunk}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Service;
