import React from 'react'
import Logo from "../../Assets/officiallogo.png"
import logoStyle from "./LogoLoader.module.css"
function LogoLoader() {
    return (
        <section className={logoStyle.loaderMainContainer}>
            <img src={Logo} alt="https://mackinlay.in/" className={`${logoStyle.logo} animate__slow animate__infinite	 animate__animated animate__heartBeat`} />
        </section>
    )
}

export default LogoLoader