import React, { useContext } from 'react'
import discover from './Discover.module.css'
import { bucket } from './ProductData';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductPage() {
    const navigate = useNavigate()
    const readData = useParams().id
    const [data] = useContext(bucket)
    let filterData = data.filter((e) => {
        return e?.cat === readData
    })
    const handleNavigate = () => {
        navigate('/ask-demo')
    }

    return (
        <div className={discover.__mainContainer}>
            <img className={discover.__image} src={filterData[0].img} alt="" data-aos="fade-right" data-aos-duration="800" />
            <div data-aos="fade-up" style={{marginBottom:"2em"}}>
                <h2 className={discover.__cardTitle}>{filterData[0].title}</h2>
                <p className={discover.__cardDescription}>{filterData[0].intro}</p>
            </div>
            <div data-aos="fade-up" style={{marginBottom:"2em"}}>
                <h5 className={discover.__cardTitle}>Key Benefits of {filterData[0].cat} :</h5>
                {filterData[0].benefits.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li className={discover.__cardDescription}>{item.key}: {item.desc}</li>
                        </ul>
                    )
                })}
            </div>
            {
                filterData[0].features && <div data-aos="fade-up" style={{marginBottom:"2em"}}>
                    <h5 className={discover.__cardTitle}>Key Features :</h5>
                    {
                        filterData[0].features.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li className={discover.__cardDescription}>{item.key}: {item.feature}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            }
            {
                filterData[0].industries && <div data-aos="fade-up" style={{marginBottom:"2em"}}>
                    <h5 className={discover.__cardTitle}>Industries We Serve :</h5>
                    {filterData[0].industries.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li className={discover.__cardDescription}>{item.name}: {item.work}</li>
                            </ul>
                        )
                    })}
                </div>
            }
            {
                filterData[0].working && <div data-aos="fade-up" style={{marginBottom:"2em"}}>
                    <h5 className={discover.__cardTitle}>How {filterData[0].cat} Works :</h5>
                    {
                        filterData[0].working && <>
                            {filterData[0].working.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <li className={discover.__cardDescription}>{item.title}: {item.caption}</li>
                                    </ul>
                                )
                            })}
                        </>
                    }
                </div>
            }
            <div data-aos="fade-up" style={{marginBottom:"2em"}}>
                <h5 className={discover.__cardTitle}>{filterData[0].bio[0].head}</h5>
                <p className={discover.__cardDescription}>{filterData[0].bio[0].desc}</p>
            </div>
            {
                filterData[0].caption && <p className={discover.__cardDescription} style={{ paddingTop: "2em",marginBottom:"2em" }}>
                    <em>{filterData[0].caption}</em>
                </p>
            }
            {
                filterData[0].faq && <div  data-aos="fade-up">
                    <h5 className={discover.__cardTitle}>FAQ :</h5>
                    {filterData[0].faq.map((item, index) => {
                        return (
                            <ul key={index}>
                                <span>{item.title}</span>
                                <p style={{padding:"0"}} className={discover.__cardDescription}>{item.caption}</p>
                            </ul>
                        )
                    })}
                </div>
            }
            <button className={discover.__askDemoBtn} onClick={handleNavigate} data-aos="zoom-out">
                Ask us for a demo
            </button>
        </div>
    )
}
