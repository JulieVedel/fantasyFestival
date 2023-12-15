/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function GuestsOfHonour() {
  return (
    <div className="item">
      <div style={{ margin: 15, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Guests of Honour
        </Typography>
        <Typography variant="h6" gutterBottom>
          Siden sin start i 2015 har Fantasyfestivalen hvert år, med undtagelse af i 2021, haft besøg af en eller flere udenlandske forfattere.
        </Typography>
        <Typography variant="h6" gutterBottom>
          På siden her kan du læse mere om vores udenlandske gæster.
        </Typography>

        <Divider variant="middle" />

        <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
          <Typography variant="h5" gutterBottom>
            Tidligere Guests of Honour
          </Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Jim Butcher</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Jim Butcher var en af Fantasyfestivalens Guests of Honour i 2023.
                <br />
                Jim er en amerikansk fantasyforfatter, og forfatter til bestseller-serierne The Dresden Files, Codex Alera og steampunk-serien The Cinder Spires. De første to bind af The Dresden Files er oversat til dansk, og flere bind er på vej. Ud over bøgerne har Jim også skrevet adskillige noveller og graphic novels i Dresden Files-universet, ligesom serien også danner grundlag for en tv-serie.
                <br />
                Jim bor med sin familie i bjergene ved Denver, Colorado. Når han ikke skriver, er Jim en ivrig gamer og rollespiller, ligesom han også spiller guitar.
              </Typography>
              <Typography>
                Se også Jims
                {' '}
                <a href="https://www.jim-butcher.com/">hjemmeside</a>
                .
              </Typography>
              <Typography>
                Besøget på Fantasyfestivalen var arrangeret i samarbejde med forlaget Superlux.
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Aktiviteter%20og%20foredrag/2023/Jim-Butcher-770x1089.jpg" alt="Jim Butcher" width="100%" />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Johan Egerkrans</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Johan Egerkrans var Fantasyfestivalens udenlandske Guest of Honour i 2022.
                <br />
                Johan er en internationalt anerkendt svensk forfatter og illustrator, og har i mere end 20 år arbejdet med illustrationer mm. i bøger, spil, tegneserier og film.
                <br />
                Han er forfatter til flere illustrerede bøger med rødder i nordiske myter og sagnvæsener, hvoraf to, Nordiske guder og De Udøde, er oversat til dansk.
              </Typography>
              <Typography>
                <a href="https://www.johanegerkrans.com/">Se også Johans hjemmeside</a>
                .
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Aktiviteter%20og%20foredrag/2022/johan-egerkrans_foto_770x513.jpg" alt="Johan Egerkrans" width="100%" />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>John Flanagan</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                John Flanagan var en af 2017s Guests of Honour. Han er født i Australien i 1944 og er mest kendt for sine fantasybøger for børn og unge. Han drømte altid om at blive forfatter og blev ansat i et reklamebureau, hvor han skrev reklametekster. Udover reklametekster har han også skrevet en tv-serie.
                <br />
                I 1990´erne skrev han en række korte historier til sin søn, for at få ham til at nyde at læse. Sønnen var på det tidspunkt lille og spinkel og John ville vise ham, at helte ikke behøver at være store og stærke. I starten af 2000´erne skrev han historierne sammen til den første bog i serien Skyggens lærling, Gorlans ruiner og bogen udkom i Australien i 2004, og siden på dansk i 2006. Serien har vundet flere priser og er solgt til 18 lande, ligesom der er udkommet to spin off-serier som også er kommet på dansk.
                <br />
                Udover sine fantasyserier har John Flanagan også skrevet en enkelt historisk roman for voksne som er udkommet på dansk under titlen Havets grå kanoner.
              </Typography>
              <Typography>
                Besøget blev gennemført med støtte fra Statens Kunstfond.
              </Typography>
              <Typography fontStyle="italic">
                "Let me start by saying that Denmark is one of my favourite countries to visit. Everything works the way it should, the people are charming and just about everyone speaks English.
                <br />
                My visit to the Esbjerg Festival lived up to my normal high expectations.
                <br />
                The train trip from Copenhagen was a pleasant change from flying. I was met at the train station and escorted to my hotel by one of the festival staff: Friendly, welcoming and informal - just the way I prefer things.
                <br />
                After an hour or two to relax in my very comfortable hotel room, I was treated to a welcome dinner with the other guest of honour and several of the staff. Again, it was a friendly, informal occasion and it set me completely at ease. I'm not normally comfortable in a small group of strangers.
                <br />
                The following day, I was tasked with delivering the opening address - which I took to be a real honour.The large audience was kind enough to laugh at my opening joke - about wishing to be adopted by the Danish Royal Family, along with another prominent Australian. It's always encouraging when your opening joke works and the res t of the speech flowed smoothly.
                <br />
                My presentations were well organised and a lot of fun for me - and hopefully for the audience. They were conducted as interviews with a Danish literary professor whose son was a big fan of the books, so I had no work to do in terms of organising or writing a presentation. Thankfully, the auditorium was full and the crowd were friendly (there's that word again) and attentive. And once again, they laughed in all the right places. In contrast to my reservations about meeting small groups of strangers, I'm always very much at home in front of an audience of several hundred.
                <br />
                I had a very light schedule and the two interview style presentations were followed by signings, where I got to meet and chat with a lot of keen Danish fans. I always love that part of a signing - meeting the people who are actually reading the books. One delightful young Danish lady was so overcome by the occasion that she burst into tears. We had to stop the signing line while she recovered.
                <br />
                At least, I think she was overcome. Maybe she was just disappointed when she finally saw me in the flesh. i know I would be.
                <br />
                The festival itself was fascinating, with plenty to see and admire as one wandered around the vast Exhibition Hall. Outside, there were food tents ( delicious) and other  diversions - sword makers, mediaeval clothes and best of all, an exhibition tent with half a dozen different species of owls, where one could stroke these amazing birds and handle them. I love owls.
                <br />
                It was a fabulous two days. I had a great time. It certainly didn't seem like work. It was fun. a lot of fun.
                <br />
                To sum it up in three words:
                <br />
                Friendly, friendly, friendly."
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Guests%20of%20Honour/John-Flanagan.jpg" alt="John Flanagan" width="100%" />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Julie Kagawa</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Julie Kagawa var en af 2019s Guests of Honour.
                <br />
                Julie er en amerikansk fantasyforfatter, og forfatter til bestseller-serierne The Iron Fey, Blood of Eden, The Talon Saga og Shadow of the Fox. Både Iron Fey sagaen og Sagaen om Talon er oversat til dansk ved HarperCollins Nordic.
                <br />
                Julie Kagawa er født i Sacramento, Californien. Hun har været både boghandler og dyretræner, og elsker at læse, male, at være i sin have, og at træne kampsport. Hun bor i North Carolina med sin mand og adskillige kæledyr.
              </Typography>
              <Typography>
                <a href="http://juliekagawa.com/">Se også Julies hjemmeside</a>
                .
              </Typography>
              <Typography>
                Besøget blev gennemført med støtte fra Statens Kunstfond.
              </Typography>
              <Typography fontStyle="italic">
                ”I had the most wonderful time at Esbjerg's Fantasy Festival!  The staff and volunteers  were super nice and professional, the sessions were great, the music was amazing and the booths were fantastic.  I had a blast and would most definitely recommend the Fantasy Festival to all lovers of gaming and fantasy.“
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Guests%20of%20Honour/Julie-Kagawa.jpg" alt="Julie Kagawa" width="100%" />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Katja Brandis</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Katja Brandis var en af Fantasyfestivalens Guests of Honour i 2023.
                <br />
                Katja er tysk fantasyforfatter, og forfatter til over 50 bøger for børn, unge og voksne, herunder bestsellerserierne Woodwalkers og Seawalkers, som begge er oversat til dansk.
              </Typography>
              <Typography>
                Allerede som barn skrev hun historier, og efter et praktikophold på et forlag, og et job som journalist, sprang hun i 2006 ud som fuldtidsforfatter. Hun bor i nærheden af München med sin mand, søn og tre katte, og når hun ikke lige skriver, elsker hun at læse, svømme, lære dyr at kende og rejse.
              </Typography>
              <Typography>
                Se også Katjas
                <a href="https://www.katja-brandis.de/">hjemmeside</a>
                .
              </Typography>
              <Typography>
                Besøget på Fantasyfestivalen er arrangeret i samarbejde med forlaget Straarup & Co.
              </Typography>
              <Typography fontStyle="italic">
                Foto: Petra Haidn
              </Typography>
              <Typography fontStyle="italic">
                "I had a wonderful time at the Esbjerg Fantasyfestival and was very impressed by the enthusiasm of the visitors and the perfect organization of the festival. Denmark will stay in my memory as a country where people love to read!"
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Aktiviteter%20og%20foredrag/2023/KatjaBrandis-Copyright-Petra-Haidn-770x953.jpg" alt="Katja Brandis" width="100%" />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default GuestsOfHonour;
