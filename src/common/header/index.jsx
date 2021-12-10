// import Link from 'next/link'
import React from 'react'
import { FaSearchDollar } from 'react-icons/fa'
import ThemeSwitcher from 'common/themeSwitcher'

import styles from './index.module.scss'

const Header = () => {
    // let menu = document.querySelector("#menu-btn");
    // let navbar = document.querySelector(".header .navbar");

    // menu.onclick = () => {
    //   menu.classList.toggle("fa-times");
    //   navbar.classList.toggle("active");
    // };
    const [open, setOpen] = React.useState(true)
    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>
                se
                <i>
                    <FaSearchDollar />
                </i>
            </a>

            <nav className={`${styles.nav}   ${open ? styles.active : ''}`}>
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
                <div className={styles.menu} role="menu">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#work">work</a>
                    <a href="#pricing">pricing</a>
                    <a href="#reviews">reviews</a>
                    <a href="#contact">contact</a>
                </div>

                <ThemeSwitcher />
            </nav>

            <div id="theme-btn"></div>

            <div className="scroll-indicator"></div>
        </header>
    )
}

export default Header
