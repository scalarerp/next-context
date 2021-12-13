import React from 'react'
import styles from './index.module.scss'

const Nav = () => {
    const [open, setOpen] = React.useState(true)
    return (
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
    )
}

export default Nav
