import React, { useState, useRef } from 'react';
import discover from './Discover.module.css'

const Service = (props) => {
    const [serviceitem] = useState(props.serviceitem || []);
    const serviceRef = useRef([]);

    return (
        <div className={discover.container} data-aos="fade-right">
            <div className={discover.row}>
                {serviceitem.map((value, index) => (
                    <div className={discover.card} ref={el => serviceRef.current[index] = el}>
                        <img src={value.image} alt="Developmentimage" />
                        <div className={discover.cardBody}>
                            <h5 className={discover.cardtitle}>{value.head}</h5>
                            <p className={discover.cardText}>{value.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
