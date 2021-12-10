import Link from 'next/link'
import React from 'react'
import { FaSearchDollar, FaBars, FaSearch, FaMoon } from 'react-icons/fa'
import ThemeSwitcher from 'common/themeSwitcher'

import styles from './index.module.scss'

const Header = () => {
    console.log(styles)

    const [open, setOpen] = React.useState(false)
    return (
        <header className="header bg">
            <a href="#" className="logo">
                  
                        <FaSearchDollar />
              
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
                <div className={styles.menu} role="menu">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#work">work</a>
                    <a href="#pricing">pricing</a>
                    <a href="#reviews">reviews</a>
                    <a href="#contact">contact</a>
                </div>
            </nav>

            <div id="theme-btn">
                <ThemeSwitcher />
            </div>

            <div className="scroll-indicator"></div>
        </header>
    )
}

export default Header
