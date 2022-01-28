import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
  } from 'react-native';
import Carousel ,  { Pagination } from 'react-native-snap-carousel';
import VideoPlayer from 'react-native-video-controls';

const SLIDER_WIDTH = Dimensions.get('window').width ;
const SLIDER_HEIGHT = Dimensions.get('window').height ;
  function Tutorial(){
      const [dot,setDot] = React.useState(0);
      const data = [{
                title: "",
                url: <VideoPlayer source={require("../../assets/video/Video_1.mov")} disableBack={true} tapAnywhereToPause={true} paused={true}/>
            },{
                title: "",
                url: <VideoPlayer source={require("../../assets/video/Video_2.mov")} disableBack={true} tapAnywhereToPause={true} paused={true}/>
            },{
                title: "",
                url: <VideoPlayer source={require("../../assets/video/Video_3.mov")} disableBack={true} tapAnywhereToPause={true} paused={true}/>
            },{
                title: "",
                url: <VideoPlayer source={require("../../assets/video/Video_4.mov")} disableBack={true} tapAnywhereToPause={true} paused={true}/>
            },{
                title: "",
                url: <VideoPlayer source={require("../../assets/video/Video_5.mov")} disableBack={true} tapAnywhereToPause={true} paused={true}/>
            },{
                title: "",
                url: <VideoPlayer source={require("../../assets/video/Video_6.mov")} disableBack={true} tapAnywhereToPause={true} paused={true}/>
            },];

      const renderItem2 = ({item}) => {
        return <View style={style.view}>
                   {item.url}
                </View>
      }
      return(
          <View style={{height: '100%', width: '100%'}}>
            <Carousel
                    layout={"default"}
                    pagingEnabled={false}
                    data={data}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={1000}
                    renderItem={renderItem2}
                    onSnapToItem={(index) => setDot(index) }
            />
            <Pagination
              dotsLength={data.length}
              activeDotIndex={dot}
              containerStyle={{ backgroundColor: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'gray'
              }}
              inactiveDotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'lightgray'
              }}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
          </View>
      );
  };
  const style = StyleSheet.create({
    view: {
        height: SLIDER_HEIGHT - 200,
        width: SLIDER_WIDTH,
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        }
    });
export default Tutorial;