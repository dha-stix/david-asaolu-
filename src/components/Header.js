import React from 'react'
import logo from "../images/logo.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link} from "react-scroll";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Header = () => {
    return (
        <header className="header w-full bg-gray-900 py-12 pr-20 pl-20 flex justify-between items-center relative" id="header">
        <Zoom bottom delay={9500}>
            <div className="social--icons  h-4/5 w-16 left-0 absolute flex flex-col items-center justify-end">


            <a href="https://github.com/dha-stix" target="_blank"  rel="noreferrer"> 
                <IconButton>
                 <GitHubIcon className="header--icons"/>
                </IconButton>
            </a>

            <a href="https://twitter.com/Arshadayvid" target="_blank"  rel="noreferrer"> 
                <IconButton>
                    <TwitterIcon className="header--icons"/>
                </IconButton>
            </a>

            <a href="https://www.linkedin.com/in/david-asaolu234/" target="_blank"  rel="noreferrer">
                <IconButton>
                    <LinkedInIcon className="header--icons"/>
                </IconButton>
            </a>
            </div>
        </Zoom>
           
            <div className="text-gray-300 mr-10 header--text">
                <Fade left delay={1000}>
                <p  className="text-gray-400">Hi there👋</p>
                </Fade>
                <Fade bottom delay={2500}>
                <h1 className="text-5xl text-green-200 my-3">I'm David</h1>
                </Fade>
                <Zoom delay={3500}>
                <p className="mb-10">REACTJS FRONTEND WEB DEVELOPER 💻</p>
                </Zoom>
                <Fade delay={5000}>
                <p className="text-gray-100 mb-2">A Computer Science undergraduate at <a href="https://futa.edu.ng/" target="_blank"  rel="noreferrer" className="hover:text-green-200">FUTA</a> with experience in <span className=" text-green-200">Front End Web Development.</span>
                </p>
                 <p className="text-gray-100 mb-2">I enjoy building user-friendly web applications with clean <span className=" text-green-200">JavaScript </span> code that makes the web an interesting place for everyone to thrive in.
                </p>
                </Fade>

                <Fade top delay={9000}>
                <div className="my-10 cta--btns">
                <a href="https://drive.google.com/file/d/1ooQYN97S_xcQf0KUR8A3UPTSKvdO_vau/view?usp=sharing" rel="noreferrer" className="border font-normal p-3 align-center mr-7 text-green-200 border-green-200 hover:text-gray-50 hover:border-gray-50 resumeBtn" target="_blank"> RESUME </a>
                
                <Link  className="border font-normal p-3 align-center text-green-200 cursor-pointer border-green-200 hover:text-gray-50 hover:border-gray-50 portfolioBtn" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>PORTFOLIO</Link>
                </div>
                </Fade>
            </div>
          
            <Zoom duration={2000}>
            <div className="flex items-right justify-center headerImg__container">
               <img src={logo} alt="David Asaolu" className="w-3/4 header__img"/>
            </div>
            </Zoom>
            <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
                <div className="absolute bottom-1.5 right-5">
                    <IconButton>
                        <ArrowDownwardIcon className="text-white bg-gray-800 rounded-lg"/>
                    </IconButton>
                </div>
            </Link>
        </header>
    )
}

export default Header
