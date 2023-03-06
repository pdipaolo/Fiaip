import React from 'react';
import {
    StyleSheet,
  } from 'react-native';

import {  secondaryColor } from '../constants/Colors';

import HomeIcon from '../assets/images/home.svg';
import CarIcon from '../assets/images/car.svg';
import BagIcon from '../assets/images/bag.svg';
const styles = StyleSheet.create({
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      flex: 0.50,
      paddingTop:10,
    },})

const  switchImage = (type) =>{
    switch (type) {
      case 0:
        return <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColor}/>
      case 1:
        return <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColor}/>
      case 2:
        return <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColor}/> 
      default:
        return <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColor}/>
    }
  };

  export {switchImage}