import React from 'react'
import chatportfolio from "../images/chatportfolio.png"
import netflixportfolio from "../images/netflix.png"
import countryportfolio from "../images/country.png"
import teslaportfolio from "../images/tesla.png"
import fjorl from "../images/fjorl.png"
import Works from './Works';


const Portfolio = () => {
    return (
        <div className="w-full bg-gray-900 p-7 mt-10 portfolioSection">
            <div>
                <h2 className="text-3xl text-green-200 portfoliosection__title" id="portfolio">Recent Works 💻</h2>
                <div className="w-1/5 border-b h-2  border-green-200 green__line"/>
            </div>  

            <div className="portfolio__container flex flex-wrap mt-16  align-center justify-center">
                <Works 
                    image={chatportfolio} 
                    title="A chat web application"
                    about="A chat web application that allows users to join different rooms, create rooms and send messages to one another. It was built with ReactJS, React Router, React Hooks, Material UI, Styled-components Redux Toolkit and Firebase."
                    previewLink= "https://whatsappclone-34189.web.app/"
                    repoLink ="https://github.com/dha-stix/roomchat"
                />

                <Works 
                    image={netflixportfolio} 
                    title="Netflix Clone"
                    about="A movie web application that utilizes TMDB API to display different genres of movies in a similar way as Netflix. It was built with React, React Hooks,  & Styled-components."
                    previewLink= "https://netflix-clone-dha-stix.vercel.app/"
                    repoLink ="https://github.com/dha-stix/netflix-clone"
                />

                <Works 
                    image={countryportfolio} 
                    title="Countries Archive"
                    about="A web application that shows information about every country in the world. It shows various information like population, region, continents, etc. It was built with ReactJS, React Router, React Hooks, TailwindCSS, Material UI & Redux Toolkit."
                    previewLink= "https://countries-app-one.vercel.app/"
                    repoLink ="https://github.com/dha-stix/countries-app"
                />
            
                <Works 
                    image={teslaportfolio} 
                    title="Tesla Clone"
                    about="A clone of Tesla landing page that shows different Tesla cars and products with animations. It was built with ReactJS, React Hooks, Styled-components & React Reveal."
                    previewLink= "https://tesla-clone-liart.vercel.app/"
                    repoLink ="https://github.com/dha-stix/tesla-clone"
                />

                <Works 
                    image={fjorl} 
                    title="Fjorl Landing Page"
                    about="A Frontendmentor landing page challenge built with HTML & CSS."
                    previewLink= "https://dha-stix.github.io/fjorl/"
                    repoLink ="https://github.com/dha-stix/fjorl"
                />

            </div>
        </div>
    )
}

export default Portfolio
