import React, {useState, useEffect} from "react"
import BlogSection from "./components/BlogSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(()=> {
    function fetchPosts(){
        try{
            fetch("https://dev.to/api/articles?username=arshadayvid")
            .then(
                response => response.json()
            ).then(response => response.slice(0,6))
            .then(data => {
              setPosts(data)
              setLoading(false)
            }).catch(err => console.error(err))
        
        }catch(err) {
            console.error("error")
        }
    }
    fetchPosts()
}, [])

  return (
    <div className=" bg-gray-900">
      <Nav/>
      <Header/>
      <Portfolio/>
      {posts[2] && <BlogSection posts={posts} loading={loading}/>}
      <ContactMe/>
      <Footer/>
      <ToastContainer  autoClose={3000}/>
    </div>
  );
}

export default App;
