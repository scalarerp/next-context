import AppLogo from 'common/logo'
import Nav from 'common/nav'
import ThemeSwitcher from 'common/themeSwitcher'
import React from 'react'

const Header = () => {
    // let menu = document.querySelector("#menu-btn");
    // let navbar = document.querySelector(".header .navbar");

    // menu.onclick = () => {
    //   menu.classList.toggle("fa-times");
    //   navbar.classList.toggle("active");
    // };

    return (
        <header
            className={`header md:border-b-2 md:border-section flex items-center justify-between p-8 fixed w-full bg-primary z-50`}
        >
            <AppLogo />
            <div className="flex items-center">
                <Nav />
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header
