import React from 'react';
import YouTube from 'react-youtube';

function Youtube () {
  // YouTube video options
  const opts = {
    height: '250',
    width: '350',
    playerVars: {
      autoplay: 1,
    },
  };

  // YouTube video ID
  const videoId = 'StaBrXZaDf4';
  const videoId1 ='OfGoCdWAhJs';
  const videoId2 ='YjTMoF9TYis';
  return (
  <>
     <div id="youtube">
    <h2 className="text-center text-danger p-5" >YouTube Section</h2>
    <div className="youtube-container m-5">
        <YouTube videoId={videoId} opts={opts} className="youtube-video" />
        <YouTube videoId={videoId1} opts={opts} className="youtube-video" />
        <YouTube videoId={videoId2} opts={opts} className="youtube-video" />
        
       
      </div>
      </div>
    </>
  );
};

export default Youtube;
