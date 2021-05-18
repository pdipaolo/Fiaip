import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Linking,
  } from 'react-native';
import { primaryColor, secondaryColor, white } from '../../constants/Colors';
import HomeIcon from '../../assets/images/home.svg'
const data = [{name: "Prop 1", telefono: '3473243881'},{name: "Prop 1", telefono: '3473243881'},{name: "Prop 1", telefono: '3473243881'}]
function renderRow(item) {
    return(<View style={{flexDirection:'row',marginLeft: 32, height: 60,marginRight: 32}}>
        <View style={{flex: 0.90}}>
            <Text style={{ color: primaryColor, fontSize: 16,fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{ color: secondaryColor, fontSize: 12,fontWeight: 'bold'}}>{item.telefono}</Text>
        </View>
        <View style={{flex: 0.10}}>
            <HomeIcon width={26} height={26} fill={secondaryColor} onPress={()=> Linking.openURL(`tel:${item.telefono}`)}/>
        </View>
    </View>);
}
function DettaglioFascicoli() {
    return (
      <ScrollView >
        <View style={{ height: 250,backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Dettaglio</Text>
        </View>

        <View style={{height: 2, margin: 16, backgroundColor: secondaryColor}}/>

        <View style={{height: 250, marginBottom: 16,marginLeft: 16, marginRight: 16, backgroundColor: 'yellow' }}>
        </View>

        <View style={{flexDirection: 'row', height: 100, margin: 24, backgroundColor: white, borderColor: secondaryColor, borderRadius: 6, borderWidth: 1, elevation: 4}}>
            <TouchableWithoutFeedback onPress={()=> Linking.openURL(`geo:34.484847,-122.148386`)}>
                <View style={{flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 8, marginBottom: 8, borderRightWidth: 1, borderRightColor: secondaryColor}}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("ciao2")}>
                <View style={{flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 8, marginBottom: 8}}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("ciao3")}>
                <View style={{flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 8, marginBottom: 8, borderLeftWidth: 1, borderLeftColor: secondaryColor}}></View>
            </TouchableWithoutFeedback>
        </View>
        <Text style={{marginLeft: 32, color: secondaryColor, fontSize: 18,fontWeight: 'bold'}}>Contatti</Text>
        {data.map(item => renderRow(item))}
      </ScrollView>
    );
  };

  export default DettaglioFascicoli;