import AppLogo from 'common/logo'
import Nav from 'common/nav'
import React from 'react'

const Header = () => {
    // let menu = document.querySelector("#menu-btn");
    // let navbar = document.querySelector(".header .navbar");

    // menu.onclick = () => {
    //   menu.classList.toggle("fa-times");
    //   navbar.classList.toggle("active");
    // };

    return (
        <header className={`header border-b-2 border-gray-100 flex`}>
            <AppLogo />
            <Nav />
        </header>
    )
}

export default Header
