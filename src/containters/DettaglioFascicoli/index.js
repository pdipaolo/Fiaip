import React, {useState} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Linking,
    StyleSheet,
    Image,
    Platform,
    PermissionsAndroid,
    Share
  } from 'react-native';
import { primaryColor, secondaryColor, white } from '../../constants/Colors';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Share from 'react-native-share';
import IconMap from '../../assets/images/map.svg';
import IconBook from '../../assets/images/book.svg'
import IconPhone from '../../assets/images/telephone.svg';
import IconExport from '../../assets/images/export.svg';
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({  
    text:{
      fontSize:14,
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


function renderRow(item) {
    return(<View style={{flexDirection:'row',marginLeft: 32, height: 60,marginRight: 32}}>
        <View style={{flex: 0.90}}>
            <Text style={{ color: primaryColor, fontSize: 16,fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{ color: secondaryColor, fontSize: 12,fontWeight: 'bold'}}>{item.telefono}</Text>
        </View>
        <TouchableWithoutFeedback onPress={()=> Linking.openURL(`tel:${item.telefono}`)}>
        <View style={{flex: 0.10}}>
          
            <IconPhone width={26} height={26} fill={secondaryColor} />
          
        </View>
        </TouchableWithoutFeedback>
    </View>);
}
function DettaglioFascicoli(props) {
  const { route } = props;
  const [filePath, setFilePath] = useState('');
  let schema = Platform.OS === 'ios' ? 'maps://app?saddr=' : 'google.navigation:q='
  const data = [{name: `Proprietario - ${route.params.data.obj?.contattiP?.nome}`,telefono: route.params.data.obj?.contattiP?.numero},{name: `Portiere - ${route.params.data.obj?.contattiPortiere?.nome}`,telefono: route.params.data.obj?.contattiPortiere?.numero},{name: `Amministratore - ${route.params.data.obj?.contattiAmministratore?.nome}`,telefono: route.params.data.obj?.contattiAmministratore?.numero}]
  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };
  const createPDF = async () => {
    
      let options = {
        //Content to print
        html:
          '<h1 style="text-align: center;"><strong>Hello Guyssss</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
        //File Name
        fileName: 'test',
        //File directory
        directory: 'Documents',
      };
      try {
        let file = await RNHTMLtoPDF.convert(options)
        Share.share({
          // title: "This is my report ",
          // message: "Message:",
          url: file.filePath,
          // subject: "Report",
      })
      } catch (err){
        console.log(err)
      }
    
  };
    return (
      <ScrollView >
        <Image
          source={{
            uri: route.params.data.obj?.imgPath,
            }}
          style={{padding: 16, height: 240}}
        /> 

        <View style={{height: 2, marginRight: 16, marginLeft: 16, marginTop: 16, backgroundColor: secondaryColor}}/>
            
        <View style={{height: 250,marginLeft: 16, marginRight: 16,paddingTop:16 }}>
        <Text style={{ color: primaryColor, fontSize: 22,fontWeight:'bold'}}>{route.params.data.obj?.indirizzo}</Text>
            <Text style={{ color: secondaryColor, fontSize: 18,}}>Nota</Text>
            <Text style={{ color: primaryColor, fontSize: 18, lineHeight: 30}}>{route.params.data.obj?.note}</Text>
        <LinearGradient
          colors={['transparent', 'white' ]}
          style={styles.linearGradient}
        >
         
        </LinearGradient>
        </View>

        <View style={{flexDirection: 'row', height: 100, marginRight: 16,marginLeft: 16,marginBottom: 16, backgroundColor: white, borderColor: secondaryColor, borderRadius: 6, borderWidth: 1, elevation: 4}}>
            <TouchableWithoutFeedback onPress={()=> Linking.openURL(`${schema}${route.params.data.obj?.indirizzo}&mode=a`)}>
                <View style={{flexDirection:'column', flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 2, marginBottom: 8, borderRightWidth: 1, borderRightColor: secondaryColor, alignItems:'center',paddingTop: 18}}>
                    <IconMap width={26} height={26} fill={secondaryColor}/>
                    <Text style={styles.text} >Avvia Navigatore</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>route.params.navigation.navigate('New Dossier', {data: route.params.data.obj,id:route.params.data.id, navigation: route.params.navigation})}>
                <View style={{flexDirection:'column',flex: 0.333,marginRight: 2,marginLeft: 2,marginTop: 2, marginBottom: 8, alignItems:'center',paddingTop: 18}}>
                    <IconBook width={26} height={26} fill={secondaryColor}/>
                    <Text style={styles.text} >Leggi Fascicolo</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={createPDF}>
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