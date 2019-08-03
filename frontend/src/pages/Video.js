
    
 import React from 'react'
 import EncartBlanc from '../components/Encart/EncartBlanc';
 import YouTube from 'react-youtube';
 import Footer from '../components/Footer/Footer';
 import '../App.css';

      
        const opts = {
            height: '390',
            width: '640',
            playerVars: { 
              autoplay: 1
            }
        };

  const Video = () => (
    <div className="slide-img bg-img"   >
 
 {/* <!-- ##### Song Area Start ##### --> */}

 <EncartBlanc text1 = {'See What NeWs'}
             text2 = {'Latests Videos'} />

<div className="background-grey">     
  <div className="youtube-centered">     
    <YouTube
    videoId="QWusFkPm2E4"
    />
  </div>
  <div className="youtube-centered">
  <YouTube
    videoId="SDPEbt0uknk"
    />
  </div>
    <div className="youtube-centered">
        <YouTube
            videoId="uWqmB2M1Cu0"
        />
    </div>

</div>
 
        {/* eslint-disable-next-line react/jsx-no-undef */}
     <Footer/>



 </div>
 // {/* <!-- ##### Song Area End ##### --> */}
 
 )
  
 export default Video
  