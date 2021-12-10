import Link from 'next/link'
import './style.module.scss'
import React from 'react'
import { FaSearchDollar, FaBars, FaSearch, FaMoon } from 'react-icons/fa'
import ThemeSwitcher from 'common/themeSwitcher'

const Header = () => {
    // let menu = document.querySelector("#menu-btn");
    // let navbar = document.querySelector(".header .navbar");

    // menu.onclick = () => {
    //   menu.classList.toggle("fa-times");
    //   navbar.classList.toggle("active");
    // };
    const [open, setOpen] = React.useState(false)
    return (
        <header className="header">
            <a href="#" className="logo">
                se
                <i>
                    <FaSearchDollar />
                </i>
            </a>

            <nav className={`${open ? 'active' : ''} nav`}>
                <button
                    aria-label={open ? 'fechar menu' : 'abrir menu'}
                    title={open ? 'fechar menu' : 'abrir menu'}
                    className="btn-mobile"
                    aria-haspopup="true"
                    aria-controls="menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className="hamburger"></span>
                </button>
                <div className="menu" role="menu">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#work">work</a>
                    <a href="#pricing">pricing</a>
                    <a href="#reviews">reviews</a>
                    <a href="#contact">contact</a>
                </div>
            </nav>

            <div id="theme-btn">
                <ThemeSwitcher/>
            </div>

            <div className="scroll-indicator"></div>
        </header>
    )
}

export default Header
