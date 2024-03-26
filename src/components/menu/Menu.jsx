import React, { useEffect, useState } from 'react'
import "./menu.css"
import { ImHome } from "react-icons/im";
import { FaBriefcase } from "react-icons/fa";
import { FaIdCard, FaPencil } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { GrServicePlay } from "react-icons/gr";
import { RxCaretUp } from "react-icons/rx";
import ScrollspyNav from 'react-scrollspy-nav';

const Menu = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <>
            <ScrollspyNav scrollTargetIds={["banner", "about", "skills", "work", "contact"]} activeNavClass="is-active">
                <div className="menu-bg">
                    <div className="button">
                        <div className="icon">
                            <a href="#banner"><ImHome className='icon' /></a>
                        </div>
                        <a className='menu_text' href="#banner">HOME</a>
                    </div>
                    <div className="button">
                        <div className="icon">
                            <a href="#about"><FaIdCard className='icon' /></a>
                        </div>
                        <a className='menu_text' href="#about">ABOUT</a>
                    </div>
                    <div className="button">
                        <div className="icon">
                            <a href="#work"><FaBriefcase className='icon' /></a>
                        </div>
                        <a className='menu_text' href="#work">WORKS</a>
                    </div>
                    <div className="button">
                        <div className="icon">
                            <a href="#"><GrServicePlay className='icon' /></a>
                        </div>
                        <a className='menu_text' href="#">SERVICES</a>
                    </div>
                    <div className="button">
                        <div className="icon">
                            <a href="#contact"><IoMailOpenOutline className='icon' /></a>
                        </div>
                        <a className='menu_text' href="#contact">CONTACT</a>
                    </div>
                    <div className="button">
                        <div className="icon">
                            <a href="#"><FaPencil className='icon' /></a>
                        </div>
                        <a className='menu_text' href="#">BLOG</a>
                    </div>
                </div>
            </ScrollspyNav>



            {isVisible && <div>
                <button className="backtotop" onClick={handleToTop}><RxCaretUp className='icon2' /></button>
            </div>}
        </>
    )
}

export default Menu