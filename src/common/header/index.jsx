import React from 'react'
import { FaSearchDollar } from 'react-icons/fa'

import styles from './index.module.scss'
import Link from 'next/link'

const Header = () => {
    // let menu = document.querySelector("#menu-btn");
    // let navbar = document.querySelector(".header .navbar");

    // menu.onclick = () => {
    //   menu.classList.toggle("fa-times");
    //   navbar.classList.toggle("active");
    // };
    const [open, setOpen] = React.useState(true)
    return (
        <header className={`${styles.header} border-b-2 border-gray-100`}>
            <a href="#" className={`${styles.logo} flex text-4xl`}>
                se
                <div className="text-[#fa4f09]">
                    <FaSearchDollar />
                </div>
            </a>

            <nav className={`${styles.nav} ${open ? `${styles.active}` : ''} `}>
                <button
                    aria-label={open ? 'fechar menu' : 'abrir menu'}
                    title={open ? 'fechar menu' : 'abrir menu'}
                    className={styles.btnMobile}
                    aria-haspopup="true"
                    aria-controls="menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className={styles.hamburger}></span>
                </button>
                <ul className={styles.menu} role="menu">
                    <li>
                        <a
                            className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-[#fa4f09] duration-300 hover:text-[#fa4f09] transform hover:-translate-y-1"
                            href="#home"
                        >
                            home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-[#fa4f09] duration-300 hover:text-[#fa4f09] transform hover:-translate-y-1"
                            href="#services"
                        >
                            services
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-[#fa4f09] duration-300 hover:text-[#fa4f09] transform hover:-translate-y-1"
                            href="#work"
                        >
                            work
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-[#fa4f09] duration-300 hover:text-[#fa4f09] transform hover:-translate-y-1"
                            href="#pricing"
                        >
                            pricing
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-[#fa4f09] duration-300 hover:text-[#fa4f09] transform hover:-translate-y-1"
                            href="#reviews"
                        >
                            reviews
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-[#fa4f09] duration-300 hover:text-[#fa4f09] transform hover:-translate-y-1"
                            href="#contact"
                        >
                            contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
