import React, { useState, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
import styles from "../Service/Service.module.css";

const Service = (props) => {
    const [serviceitem] = useState(props.serviceitem || []);
    const serviceRef = useRef([]);
     const Navigate=useNavigate()
     

    const CardNavigation=()=>{
       Navigate('/contact')
    }
    

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    const maxLength = 100;

    return (
        <div className={styles.service}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    {props.para && <p>{props.para}</p>}
                    <h2>{props.head}</h2>
                </div>
                <div className={styles.row}>
                    {serviceitem.map((value, index) => (
                        <div key={value.head} className={styles.colLg3} style={{ flex: '1' }}>
                            <div className={styles.Container} >
                               <div
                                    className={`${styles.card} ${styles.hidden}`}
                                    ref={el => serviceRef.current[index] = el}
                                    onClick={CardNavigation}
                                >
                                    <img src={value.image} alt="Developmentimage" />
                                    <div className={styles.cardBody}>
                                        <h5 className={styles.cardtitle}>{value.head}</h5>
                                        <p className={styles.cardText}>{truncateText(value.para, maxLength)}</p>
                                        <button className={styles.demoButton}>Book A Demo</button>
                                    </div>
                                </div>
                        
                            </div>
                           
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Service;
