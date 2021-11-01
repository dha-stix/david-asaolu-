import React, {useState} from 'react'
import { Link} from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Fade from 'react-reveal/Fade';
const Nav = () => {
    const [showHamburgerNav, setShowHamburgerNav] = useState(false)

    function setHamburgerFalse() {
        setShowHamburgerNav(false)
    }
    return (
        <nav className="nav w-full bg-gray-900 h-16 p-7 flex justify-between items-center sticky top-0 z-10">
            <Link className="text-green-500 text-2xl cursor-pointer" activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={500}>David</Link>

            <ul className="text-white flex text-sm nav__links">
                <Link  className="mr-6 text-green-100 cursor-pointer" activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={500}>
                    Home
                </Link>

                <Link  className="mr-6 text-green-100 cursor-pointer " activeClass="active" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
                    Blog
                </Link>

                <Link  className="mr-6 text-green-100 cursor-pointer" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                    Portfolio
                </Link>

                <Link  className="mr-6 text-green-100 cursor-pointer " activeClass="active" to="contactme" spy={true} smooth={true} offset={-70} duration={500}>
                    Contact Me
                </Link>
            </ul>
            <div className="hamburgerDiv">
                <IconButton onClick={() => setShowHamburgerNav(true)}>
                    <MenuIcon fontSize="large" className="text-gray-100 text-2xl"/>
                </IconButton>
            </div>

            {showHamburgerNav && (
                <Fade left>
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 py-14 flex flex-col items-center justify-between">
                    <p className="absolute z-10 right-14 top-5 cursor-pointer text-2xl text-white" onClick={setHamburgerFalse}>X</p>
                    <Link  className="hamburger__links mr-6 text-gray-100 cursor-pointer" activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={500} onClick={setHamburgerFalse}>
                        Home
                    </Link>

                    <Link  className="hamburger__links mr-6 text-gray-100 cursor-pointer " activeClass="active" to="blog" spy={true} smooth={true} offset={-70} duration={500} onClick={setHamburgerFalse}>
                        Blog
                    </Link>

                    <Link  className="hamburger__links mr-6 text-gray-100 cursor-pointer" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500} onClick={setHamburgerFalse}>
                        Portfolio
                    </Link>

                    <Link  className="hamburger__links mr-6 text-gray-100 cursor-pointer " activeClass="active" to="contactme" spy={true} smooth={true} offset={-70} duration={500} onClick={setHamburgerFalse}>
                        Contact Me
                    </Link>
                        
                    </div>
                </Fade>
            )}
        </nav>
    )
}

export default Nav
