import React, {useRef, useState} from 'react'
import emailjs from 'emailjs-com';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import { toast} from 'react-toastify';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const ContactMe = () => {
    const form = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('Contact', 'template_w4olgwm', form.current, 'user_emwhAtdfUc9GKCk1hhf89')
          .then((result) => {
              setEmail("")
              setMessage("")
              setName("")
              toast("Message delivered! ", {
                  position: "top-right",
                  type: "success",
                  theme: "dark",
                  transition: "bounce",
                  hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
              })
          }, (error) => {
              toast("Message not sent!", {
                position: "top-right",
                type: "error",
                theme: "dark",
                transition: "bounce",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
          });
      };

    return (
        <Fade left duration={1500}>
        <div className="w-full  bg-gray-900 p-7 mt-12 contact__parentContainer">
            <h2 className="text-3xl text-green-200 contactsection__title" id="contactme">Contact Me</h2>
            <div className="w-1/5 border-b h-2  border-green-200 green__line"/>

            <div className="contact__container w-full bg-gray-800 mt-7 py-10 pl-7 pr-7 flex justify-between rounded-md items-center">
                <div className="contact__texts">
                    <h3 className="text-gray-50 text-xl mb-5">Are you in need of a Frontend web developer?</h3>
                    <p className="text-gray-300">Fill up the form and I will get back to you within 2 hours.</p>
                    
                    <div className="flex mt-12 border border-green-200 p-5 rounded w-auto hover:border-gray-200 cursor-pointer email__container">
                        <EmailIcon className="text-gray-200 mr-2"/>
                        <p className="text-gray-200">asaoludavid234@gmail.com</p>
                    </div>

                    <div className="mt-5">
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
                </div>

                <Zoom delay={1500}>
                <form className="contactForm bg-gray-500 h-full w-full ml-10 p-7 flex flex-col rounded-lg" 
                ref={form}
                onSubmit={sendEmail}
                >
                    <label 
                    htmlFor="name" 
                    className="gray-300 mb-2">
                    Your name
                    </label>

                    <div className="relative w-full mb-4">
                    <PersonIcon className="absolute left-2 top-2"/>
                    <input type="text" 
                    className="border w-full py-2 pr-4 pl-10 border-gray-200 outline-none rounded bg-gray-200 uppercase" 
                    name="name" 
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    </div>

                    <label htmlFor="name" className="gray-300 mb-2">Email</label>
                    <div className="relative w-full mb-4">
                    <EmailIcon className="absolute left-2 top-2"/>
                    <input 
                    type="email" 
                    className="border w-full py-2 pr-4 pl-10 border-gray-200 outline-none rounded bg-gray-200" required 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    <label htmlFor="message" className="gray-300 mb-2">Message</label>
                    <textarea 
                    className="bg-gray-400 outline-none p-7 rounded-lg" 
                    required 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <button 
                    className="bg-blue-900 mt-10 p-3 text-white outline-none contactBtn rounded-md hover:bg-gray-800" type="submit">
                    Send Message
                    </button>
                </form>
                </Zoom>
            </div>

        </div>
        </Fade>
    )
}

export default ContactMe
