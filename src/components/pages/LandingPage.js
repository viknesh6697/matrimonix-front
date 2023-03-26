import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import '../../App.css'
import BackgroundImage from '../../assets/images/marriage_pic.jpg'

export default function LandingPage() {
    const { t } = useTranslation();

    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">{t('ms_matrimony')}</h1>
            <p className="main-para text-center">{t('join_us')}</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>{t('register')}</span></button>
                </Link>
            </div>
            <Footer /> 
        </header>
        
    )
}

const Footer = () => {
    const { t } = useTranslation();
    return (
        <p className="text-center" style={ FooterStyle }>{t('designed_by')} <a href="https://www.linkedin.com/in/vikneshvar-balasubramanian-6b2926161/" target="_blank" rel="noopener noreferrer">{t('vikneshvar')}</a></p>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const FooterStyle = {
    // background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}