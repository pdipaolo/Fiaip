import React from 'react';
import {
    View,
  } from 'react-native';
  import VideoPlayer from 'react-native-video-controls';
  function ChiSiamo(){
      return(
          <View style={{flexDirection:'column', height:'100%'}}>  
            <VideoPlayer source={require('../../assets/video/fiaip_video.mp4')} disableBack={true}/>
          </View>
      );
  };

  export default ChiSiamo;