
 const pdf = (item) =>{
  html: `<html>
  <head>
    <title>(Indirizzo) ${item.indirizzo}</title>
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
                      
                        
                        <h1 style="font-family:verdana;">*** (Indirizzo)</h1>
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
              <h4>*** (Napoli o Provincia)</h4>
                            
                            <p> M² Locale : *** (MetriQuadrati)</p>
                            
                            <p> Scala : *** (Scala)</p>
                            
                            <p> Piano : *** (Piano)</p>
                            
                            <p> Interno : *** (Interno)</p>
                            
            </header>
                        
                        <hr />
                        
            <section class="wrapper style5">
              <div class="inner">

                                <!-- Caratteristiche Immobile-->
                                
                                <h2>Caratteristiche Immobile</h2>
                                <h4>*** (Residenziale o Commerciale o Provincia)</h4>
                                
                                
                                <table>
                                    
                                  <tr>
                                    <th>Caratteristiche</th>
                                    <th>✔ or ✘</th>
                                    
                                    
                                  </tr>
                                  <tr>
                                    <td>Posto Auto</td>
                                    <td>*** (Posto Auto)</td>
                                    
                                  <tr>
                                    <td>Balconi</td>
                                    <td>*** (Balconi)</td>
                                    
                                    <tr>
                                      <td>Terrazzo</td>
                                      <td>*** (Terrazzo)</td>
                                      
                                    <tr>
                                      <td>Rivestimenti</td>
                                      <td>*** (Rivestimenti)</td>
                                      
                                      <tr>
                                        <td>Infissi Interni</td>
                                        <td>*** (Infissi Interni)</td>
                                        
                                      <tr>
                                        <td>Riscaldamento</td>
                                        <td>*** ( Riscaldamento)</td>
                                        
                                        <tr>
                                          <td>Giardino</td>
                                          <td>*** ( Giardino)</td>
                                          
                                        <tr>
                                          <td>Ascensore</td>
                                          <td>*** (Ascensore)</td>
                                          
                                          <tr>
                                            <td>Pavimento</td>
                                            <td>*** (Nome Pavimento)</td>
                                            
                                          <tr>
                                            <td>Infissi Esterni</td>
                                            <td>*** (Infissi Esterni)</td>
                                            
                                            
                                    </table>
                                 

                                <br>
                                
                                
                               
                <hr />

                                <!-- Caratteristiche Fabbricato-->
                                
                <h2>Caratteristiche Fabbricato</h2>
                                
                                <p> Anno Fabbricato : *** (Anno Fabbricato)</p>
                                
                                <p> Struttura : *** (Struttura)</p>
                                
                                <p> Piani Fabbricato : *** (Piani Fabbricato)</p>
                                
                                <p> Citofono : *** (Citofono)</p>
                                
                                <hr />

                                <!-- Situazione Finanziaria-->
                                
                                <h2>Situazione Finanziaria <small>(€/Mese)</small></h2>
                                
                                <p> Condominio : *** (Spese Condominio mensili) or ✘</p>
                                
                                <p> Riscaldamento : *** (Spese Riscaldamento mensili) or ✘</p>
                                
                                
                                <hr />

                                <!-- Situazione Locativa-->
                                
                                <h2>Situazione Locativa</h2>
                                
                                <p> Situazione Locativa : *** (Libero ,  propr or Locato)</p>
                                
                                <p> Affitto Mensile € : *** (Affitto Mensile)</p>
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
                                    <td>*** (Nome Proprietario)</td>
                                    <td>*** (Numero Proprietario)</td>
                                  </tr>
                                  <tr>
                                    <td>Locatario</td>
                                    <td>*** (Nome Locatario)</td>
                                    <td>*** (Numero Locatario)</td>
                                  </tr>
                                  <tr>
                                    <td>Portiere</td>
                                    <td>*** (Nome Portiere)</td>
                                    <td>*** (Numero Portiere)</td>
                                  </tr>
                                  <tr>
                                    <td>Amministratore</td>
                                    <td>*** (Nome Amministratore)</td>
                                    <td>*** (Numero Amministratore)</td>
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
                                    
                                    <td>*** (Punteggio)</td>
                                    
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
                                    
                                    <td>*** (Prezzo)</td>
                                    
                                  </tr>
                                </table>

                                
                                
                                
                                <!-- Immagine -->
                                
                                <h2>Immagine</h2>
                                <img src="***(foto.file)" alt="***(foto.file)" width="460" height="345">
                                
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
</html>`
 };
export default pdf;