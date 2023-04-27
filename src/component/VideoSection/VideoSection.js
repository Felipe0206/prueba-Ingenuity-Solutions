import React,{useState} from "react";
import "./VideoSection.css";
import video from'../../asets/newman-club/Final.mp4'
import Grupo_971 from'../../asets/newman-club/Grupo 971.svg'
import write from'../../asets/newman-club/comment_FILL0_wght400_GRAD0_opsz48.svg'
import Favorite from'../../asets/newman-club/favorite_FILL0_wght400_GRAD0_opsz48.svg'


function VideoSection() {
  const [heart,setHeart]=useState(false);
  const [tex, setTex]=useState('JOIN US')


  const change=()=>{
    if(!heart){
      setHeart(true)
      setTex('YAY!')
    }else{
      setHeart(false)
      setTex('JOIN US')
    }
  }
  return (
    <div className="video-player-container">

      <video className="video-player" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay">
        <img src={Grupo_971}></img>
      </div>

      <div className="icon-box">

        <div className="icon-box-write">
          
          <div className="bubble">
            <img src={write}></img>
          </div>

        </div>
          
        <div className="heart-box">

          <div className={heart ?'change-color':'the-heart'} onClick={change}>

            <img src={Favorite}></img>

          </div>

          <div className="heart-box-tex">
            <span>{tex}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}


export default VideoSection;