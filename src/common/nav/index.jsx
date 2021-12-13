import Link from 'next/link'
import React from 'react'
import styles from './index.module.scss'

const Nav = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <nav className={`${styles.nav} ${open ? `${styles.active}` : ''}`}>
            <button
                aria-label={open ? 'fechar menu' : 'abrir menu'}
                title={open ? 'fechar menu' : 'abrir menu'}
                className={`${styles.btnMobile}`}
                aria-haspopup="true"
                aria-controls="menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span className={styles.hamburger}></span>
            </button>
            <ul className={`${styles.menu} sm:mt-0 mt-10`} role="menu">
                <li>
                    <div
                        className="text-lg text-center font-poppins border-b-2
                    border-transparent hover:border-brand duration-300
                    hover:text-brand transform hover:-translate-y-1"
                    >
                        <Link href="#home">home</Link>
                    </div>
                </li>
                <li>
                    <div
                        className="text-lg text-center font-poppins border-b-2
                    border-transparent hover:border-brand duration-300
                    hover:text-brand transform hover:-translate-y-1"
                    >
                        <Link href="#services">services</Link>
                    </div>
                </li>
                <li>
                    <div
                        className="text-lg text-center font-poppins border-b-2
                    border-transparent hover:border-brand duration-300
                    hover:text-brand transform hover:-translate-y-1"
                    >
                        <Link href="#work">work</Link>
                    </div>
                </li>
                <li>
                    <div className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-brand duration-300 hover:text-brand transform hover:-translate-y-1">
                        <Link href="#pricing">pricing</Link>
                    </div>
                </li>
                <li>
                    <div className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-brand duration-300 hover:text-brand transform hover:-translate-y-1">
                        <Link href="#reviews">reviews</Link>
                    </div>
                </li>
                <li>
                    <div className="text-lg text-center font-poppins border-b-2 border-transparent hover:border-brand duration-300 hover:text-brand transform hover:-translate-y-1">
                        <Link href="#contact">contact</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
