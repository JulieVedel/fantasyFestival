/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DanskFantasyPris() {
  return (
    <div className="item">
      <div style={{ margin: 15, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Dansk Fantasy Pris
        </Typography>
        <Typography variant="h6" gutterBottom>
          Dansk Fantasy, The Fantasy Fellowship og Fantasyfestivalen præsenterer Dansk Fantasy Pris.
        </Typography>

        <Divider variant="middle" />

        <div style={{
          width: '80%', textAlign: 'center', margin: 'auto', marginTop: '30px',
        }}
        >
          <Typography variant="body1" gutterBottom>
            Vi er glade og stolte over at kunne fortælle, at Dansk Fantasy, The Fantasy Fellowship og Fantasyfestivalen igen i 2023 uddeler priser til Årets Danske Fantasy.
          </Typography>
        </div>

        <div style={{ display: 'flex', width: '100%', marginTop: 50 }}>
          <div style={{ width: '50%' }}>
            <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Aktiviteter%20og%20foredrag/2023/%C3%A5retsfantasy2023-770x770.jpg&width=1920" alt="Årets danske fantasy 2023" width="100%" />
          </div>
          <div style={{ width: '50%', margin: 20 }}>
            <Typography variant="h6" gutterBottom>
              I 2023 uddeler vi tre priser
            </Typography>
            <Typography variant="body1" gutterBottom>
              Priserne er:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Årets danske fantasybog
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Årets danske fantasyforside
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Årets danske fantasydebut
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Forfatterne bag de tre vindende bøger samt illustratoren/designeren bag Årets Danske Fantasyforside modtager et trofæ, titlen og æren.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="https://fantasyfestival.dk/dansk-fantasy-pris/shortlist-2023">Se, hvem der er på shortlisten 2023</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="https://fantasyfestival.dk/dansk-fantasy-pris/longlist-2023">Se, hvem der er på longlisten 2023</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="https://fantasyfestival.dk/dansk-fantasy-pris/vindere">Se vinderne for 2023</a>
            </Typography>
          </div>
        </div>

        <div style={{
          width: '80%', margin: 'auto', marginTop: 50,
        }}
        >
          <Typography variant="h5" gutterBottom>
            Kriterier, deadlines m.m.
          </Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Kriterier</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <strong>For at komme i betragtning til priserne skal bogen leve op til følgende:</strong>
                <ul>
                  <li>
                    <Typography>
                      Den primære genre skal være fantasy, og bogen indeholde fantastiske elementer
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Bogen skal være udgivet første gang mellem 1. juni 2022 og 31. maj 2023
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Bogen skal være YA eller for voksne
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Bogen skal have et ISBN-nummer og sælges i trykt udgave
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Bogen skal være en roman – altså ikke en novellesamling, digtsamling, spilbog, tegneserie etc.
                    </Typography>
                  </li>
                </ul>
                <strong>Særkrav til Årets Danske Fantasyforside</strong>
                <ul>
                  <li>
                    <Typography>
                      (NYT) Forsiden skal være designet/illustreret af en dansk designer/illustrator
                    </Typography>
                  </li>
                </ul>
                <strong>Særkrav til Årets Danske Fantasydebut</strong>
                <ul>
                  <li>
                    <Typography>
                      Bogen skal være forfatterens første romanudgivelse (hvis forfatteren tidligere har udgivet romaner i andre genrer, kan bogen ikke indstilles til debutantprisen)
                    </Typography>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Longlist - forlagene indstiller</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For at komme på longlisten til de tre priser skal forlagene indstille de bøger, de har udgivet i perioden og som kvalificerer sig til at vinde årets tre priser. Der er tale om fantasybøger i høj kvalitet, hvor både world building, plot, karakterer og helhed spiller sammen. Bøgerne kan både indstilles til Årets Danske Fantasyforside og en af de to andre priser. Såfremt der er tale om en debutant, skal denne på debutant-listen.
              </Typography>
              <Typography>
                <strong>Krav til indstilling:</strong>
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Indstillingen sendes senest d. 1. juni pr. mail til pris@danskfantasy.dk
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Oplys titel, forfatter, forlag, udgivelsesdato og ISBN-nummer
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Oplys forsidedesigner/illustrator ved indstilling til Årets Danske Fantasyforside
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Ved indstilling af en bog til Årets Danske Fantasyforside skal en PDF af hele omslaget medsendes
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Forlaget forpligter sig til at fremsende op til 2 eksemplarer til bogbloggerpanel, såfremt de tildelte panelmedlemmer ikke har adgang til et eksemplar. Overholder forlaget ikke dette, vil bogen blive taget af longlisten
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Såfremt den indstillede bog går videre til shortlisten, forpligter forlaget sig til at fremsende 4 bedømmelses-eksemplarer til dommerpanelet med afsendelse senest 1. august
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Såfremt den indstillede bog er del af en serie og går videre til shortlisten, forpligter forlaget sig til at udarbejde og fremsende et resume af de foregående bøger til dommerpanelet senest 4. august
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Ved selvudgivelser gælder samme vilkår for udgiveren, som var de et forlag
                  </Typography>
                </li>
              </ul>
              <Typography>
                Longlisterne offentliggøres på Fantasyfestivalens og Dansk Fantasys platforme d. 15. juni.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Sortlist - bogbloggerpanel</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Inden d. 28. juli giver et panel af bogbloggere alle bøgerne på longlisterne point. Vi stiller krav om, at alle bøgerne skal være læst af mindst én bogblogger og gerne flere.
              </Typography>
              <Typography>
                Bogbloggerpanelet bedømmer bøgerne ud fra worldbuilding, plot, karakterer og helhed.
              </Typography>
              <Typography>
                Panelet består i år af 15 bogbloggere, som alle kan findes på Instagram:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    benedictes_bogverdens
                  </Typography>
                </li>
                <li>
                  <Typography>
                    bogormenanja
                  </Typography>
                </li>
                <li>
                  <Typography>
                    bogormens_verden
                  </Typography>
                </li>
                <li>
                  <Typography>
                    bogredenhosmonika
                  </Typography>
                </li>
                <li>
                  <Typography>
                    bogrejser
                  </Typography>
                </li>
                <li>
                  <Typography>
                    bookellish
                  </Typography>
                </li>
                <li>
                  <Typography>
                    fantastiske.familie.boger
                  </Typography>
                </li>
                <li>
                  <Typography>
                    karinafrederiksen
                  </Typography>
                </li>
                <li>
                  <Typography>
                    linedalbro
                  </Typography>
                </li>
                <li>
                  <Typography>
                    mullesbogblog
                  </Typography>
                </li>
                <li>
                  <Typography>
                    mydailybookdenmark
                  </Typography>
                </li>
                <li>
                  <Typography>
                    mys_booknook
                  </Typography>
                </li>
                <li>
                  <Typography>
                    pleasejustletmeread
                  </Typography>
                </li>
                <li>
                  <Typography>
                    pthoustrup
                  </Typography>
                </li>
                <li>
                  <Typography>
                    you.look.like.a.book
                  </Typography>
                </li>
              </ul>
              <Typography>
                Shortlisterne offentliggøres 1. august.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><strong>Vinderne</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vinderen i de tre kategorier bestemmes af et panel bestående af fire dommere samt en læserafstemning.
              </Typography>
              <Typography>
                De fire dommere er:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Per O. Jørgensen - illustrator (har desværre meldt fra)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Iben Marie Kromann - The Fantasy Fellowship
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Gitte Højmark Pedersen - litteraturhistoriker og bibliotekar
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Maria Månson - tv-vært og fantasynørd
                  </Typography>
                </li>
              </ul>
              <Typography>
                Vinderne af de tre priser kåres under Fantasyfestivalen lørdag d. 16. september.
              </Typography>
              <Typography>
                Ved spørgsmål om ovenstående, kan du kontakte os på
                {' '}
                <a href="mailto: pris@danskfantasy.dk">pris@danskfantasy.dk</a>
                .
              </Typography>
              <Typography>
                OBS: Dansk Fantasy og Fantasyfestivalen forbeholder sig retten til at justere i processen løbende.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      </div>
    </div>
  );
}

export default DanskFantasyPris;
