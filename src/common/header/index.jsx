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
            className={`header border-b-2 border-section flex items-center justify-between p-8`}
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
