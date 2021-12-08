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
    
  } from 'react-native';
import { primaryColor, secondaryColor, white } from '../../constants/Colors';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Share from 'react-native-share';
import IconMap from '../../assets/images/map.svg';
import IconBook from '../../assets/images/book.svg'
import IconPhone from '../../assets/images/telephone.svg';
import IconExport from '../../assets/images/export.svg';
import LinearGradient from 'react-native-linear-gradient'
import Share from 'react-native-share';
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
  let schema = Platform.OS === 'ios' ? 'maps://app?saddr=' : 'google.navigation:q='
  const data = [{name: `Proprietario - ${route.params.data.obj?.contattiP?.nome}`,telefono: route.params.data.obj?.contattiP?.numero},{name: `Portiere - ${route.params.data.obj?.contattiPortiere?.nome}`,telefono: route.params.data.obj?.contattiPortiere?.numero},{name: `Amministratore - ${route.params.data.obj?.contattiAmministratore?.nome}`,telefono: route.params.data.obj?.contattiAmministratore?.numero}]
  const createPDF = async () => {
    
      let options = {
        //Content to print
        html:
        `<html>
        <head>
          <title>${route.params.data.obj?.indirizzo}</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
              <style>
              table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
      
              td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
              }
      
              tr:nth-child(even) {
                background-color: #dddddd;
              }
              </style>
          
        </head>
          
          <style>
          table, th, td {
            border:1px solid black;
          }
          </style>
         
          
        <body class="is-preload">
      
              <hr />
          <!-- Page Wrapper -->
            <div id="page-wrapper">
      
              <!-- Header -->
                <header id="header">
                            
                              
                              <h1 style="font-family:verdana;">${route.params.data.obj?.indirizzo ? route.params.data.obj?.indirizzo : '' }</h1>
                  <nav id="nav">
                    <ul>
                                      </font>
                                      <hr />
                                      <!--
                      <li class="special">
                        <a href="#menu" class="menuToggle"><span>Menu</span></a>
                        <div id="menu">
                          <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </header>
                                      
                                      -->
      
              <!-- Ubicazione immobile-->
                <article id="main">
                  <header>
                                  
                    <h2>Ubicazione immobile</h2>
                    <h4>${route.params.data.obj?.city === 0 ? 'Napoli' : 'Provincia' }</h4>
                                  
                                  <p> M² Locale : ${route.params.data.obj?.metri ? route.params.data.obj?.metri : '' } </p>
                                  
                                  <p> Scala : ${route.params.data.obj?.scala ? route.params.data.obj?.scala : '' }</p>
                                  
                                  <p> Piano : ${route.params.data.obj?.piano ? route.params.data.obj?.piano : '' }</p>
                                  
                                  <p> Interno : ${route.params.data.obj?.interno ? route.params.data.obj?.interno : '' }</p>
                                  
                  </header>
                              
                              <hr />
                              
                  <section class="wrapper style5">
                    <div class="inner">
      
                                      <!-- Caratteristiche Immobile-->
                                      
                                      <h2>Caratteristiche Immobile</h2>
                                      <h4>${route.params.data.obj?.tipology === 0 ? 'Residenziale': route.params.data.obj?.tipology === 1 ? 'Commerciale' : 'Box Auto'}</h4>
                                      
                                      
                                      <table>
                                          
                                        <tr>
                                          <th>Caratteristiche</th>
                                          <th>✔ or ✘</th>
                                          
                                          
                                        </tr>
                                        <tr>
                                          <td>Posto Auto</td>
                                          <td>${route.params.data.obj?.postoAuto ? '✔': '✘'}</td>
                                          
                                        <tr>
                                          <td>Balconi</td>
                                          <td>${route.params.data.obj?.balconi ? '✔': '✘'}</td>
                                          
                                          <tr>
                                            <td>Terrazzo</td>
                                            <td>${route.params.data.obj?.terrazzi ? '✔': '✘'}</td>
                                            
                                          <tr>
                                            <td>Rivestimenti</td>
                                            <td>${route.params.data.obj?.rivestimenti ? '✔': '✘'}</td>
                                            
                                            <tr>
                                              <td>Infissi Interni</td>
                                              <td>${route.params.data.obj?.infissiInterni ? '✔': '✘'}</td>
                                              
                                            <tr>
                                              <td>Riscaldamento</td>
                                              <td>${route.params.data.obj?.riscaldamento ? '✔': '✘'}</td>
                                              
                                              <tr>
                                                <td>Giardino</td>
                                                <td>${route.params.data.obj?.giardino ? '✔': '✘'}</td>
                                                
                                              <tr>
                                                <td>Ascensore</td>
                                                <td>${route.params.data.obj?.ascensore ? '✔': '✘'}</td>
                                                
                                                <tr>
                                                  <td>Pavimento</td>
                                                  <td>${route.params.data.obj?.pavimenti ? '✔': '✘'}</td>
                                                  
                                                <tr>
                                                  <td>Infissi Esterni</td>
                                                  <td>${route.params.data.obj?.infissiEsterni ? '✔': '✘'}</td>
                                                  
                                                  
                                          </table>
                                       
      
                                      <br>
                                      
                                      
                                     
                      <hr />
      
                                      <!-- Caratteristiche Fabbricato-->
                                      
                      <h2>Caratteristiche Fabbricato</h2>
                                      
                                      <p> Anno Fabbricato : ${route.params.data.obj?.annoFabbricato ? route.params.data.obj?.annoFabbricato : '' }</p>
                                      
                                      <p> Struttura : ${route.params.data.obj?.struttura ? route.params.data.obj?.struttura : '' }</p>
                                      
                                      <p> Piani Fabbricato : ${route.params.data.obj?.pianiFabbricato ? route.params.data.obj?.pianiFabbricato : '' }</p>
                                      
                                      <p> Citofono : ${route.params.data.obj?.citofono ? route.params.data.obj?.citofono : '' }</p>
                                      
                                      <hr />
      
                                      <!-- Situazione Finanziaria-->
                                      
                                      <h2>Situazione Finanziaria <small>(€/Mese)</small></h2>
                                      
                                      <p> Condominio : ${route.params.data.obj?.situazioneSCM ? route.params.data.obj?.situazioneSCM : '✘'}</p>
                                      
                                      <p> Riscaldamento : ${route.params.data.obj?.situazioneSRM ? route.params.data.obj?.situazioneSRM : '✘'}</p>
                                      
                                      
                                      <hr />
      
                                      <!-- Situazione Locativa-->
                                      
                                      <h2>Situazione Locativa</h2>
                                      
                                      <p> Situazione Locativa : ${route.params.data.obj?.situazioneLocativa === 0 ? 'Libero': route.params.data.obj?.situazioneLocativa === 1 ? 'Propr.' : 'Locato'}</p>
                                      
                                      <p> Affitto Mensile € : ${route.params.data.obj?.situazioneLocativaPrezzo ? route.params.data.obj?.situazioneLocativaPrezzo : '' }</p>
                                      <p></p>
      
                                      <hr />
                                      <p></p>
                                      <hr />
      
                                      <!-- Contatti -->
                                      
                                      <section class="wrapper style5">
                                          <div class="inner">
                                      
                                     
                                      
                                      
      
                                      <h2>Contatti</h2>
      
                                      <table>
                                          
                                        <tr>
                                          <th>Ruolo</th>
                                          <th>Nome</th>
                                          <th>Numero</th>
                                          
                                        </tr>
                                        <tr>
                                          <td>Proprietario</td>
                                          <td>${route.params.data.obj?.contattiP?.nome ? route.params.data.obj?.contattiP?.nome : ''}</td>
                                          <td>${route.params.data.obj?.contattiP?.numero ? route.params.data.obj?.contattiP?.numero : ''}
                                        </tr>
                                        <tr>
                                          <td>Locatario</td>
                                          <td>${route.params.data.obj?.contattiLocatario?.nome ? route.params.data.obj?.contattiLocatario?.nome : ''}</td>
                                          <td>${route.params.data.obj?.contattiLocatario?.numero ? route.params.data.obj?.contattiLocatario?.numero : ''}
                                        </tr>
                                        <tr>
                                          <td>Portiere</td>
                                          <td>${route.params.data.obj?.contattiPortiere?.nome ? route.params.data.obj?.contattiPortiere?.nome : ''}</td>
                                          <td>${route.params.data.obj?.contattiPortiere?.numero ? route.params.data.obj?.contattiPortiere?.numero : ''}
                                        </tr>
                                        <tr>
                                          <td>Amministratore</td>
                                          <td>${route.params.data.obj?.contattiAmministratore?.nome ? route.params.data.obj?.contattiAmministratore?.nome : ''}</td>
                                          <td>${route.params.data.obj?.contattiAmministratore?.numero ? route.params.data.obj?.contattiAmministratore?.numero : ''}
                                        </tr>
      
                                      
                                    </table>
      
                                      <br>
                                      
                                      <hr />
                                      <p></p>
                                      <hr />
      
                                      <!-- Punteggio Fascicolo -->
       
                                      <h2>Punteggio Importanza Fascicolo <small>(0/10)</small> </h2>
                                      
                                      <table style="width:100%">
                                        <tr>
                                          
                                          <td>Punteggio</td>
                                          
                                        </tr>
                                        <tr>
                                          
                                          <td>${route.params.data.obj?.punteggio ? route.params.data.obj?.punteggio : '' }</td>
                                          
                                        </tr>
                                      </table>
                                      <br>
                                      
                                      <!-- Prezzo -->
                                      
                                      <h2>Prezzo immobile</h2>
                                      
                                    
      
                                      <table style="width:100%">
                                        <tr>
                                          
                                          <td>Prezzo</td>
                                          
                                        </tr>
                                        <tr>
                                          
                                          <td>${route.params.data.obj?.prezzo ? route.params.data.obj?.prezzo : '' }</td>
                                          
                                        </tr>
                                      </table>
      
                                      
                                      
                                      
                                      <!-- Immagine -->
                                      
                                      <h2>Immagine</h2>
                                      <img src="${route.params.data.obj?.imgPath  ? route.params.data.obj?.imgPath : '' }" alt="${route.params.data.obj?.imgPath ? route.params.data.obj?.imgPath : '' }" width="460" height="345">
                                      
                                      <hr />
                                      
                                      
                                      <!-- Separatore footer -->
                                      
                                      <br>
                                      <br>
                                      <br>
      
                    </div>
                  </section>
                </article>
      
              <!-- Footer -->
                <footer id="footer">
                  
                              <h6>
                  
                    <li>&copy;  FiaipApp: <a href="http://junistartup.it/DownloadFiApp.html#https://drive.google.com/file/d/1kSX0s1-kmSr64UOAsYWAGx4DXE5L64i1/view?usp=sharing"> FiaipApp WebPage</a></li>
                                  
                                  <ul class="copyright">
                                      <li>  IOS Apple: <a href="https://apps.apple.com/it/app/fiaip-app/id1575701594">Download App</li></a>
                                      
                                      
                                          <li>PLAY Android: <a href="http://html5up.net">Download App</li></a>
                                  
                              </h6>
                               
                  </ul>
                </footer>
      
            </div>
      
          
      
        </body>
      </html>`,
        //File Name
        fileName: `Fascicolo - ${route.params.data.obj?.indirizzo}`,
        //File directory
        directory: 'Documents',
        base64: true
      };
      try {
        let file = await RNHTMLtoPDF.convert(options)
        Share.open({
          // title: "This is my report ",
          // message: "Message: fascicolo",
          url: Platform.OS === 'android' ? `data:application/pdf;base64,${file.base64}` : file.filePath,
          title: 'Share file',
          failOnCancel: false,
          saveToFiles: true,
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