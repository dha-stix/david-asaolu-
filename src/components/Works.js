import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Zoom from 'react-reveal/Zoom';

const Works = ({image, title, about, repoLink, previewLink}) => {
    return (
      <Zoom top duration={1000}>
                <div className="portfolio bg-gray-800 rounded-lg my-5  hover:shadow-md">
                    <div className="w-full portfolio__image h-2/3">
                       <img src={image} className="w-full h-full" alt={title}/>
                    </div>
                    <div className="w-full portfolio__info h-1/3 p-5 flex  flex-col">
                        <h3 className="text-green-200 text-xl mb-4">{title}</h3>
                        <p className="text-gray-500">{about}</p>
                        <div className="mt-4">
                            <a href={previewLink} target="_blank"  rel="noreferrer" className="text-gray-200 mr-5  cursor-pointer">
                            <VisibilityIcon className="mr-1"/>
                            Preview
                            </a>
                            <a href={repoLink} target="_blank"  rel="noreferrer" className="text-gray-200 mr-5  cursor-pointer">
                            <OpenInNewIcon  className="mr-1"/>
                            GitHub Repo</a>
                        </div>
                        
                    </div>
                </div>
            </Zoom>
        
    )
}

export default Works
