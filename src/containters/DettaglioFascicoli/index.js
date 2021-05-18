import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Linking,
    StyleSheet,
  } from 'react-native';
import { primaryColor, secondaryColor, white } from '../../constants/Colors';
import HomeIcon from '../../assets/images/home.svg';
import IconMap from '../../assets/images/map.svg';
import IconBook from '../../assets/images/book.svg'
import IconPhone from '../../assets/images/telephone.svg';
import IconExport from '../../assets/images/export.svg';
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({  
    text:{
      fontSize:16,
      fontWeight: 'bold',
      color: primaryColor,
      paddingTop: 2,
      width: 80,
      textAlign: 'center'
    },
       content:{
         width: '100%',
         height: '40%',
         backgroundColor: 'rgba(255,255,255,0.5)',
         alignSelf: 'center',
         position:'absolute',
         bottom: 0,
       },
       linearGradient: {
        
        borderRadius: 0,
        height: '90%',
        width: '100%',
        position:'absolute',
        bottom: 0,
      },
  });



const data = [{name: "Prop 1", telefono: '3473243881'},{name: "Prop 1", telefono: '3473243881'},{name: "Prop 1", telefono: '3473243881'}]
function renderRow(item) {
    return(<View style={{flexDirection:'row',marginLeft: 32, height: 60,marginRight: 32}}>
        <View style={{flex: 0.90}}>
            <Text style={{ color: primaryColor, fontSize: 16,fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{ color: secondaryColor, fontSize: 12,fontWeight: 'bold'}}>{item.telefono}</Text>
        </View>
        <View style={{flex: 0.10}}>
            <IconPhone width={26} height={26} fill={secondaryColor} onPress={()=> Linking.openURL(`tel:${item.telefono}`)}/>
        </View>
    </View>);
}
function DettaglioFascicoli() {
    return (
      <ScrollView >
        <View style={{ height: 250,backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Dettaglio</Text>
        </View>

        <View style={{height: 2, marginRight: 16, marginLeft: 16, marginTop: 16, backgroundColor: secondaryColor}}/>
            
        <View style={{height: 250,marginLeft: 16, marginRight: 16,paddingTop:16 }}>
        <Text style={{ color: primaryColor, fontSize: 22,fontWeight:'bold'}}>Corso Vittorio Emanuele 22, Napoli</Text>
            <Text style={{ color: secondaryColor, fontSize: 18,}}>Nota</Text>
            <Text style={{ color: primaryColor, fontSize: 18, lineHeight: 30}}>Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli Corso Vittorio Emanuele 22, Napoli </Text>
        <LinearGradient
          colors={['transparent', 'white' ]}
          style={styles.linearGradient}
        >
         
        </LinearGradient>
        </View>

        <View style={{flexDirection: 'row', height: 100, marginRight: 16,marginLeft: 16,marginBottom: 16, backgroundColor: white, borderColor: secondaryColor, borderRadius: 6, borderWidth: 1, elevation: 4}}>
            <TouchableWithoutFeedback onPress={()=> Linking.openURL(`google.navigation:q=Via del Grappa, 13, 83047 Lioni AV, Italy&mode=a`)}>
                <View style={{flexDirection:'column', flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 2, marginBottom: 8, borderRightWidth: 1, borderRightColor: secondaryColor, alignItems:'center',paddingTop: 18}}>
                    <IconMap width={26} height={26} fill={secondaryColor}/>
                    <Text style={styles.text} >Avvia Navigatore</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("ciao2")}>
                <View style={{flexDirection:'column',flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 2, marginBottom: 8, alignItems:'center',paddingTop: 18}}>
                    <IconBook width={26} height={26} fill={secondaryColor}/>
                    <Text style={styles.text} >Leggi Fascicolo</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("ciao3")}>
                <View style={{flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 2, marginBottom: 8, borderLeftWidth: 1, borderLeftColor: secondaryColor, alignItems:'center',paddingTop: 18}}>
                    <IconExport width={26} height={26} fill={secondaryColor}/>
                    <Text style={styles.text} >Invia File PDF</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        <Text style={{marginLeft: 32, color: secondaryColor, fontSize: 18,fontWeight: 'bold',paddingTop:16}}>Contatti</Text>
        {data.map(item => renderRow(item))}
      </ScrollView>
    );
  };

  export default DettaglioFascicoli;