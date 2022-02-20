import React,{ useState } from 'react';
import './Postview.css';
import axios from 'axios';
import camera_icon from "./images/camera_icon.jpg"
import threedot from "./images/three-dot.png"
import shareButton from "./images/shareButton.png"
import likeButton from "./images/likeButton.png"
import reactlogo from "./images/reactlogo.png"

const Postview=()=> {
  const [posts, setPost]=useState([])
  React.useEffect(() => {
    axios.get('http://localhost:3004/user').then(res => {
      setPost(res.data);
    })
  },[])
  return (
    <div className="site-container">
      <div className="page-header">
        <div className='heading'>
          <div className='heading-first'>
          <img src={reactlogo} alt="reactlogo"/>
        <a href="#">Instaclone</a>
        
        </div>
        <div>
        <img src={camera_icon} alt="camera"/>
        </div>
        </div>
        {posts.map((post,idx) => {
            return (
        <div className="post-container">
          

            
          <div className='post-container-first'>
            <div className="container-first">
          <strong>{post.name}</strong>
            <label>{post.location}</label>
            </div>
            <img id="threedot" src={threedot} alt="three-dot"/>
          </div>
          <div className='post-container-second'>
            <img src={post.PostImage} alt="main-image" width="300" height="150"/>
          </div>
          <div className='post-container-third'>
            <div className='first'>
              <div className='first-first'>
                  <img src={likeButton} alt="like-button"/>
                  <img id ="share"src={shareButton} alt="share-button"/>
              </div>
              <div>
              <label>{post.date}</label>
              </div>
            </div>
            <div className='second'>
              <label>{post.likes} likes</label>
            </div>
            <div className='third'>
              <strong>{post.description}</strong>
            </div>
          </div>
         
        </div>
        )
      })}
      </div>

    </div>
  );
}

export default Postview;
