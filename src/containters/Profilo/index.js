import React from 'react';
import {
    Text,
    ScrollView,
    View,
  } from 'react-native';
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  function Profilo(){
      return(
          <ScrollView>
                <B>GUIDA ALLA LETTURA DEI VALORI: INDICAZIONI ED AVVERTENZE </B>
                <Text>
                Le nostre quotazioni immobiliari sono da considerarsi un ausilio alla stima finale per cui hanno un carattere puramente indicativo e non devono essere considerate  sostitutive di una valutazione realizzata da un esperto del settore. I valori riportati sono suscettibili di consistenti variazioni applicati al singolo caso, in relazione al particolare di diritto, di conservazione, alla qualità all'ubicazione dell'immobile. Pertanto per le caratteristiche di ogni singola unità è necessario il ricorso alle specifiche conoscenze ed esperienze professionali degli agenti immobiliari ed esperti del settore.{"\n"}
                </Text>
                <B>Criteri di lettura dei dati dell’applicazione</B>
                <Text>I valori trattati sono i seguenti:{"\n"} </Text>
                <B>Valore di mercato unitario:</B>
                <Text>
                per valore di mercato unitario si intende il prezzo medio in euro di un metro quadro dell'immobile da stimare, al netto di Iva o tasse di registro.{"\n"}
                </Text>
                <B>Valore di locazione unitario:</B>
                <Text>
                per valore di locazione unitario si intende il prezzo medio in euro di un metro quadro al mese, dell'immobile di cui si vuole conoscere il reddito. 
                Il presente listino quota i valori locativi dei contratti a canone libero. Quindi, per una più accurata valutazione, si dovrà tener conto della tipologia del contratto. {"\n"}
                </Text>
                <B>ND</B>
                <Text>
                questa abbreviazione indica insufficienza di immobili relativi alla corrispondente area o tipologia per l'individuazione dei dati realmente indicativi. 
                I valori sono espressi al metro quadrato e devono riferirsi ai seguenti immobili tipo:{"\n"}
                - Appartamento con destinazione di civile abitazione, mediamente ristrutturato posto ad un piano intermedio, con superficie ricoperta di metri quadrati 100 circa, non arredato, classe energetica G;
                - Box con superficie di metri quadrati 15 circa;{"\n"}
                - Negozio, sito al piano terra con superficie di metri quadrati 50 circa, classe energetica G;{"\n"}

                I prezzi sono relativi alle transazioni effettivamente avvenute nelle zone indicate e devono essere intesi come media dei valori minimi e massimi relativi. Dalla determinazione dei prezzi sono escluse le situazioni equilibrate o atipiche; non sono stati infatti considerati quei valori riferiti ad immobili di particolare pregio o degrado comunque presentano caratteristiche non ordinarie.
                I valori sono riferiti ad immobili liberi, da intendersi senza vincoli giuridici di natura reale o obbligatoria e sono relativi a singole unità abitative “usate”, complessi abitativi immobiliari.
                A tali valori si è giunti mediante la media di dati reperiti attraverso una serie di indagini dirette e indirette, alle normali condizioni di mercato e non influenzati da situazioni e ho valutazioni particolarmente soggettive, tali da non poter rappresentare un dato attendibile, qualificativa mente qualitativamente e quantitativamente apprezzabile.

                In modo particolare si è tenuto conto del prezzo finale di tutte le transazioni effettivamente avvenute durante l’anno 2020 di cui si è potuto avere notizie certe e attendibili, delle informazioni degli agenti immobiliari, delle Stime dei periti e dei consulenti tecnici.
                La commissione è composta da rappresentanti del settore dei mediatori immobiliari. Suo il compito di verificare ed elabora i valori pervenuti in base alle informazioni in possesso dei componenti della stessa, nonché sulla base di ogni altro supporto che possa ritenere utile, al fine di conseguire la più elevata qualità ed attendibilità delle informazioni.
                Il metodo di rilevazione si evolve semestre per semestre, grazie a nuovi contributi e rilevatori, indispensabili all'utilizzo  della “app” sul web.

                I prezzi indicati possono essere incrementati o diminuiti in percentuale, in relazione all'ubicazione, alla tipologia immobiliare ed edilizia, al particolare stato di diritto, di conservazione, alla dimensione e qualità dell'immobile, all'indice di prestazione energetica, alla redditività dello stesso, della domanda e dell'offerta.
                Nel caso in cui un immobile è inserito in un contesto condominiale, è opportuno analizzare lo stato del condominio e le eventuali spese deliberate per le ristrutturazioni delle parti condominiali. All'esperienza del tecnico valutatore applicare i coefficienti incrementativi o decrementativi più opportuni.{"\n"}
                </Text>
                <B>Immobili occupati</B>
                <Text>
                Gli immobili occupati sono soggetti ad una riduzione di valore che, secondo il tipo, la durata, il reddito del contratto. Può oscillare tra il 10% e il 30%.{"\n"}
                </Text>
                <B>Immobili ristrutturati e immobili da ristrutturare</B>
                <Text>
                Gli immobili ristrutturati nel rispetto della normativa vigente possono avere un incremento se oggettivamente motivato e rapportato. Il valore di un subisce un calo se da ristrutturare. Vengono considerati da ristrutturare completamente gli immobili che richiedono il consolidamento statico strutturale. Oppure almeno tre dei seguenti interventi di manutenzione straordinaria:{"\n"}
                1) impianto idrico e servizi igienico-sanitari;{"\n"}
                2) impianto elettrico;{"\n"}
                3) impianto di riscaldamento;{"\n"}
                4) rifacimento pavimenti;{"\n"}
                5) rifacimento pareti, soffitti e solai;{"\n"}
                6) infissi interni ed esterni.{"\n"}
                </Text>
                <B>Coefficienti di Piano</B>
                <Text>
                Per i principali coefficienti di piano, per fabbricati superiori a tre piani, si considerano i seguenti correttivi:{"\n"}
                - piano semi interrato  -25% circa del prezzo quotato;{"\n"}
                - piano terra o primo piano: -10% / -20% del prezzo quotato;{"\n"}
                - piano attico: fino a + 20% il prezzo quotato{"\n"}
                Altri coefficienti da considerare sono quelli relativi alla: luminosità, l'orientamento, l'esposizione, la presenza di balconi e terrazzi, i servizi, la climatizzazione, l'età e le caratteristiche dello stabile, l'esistenza di parcheggio e trasporti.{"\n"}
                </Text>
                <B>Negozi - box</B>
                <Text>
                Per la classificazione delle suddette tipologie la quotazione può variare in rapporto a differenti fattori, incrementativi o decrementativi con particolari coefficienti riferiti a:{"\n"}
                </Text>
                <B>Per i box:</B>
                <Text>
                -	pertinenzialità;{"\n"}
                -	accessibilità;{"\n"}
                -	densità abitativa rispetto all'ubicazione;{"\n"}
                -	densità disponibilità di utenze.{"\n"}
                </Text>
                <B>Per i negozi:</B>
                <Text>
                -	potenzialità commerciali e densità abitativa relative all’ubicazione;{"\n"}
                -	stato degli impianti se a norma, di tipo ordinario o con finiture di pregio.{"\n"}
                </Text>
                <B>Determinazione della superficie commerciale</B>
                <Text>
                Per il computo della superficie commerciale l’agente immobiliare deve applicare la ex norma Uni 10750:2005 e successive modificazioni che riporta i seguenti criteri di computo:{"\n"}
                a)	la somma delle superfici coperte calpestabili comprensive delle quote delle superfici occupate dai muri interni e per metà quelli di confine;{"\n"}
                b)	le superfici ponderate ad uso esclusivo delle terrazze, balconi, patii e giardini.{"\n"}
                c)	le quote percentuali delle superfici delle pertinenze (cantine, posti auto coperti e scoperti, soffitte, box etc.){"\n"}

                Il computo delle superfici coperte deve essere effettuato con i seguenti criteri:{"\n"}
                a)	100% delle superfici calpestabili;{"\n"}
                b)	100% delle superfici delle pareti divisorie interne (non portanti);{"\n"}
                c)	50% delle superfici delle pareti portanti interne e perimetrali.{"\n"}

                Nel caso di immobili indipendenti  la percentuale di cui al punto c deve essere considerata al 100%.
                Il computo delle superfici di cui al punto c) non potrà eccedere del 10% della somma dei punti a) e b).

                Per il computo delle superfici scoperte dovranno essere utilizzati i seguenti criteri di ponderazione:{"\n"}
                a)	25% dei balconi e terrazzi scoperti;{"\n"}
                b)	35% dei balconi e terrazzi coperti (ossia chiusi su tre lati);{"\n"}
                c)	35% dei patii e porticati;{"\n"}
                d)	60% delle verande;{"\n"}
                e)	10% del lastrico solare di proprietà ed uso esclusivo;{"\n"}
                f)	15% dei giardini di appartamento;{"\n"}
                g)	10% dei giardini di ville e villini;{"\n"}
                h)	10% delle cantine e soffitte non abitabili,{"\n"}

                Anche in questo caso ulteriori variazioni arrivano da ubicazione e stato di conservazione. La stima ufficiale varia comunque immobile per immobile. 
                </Text>
              
          </ScrollView>
      );
  };

  export default Profilo;