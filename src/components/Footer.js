import React from 'react'
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="w-full bg-gray-900 p-7 border-t border-gray-300 mt-12 text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl text-green-300">David Asaolu</h3>
            <p className="text-gray-400">Frontend Web Developer</p>
                    <div>
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
                    <p className="text-gray-500">©️ Copyright {date}</p>
                    
        </footer>
    )
}

export default Footer
