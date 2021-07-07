import React from 'react';
import {
    Text,
    ScrollView,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    Alert,
  } from 'react-native';
  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { openDatabase } from 'react-native-sqlite-storage';
import CheckBox from '@react-native-community/checkbox';
import Slider from '@react-native-community/slider';

import styles from './styles.js';
import { primaryColor, white } from '../../constants/Colors.js';

import IconMap from '../../assets/images/map.svg';
import DeleteIcon from '../../assets/images/delete.svg';
import GalleryIcon from '../../assets/images/gallery.svg';
import CameraIcon from '../../assets/images/camera.svg';

  function NewDossier(props){
      const { route } = props
    const db = openDatabase({ name: 'FiaipDB.db' });
    const [dossier, setDossier] = React.useState(props.route.params.data ? props.route.params.data : null);
    const clean = () => {
      db.transaction(function (txn) {
        txn.executeSql(`DELETE FROM dossier WHERE dossier_id=${route.params.id}`,[],     
        (tx, results) => {
          if (results.rowsAffected > 0) {
            createAlertOneButton("Fascicolo Cancellato")
          } else createAlertOneButton("Fascicolo non cancellato");
        }
        )
      })
        };    

    const writeDb = () =>{
        
        db.transaction(function (txn) {
            //txn.executeSql('DROP TABLE IF EXISTS dossier', []);
            
            txn.executeSql('CREATE TABLE IF NOT EXISTS dossier(dossier_id INTEGER PRIMARY KEY NOT NULL, dossier_obj VARCHAR(300))', []);
            route.params.id ? txn.executeSql(`UPDATE dossier set dossier_obj=? where dossier_id=${route.params.id}` , [JSON.stringify(dossier)],
            (tx, results) => {
              if (results.rowsAffected > 0) {
                createAlertOneButton("Fascicolo Modificato")
              } else createAlertOneButton("Fascicolo non salvato");
            }) :
            txn.executeSql('INSERT INTO dossier (dossier_obj) VALUES (:dossier_obj)', [JSON.stringify(dossier)],
            (tx, results) => {
                if (results.rowsAffected > 0) {
                  createAlertOneButton("Fascicolo Salvato")
                } else createAlertOneButton("Fascicolo non salvato");
              })
        });
    };  
    
    
const launchAndroidCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, (response) => {
      console.log(response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        try {
          setDossier({...dossier, imgPath: response.assets[0].uri})
        } catch (error) {
          alert("Accettare permessi")
        }
        
      }
    });
  }

  const launchGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        try {
          setDossier({...dossier, imgPath: response.assets[0].uri})
        } catch (error) {
          alert("Accettare permessi")
        }
        
      }
    });
  }

  const createAlertTwoButton = () =>
  Alert.alert(
    "Vuoi eliminare la foto?",
    "",
    [
      {
        text: "Si",
        onPress: () => setDossier({...dossier, imgPath: ''}),
        style: "cancel"
      },
      { text: "No"}
    ]
  );

  const createAlertOneButton = (text) =>
  Alert.alert(
    text,
    "",
    [
      {
        text: "Ok",
        onPress:()=> {props.route.params.navigation.navigate('Home')},
        style: "cancel"
      },
    ]
  );
      return(
          <ScrollView style={{backgroundColor: white}} >
                <Text style={styles.text}>Ubicazione Immobili</Text>
                <View style={styles.situazioneLocativaView}>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, city: 0})}>
                        <View style={[styles.cityButtonOne,{backgroundColor: dossier?.city === 0 ? primaryColor : white }]}>
                        <Text style={[styles.locativaText, {color: dossier?.city === 0 ? white : primaryColor }]}>Napoli</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, city: 1})}>
                        <View style={[styles.cityButtonTwo,{ backgroundColor: dossier?.city === 1 ? primaryColor : white}]}>
                        <Text style={[styles.locativaText, {color: dossier?.city === 1 ? white : primaryColor }]}>Provincia</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                
                <TextInput value={dossier?.indirizzo} style={styles.textField} placeholder=' Aggiungi indirizzo' onChangeText={text => setDossier({...dossier, indirizzo: text})}/>
                <TextInput value={dossier?.metri} style={styles.textField} placeholder=' Metri quadrati' onChangeText={text => setDossier({...dossier, metri: text})}/>
                <TextInput value={dossier?.scala} style={styles.textField} placeholder=' Scala' onChangeText={text => setDossier({...dossier, scala: text})}/>
                <TextInput value={dossier?.piano} style={styles.textField} placeholder=' Piano' onChangeText={text => setDossier({...dossier, piano: text})}/>
                {/* TODO */}
                <TextInput value={dossier?.interno} style={styles.textField} placeholder=' Interno' onChangeText={text => setDossier({...dossier, interno: text})}/>
                <Text style={styles.text}>Caratteristiche Immobili</Text>
                <View style={styles.situazioneLocativaView}>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, tipology: 0})}>
                        <View style={[styles.locativaButtonOne,{backgroundColor: dossier?.tipology === 0 ? primaryColor : white }]}>
                        <Text style={[styles.locativaText, {color: dossier?.tipology === 0 ? white : primaryColor }]}>Residenziale</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, tipology: 1})}>
                        <View style={[styles.locativaButtonTwo,{ backgroundColor: dossier?.tipology === 1 ? primaryColor : white}]}>
                        <Text style={[styles.locativaText, {color: dossier?.tipology === 1 ? white : primaryColor }]}>Commerciale</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, tipology: 2})}>
                        <View style={[styles.locativaButtonThree,{backgroundColor: dossier?.tipology === 2 ? primaryColor : white}]}>
                            <Text style={[styles.locativaText, {color: dossier?.tipology === 2 ? white : primaryColor }]}>Box Auto</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.containerCheckBox}>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.postoAuto}
                        onValueChange={(newValue) => setDossier({...dossier, postoAuto: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Posto Auto</Text>
                    </View>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.riscaldamento}
                        onValueChange={(newValue) => setDossier({...dossier, riscaldamento: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Riscaldamento</Text>
                    </View>
                </View>
                <View style={styles.containerCheckBox}>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.balconi}
                        onValueChange={(newValue) => setDossier({...dossier, balconi: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Balconi</Text>
                    </View>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.giardino}
                        onValueChange={(newValue) => setDossier({...dossier, giardino: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Giardino</Text>
                    </View>
                </View>
                <View style={styles.containerCheckBox}>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.terrazzi}
                        onValueChange={(newValue) => setDossier({...dossier, terrazzi: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Terrazzi</Text>
                    </View>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.ascensore}
                        onValueChange={(newValue) => setDossier({...dossier, ascensore: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Ascensore</Text>
                    </View>
                </View>
                <View style={styles.containerCheckBox}>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.rivestimenti}
                        onValueChange={(newValue) => setDossier({...dossier, rivestimenti: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Rivestimenti</Text>
                    </View>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.pavimenti}
                        onValueChange={(newValue) => setDossier({...dossier, pavimenti: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Pavimenti</Text>
                    </View>
                </View>
                <View style={styles.containerCheckBox}>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.infissiEsterni}
                        onValueChange={(newValue) => setDossier({...dossier, infissiEsterni: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Infissi Esterni</Text>
                    </View>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                        boxType="square"
                        style={styles.checkBox}
                        value={dossier?.infissiInterni}
                        onValueChange={(newValue) => setDossier({...dossier, infissiInterni: newValue})}
                        />
                        <Text style={styles.textCheckBox}>Infissi Interni</Text>
                    </View>
                </View>
                <Text style={styles.text}>Caratteristiche Fabbricato</Text>
                <TextInput value={dossier?.annoFabbricato} style={styles.textField} placeholder='Anno Fabbricato' onChangeText={text => setDossier({...dossier, annoFabbricato: text})}/>
                <TextInput value={dossier?.struttura} style={styles.textField} placeholder='Struttura' onChangeText={text => setDossier({...dossier, struttura: text})}/>
                <TextInput value={dossier?.pianiFabbricato} style={styles.textField} placeholder='Piani Fabbricato' onChangeText={text => setDossier({...dossier, pianiFabbricato: text})}/>
                <TextInput value={dossier?.citofono} style={styles.textField} placeholder='Citofono' onChangeText={text => setDossier({...dossier, citofono: text})}/>
                <Text style={styles.text}>Situazione Finanziaria</Text>
                <Text style={styles.subtext}>Spese Condominio mensili</Text>
                <Text style={{textAlign:'center',marginTop: 8}}>{dossier?.situazioneSCM}</Text>
                <Slider
                    value={dossier?.situazioneSCM}
                    style={{margin: 16}}
                    step={25}
                    minimumValue={0}
                    maximumValue={2000}
                    minimumTrackTintColor={primaryColor}
                    maximumTrackTintColor={primaryColor}
                    thumbTintColor={primaryColor}
                    onValueChange={sliderValue => setDossier({...dossier, situazioneSCM:sliderValue})}
                />
                <Text style={styles.subtext}>Spese Riscaldamento mensili</Text>
                <Text style={{textAlign:'center',marginTop: 8}}>{dossier?.situazioneSRM}</Text>
                <Slider
                    value={dossier?.situazioneSRM}
                    style={{margin: 16}}
                    step={10}
                    minimumValue={0}
                    maximumValue={500}
                    minimumTrackTintColor={primaryColor}
                    maximumTrackTintColor={primaryColor}
                    thumbTintColor={primaryColor}
                    onValueChange={sliderValue => setDossier({...dossier, situazioneSRM:sliderValue})}
                />
                <Text style={styles.text}>Situazione Locativa</Text>
                <View style={styles.situazioneLocativaView}>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, situazioneLocativa: 0})}>
                        <View style={[styles.locativaButtonOne,{backgroundColor: dossier?.situazioneLocativa === 0 ? primaryColor : white }]}>
                        <Text style={[styles.locativaText, {color: dossier?.situazioneLocativa === 0 ? white : primaryColor }]}>Libero</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, situazioneLocativa: 1})}>
                        <View style={[styles.locativaButtonTwo,{ backgroundColor: dossier?.situazioneLocativa === 1 ? primaryColor : white}]}>
                        <Text style={[styles.locativaText, {color: dossier?.situazioneLocativa === 1 ? white : primaryColor }]}>Propr.</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> setDossier({...dossier, situazioneLocativa: 2})}>
                        <View style={[styles.locativaButtonThree,{backgroundColor: dossier?.situazioneLocativa === 2 ? primaryColor : white}]}>
                            <Text style={[styles.locativaText, {color: dossier?.situazioneLocativa === 2 ? white : primaryColor }]}>Locato</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <TextInput value={dossier?.situazioneLocativaPrezzo} style={styles.textField} placeholder=' Affitto Mensile' onChangeText={text => setDossier({...dossier, situazioneLocativaPrezzo: text})}/>
                <Text style={styles.text}>Contatti</Text>
                <TextInput value={dossier?.contattiP ? dossier?.contattiP.nome : ''} style={styles.textField} placeholder=' Nome Proprietario' onChangeText={text => setDossier({...dossier, contattiP: {nome: text , numero: dossier?.contattiP ? dossier?.contattiP.numero : ''}})}/> 
                <TextInput value={dossier?.contattiP ? dossier?.contattiP.numero : ''} style={styles.textFieldContact} placeholder=' Numero telefono Proprietario' onChangeText={text => setDossier({...dossier, contattiP: {nome:dossier?.contattiP ? dossier?.contattiP.nome : '', numero: text}})}/> 
                <TextInput value={dossier?.contattiLocatario ? dossier.contattiLocatario.nome : ''} style={styles.textField} placeholder='Nome Locatario' onChangeText={text => setDossier({...dossier, contattiLocatario: {nome: text , numero: dossier?.contattiLocatario ? dossier?.contattiLocatario.numero : ''}})}/> 
                <TextInput value={dossier?.contattiLocatario ? dossier.contattiLocatario.numero : ''} style={styles.textFieldContact} placeholder='Numero telefono Locatario' onChangeText={text => setDossier({...dossier, contattiLocatario: {nome:dossier?.contattiLocatario ? dossier?.contattiLocatario.nome : '', numero: text}})}/> 
                <TextInput value={dossier?.contattiPortiere ? dossier.contattiPortiere.nome : ''} style={styles.textField} placeholder='Nome Portiere' onChangeText={text => setDossier({...dossier, contattiPortiere: {nome: text , numero: dossier?.contattiPortiere ? dossier?.contattiPortiere.numero : ''}})}/> 
                <TextInput value={dossier?.contattiPortiere ? dossier.contattiPortiere.numero : ''} style={styles.textFieldContact} placeholder='Numero telefono Portiere' onChangeText={text => setDossier({...dossier, contattiPortiere: { nome:dossier?.contattiPortiere ? dossier?.contattiPortiere.nome : '', numero: text}})}/> 
                <TextInput value={dossier?.contattiAmministratore ? dossier.contattiAmministratore.nome : ''} style={styles.textField} placeholder='Nome Amministratore' onChangeText={text => setDossier({...dossier, contattiAmministratore: {nome: text , numero: dossier?.contattiAmministratore ? dossier?.contattiAmministratore.numero : ''}})}/> 
                <TextInput value={dossier?.contattiAmministratore ? dossier.contattiAmministratore.numero : ''} style={styles.textFieldContact} placeholder='Numero telefono Amministratore' onChangeText={text => setDossier({...dossier, contattiAmministratore: { nome:dossier?.contattiAmministratore ? dossier?.contattiAmministratore.nome : '', numero: text}})}/> 
                <Text style={styles.text}>Punteggio Importanza Fascicolo</Text>
                <Text style={{textAlign:'center',marginTop: 8}}>{dossier?.punteggio}</Text>
                <Slider
                    value={dossier?.punteggio}
                    style={{margin: 16}}
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor={primaryColor}
                    maximumTrackTintColor={primaryColor}
                    thumbTintColor={primaryColor}
                    onValueChange={sliderValue => setDossier({...dossier, punteggio:sliderValue})}
                />
                <Text style={styles.text}>Prezzo</Text>
                <TextInput value={dossier?.prezzo} style={styles.textField} placeholder='Prezzo' onChangeText={text => setDossier({...dossier, prezzo: text})}/> 
                <Text style={styles.text}>Note</Text>
                <TextInput value={dossier?.note} style={styles.textFieldNote} placeholder='' onChangeText={text => setDossier({...dossier, note: text})}/> 
                {dossier?.imgPath ? <View style={styles.containerViewImage}>
                                        <Image
                                        source={{
                                            uri: dossier?.imgPath,
                                        }}
                                        style={styles.containerImage}
                                    /> 
                                        <TouchableWithoutFeedback onPress={()=> createAlertTwoButton()}>
                                            <DeleteIcon style={styles.imageRemove} width={40} height={40} fill={primaryColor}/>
                                        </TouchableWithoutFeedback>
                                    </View>: 
                                    <View style={styles.containerViewButton}>
                                        <TouchableWithoutFeedback onPress={()=> launchGallery()}>
                                                <View style={{ alignSelf: 'center',alignContent:'center'}} >
                                                    <GalleryIcon style={styles.imageRemove} width={60} height={60} fill={primaryColor}/>
                                                    {/* <Text style={[styles.textButton,{textAlign:'center',alignItems:'center',justifyContent:'center'}]} >Galleria</Text> */}
                                                </View>
                                        </TouchableWithoutFeedback>
                                        <TouchableWithoutFeedback onPress={()=> launchAndroidCamera()}>
                                                <View style={{alignSelf: 'center',alignContent:'center'}}>
                                                    <CameraIcon style={styles.imageRemove} width={60} height={60} fill={primaryColor}/>
                                                    {/* <Text style={styles.textButton} >Camera</Text> */}
                                                </View>
                                        </TouchableWithoutFeedback>
                </View>}
                <View style={styles.containerButton}>
                    <TouchableWithoutFeedback onPress={()=> clean()}>
                        <View style={styles.buttonOne}>
                            <IconMap width={26} height={26} fill={primaryColor}/>
                            <Text style={styles.textButton} >Cancella Fascicolo</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> writeDb()}>
                        <View style={styles.buttonTwo}>
                            <IconMap width={26} height={26} fill={primaryColor}/>
                            <Text style={styles.textButton} >Salva Fascicolo</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
          </ScrollView>
      );
  };

  export default NewDossier;