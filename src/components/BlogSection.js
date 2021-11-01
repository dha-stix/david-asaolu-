import React from 'react'
import Flip from 'react-reveal/Flip';


const BlogSection = ({loading, posts}) => {

    return (
        <div className="w-full bg-gray-900 p-7 mt-12 blogsection">
            <h2 className="text-3xl text-green-200 blogsection__title" id="blog">Blog 📰</h2>
            <div className="w-1/5 border-b h-2  border-green-200 green__line"/>

            {loading ? (
                <div className="w-full flex flex-wrap align-center justify-center mt-10">
                    <p className="text-green-200">Retrieving blogpost... Please wait</p>
                </div>
            ): (
                <div className="w-full flex flex-wrap align-center justify-center mt-10 blog__container">
                    {posts.map(post => (
                    <Flip top  key={post.id}>
                    <a href={post.url} target="_blank" rel="noreferrer"  
                    className="blogpost w-1/3 bg-gray-800 my-3 mx-4 shadow-md rounded-lg hover:bg-gray-700">
                    
                    <div className="w-full ">
                        <div className="post--img w-full h-3/5">
                            <img src={post.cover_image} alt={post.title} className=" w-full h-full"/>
                        </div>

                        <div className="w-full h-2/5 p-5 flex flex-col justify-center">
                            <h2 className="text-gray-300">{post.title}</h2>
                            <p className="text-sm text-gray-500">{post.description}</p>
                            <div className="mt-5 flex">
                                <p className="text-gray-400 mr-5">💖 {post.public_reactions_count}</p>
                                <p className="text-gray-400 mr-5">💬 {post.comments_count}</p>
                            </div>
                        </div>
                            
                    </div>
                    </a> 
                    </Flip> 
                    )) }
        </div>
            )}
            

        <div className="w-full p-5 flex align-center justify-center">
            <a href="https://dev.to/arshadayvid" target="_blank" rel="noreferrer" className="text-green-300 border py-2 px-3 cursor-pointer hover:text-gray-200">VIEW MORE</a>
        </div>
            
        </div>
    )
}

export default BlogSection
