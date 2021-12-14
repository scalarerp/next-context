import Link from 'next/link'
import { navLinks } from 'objetcs'
import React from 'react'
import styles from './index.module.scss'

const Nav = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <nav className={`${styles.nav} ${open ? `${styles.active}` : ''} `}>
            <button
                aria-label={open ? 'fechar menu' : 'abrir menu'}
                title={open ? 'fechar menu' : 'abrir menu'}
                className={`${styles.btnMobile} `}
                aria-haspopup="true"
                aria-controls="menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span className={styles.hamburger}></span>
            </button>

            <ul className={`${styles.menu} bg-nav md:mt-0 mt-2`} role="menu">
                {/* <pre>{JSON.stringify(styles, null, 2)}</pre> */}

                {navLinks.map((link) => {
                    return (
                        <li key={link.name}>
                            <div
                                className={`${link.className} text-lg text-center font-poppins border-b-2
                    border-transparent hover:border-brand duration-300
                    hover:text-brand transform hover:-translate-y-1`}
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav
