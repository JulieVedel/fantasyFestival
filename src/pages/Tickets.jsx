/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function Tickets() {
  return (
    <div className="item">
      <div style={{ margin: 15, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Billetter
        </Typography>
        <Typography variant="h6" gutterBottom>
          Billetsalget til 2024 er endnu ikke åbent.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Der er gratis adgang flere forskellige steder, men aktiviteter og foredrag kræver, at du køber et aktivitetsarmbånd. Bliv klogere på, hvad der er gratis, hvad du kan bruge aktivitetsarmbåndet til og find ud af, hvad du gør med pladsreservation.
        </Typography>

        <Divider variant="middle" />

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Adgang
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/fantasyfestival-2.jpg&width=1920" alt="Adgang" width="100%" />
            </div>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="h6" gutterBottom>
                Deltag gratis
              </Typography>
              <Typography variant="body1" gutterBottom>
                Der er gratis adgang til messen i Riddersalen og på Markedspladsen og Esehaven udenfor.
                <br />
                Der er også gratis adgang på Esbjerg Ting- og Arresthus, Street Food og BROEN Shoppingcenter.
                <br />
                Fantasyfestivalen er åben for besøgende lørdag 16. september kl. 10-18 og søndag 17. september kl. 10-16.
              </Typography>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Aktivitetsarmbånd
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="body1" gutterBottom>
                Alle aktiviteter og foredrag kræver, at du køber et aktivitetsarmbånd. Det kan du købe her på vores hjemmeside eller ved indgangen. Vi anbefaler at købe på forhånd.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Køb aktivitetsarmbånd til børn og voksne
              </Typography>
              <Typography variant="h6" gutterBottom>
                Priser:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Voksen
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dagsarmbånd - 150 kr.*
                <br />
                Todagsarmbånd – 250 kr.*
              </Typography>
              <Typography variant="body1" gutterBottom>
                Børn
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dagsarmbånd – 75 kr.*
                <br />
                Todagsarmbånd – 100 kr.*
              </Typography>
              <Typography variant="body1" gutterBottom>
                Gælder for børn fra og med 8 år og til og med 14 år. Børn under 8 år gratis.
              </Typography>
              <Typography variant="body1" gutterBottom>
                *Alle priser er ekskl. billet- og administrationsgebyr.
              </Typography>
            </div>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Q28009-041-1622-(1).jpg&width=1920" alt="Aktivitetsarmbånd" width="100%" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Pladsreservation
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
              <Typography variant="h6" gutterBottom>
                Pladsreservation til foredrag
              </Typography>
              <Typography variant="body1" gutterBottom>
                Til udvalgte foredrag kræver det en pladsreservation som koster 20 kr. Den skal købes separat. Pladsreservation kan du kun bruge sammen med aktivitetsarmbånd.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <a href="http://localhost:3000/program">Se aktiviteter og foredrag.</a>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Pladsreservation købes via samme link som aktivitetsarmbåndene. Vi anbefaler at købe på forhånd, da vi kun har et begrænset antal til salg. Køb pladsreservation.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Der kræves pladsreservation til:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Taran Matharu (lørdag og søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    De monster-gode fantasyfilm (og -serier) (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Top 3 over monstre i populærkulturen (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Katja Brandis (lørdag og søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Fantasyquiz (lørdag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Fantasy Jeopardy (lørdag og søndag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Dracula i nye klæder (lørdag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Nørdsnak om superhelte (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Overnaturlige væsener og magiske karakterer (lørdag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Rød og blå-serien: Køn, kontrol og krig (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    At skabe originale, magiske væsner (lørdag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Occidentens stjerne og Lovecrafts tentakler (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Vølvens vej - en series tilblivelse (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Jim Lyngvild om KONGEN og fantasygenrens udvikling​ (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Monstre vi elsker at frygte (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Jim Butcher (lørdag og søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Paneldebat om filmadaptioner (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Vølvens vej - en series tilblivelse (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    40-års jubilæum som forfatter (lørdag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Liverolle-spil: Han Duo og venner (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Skriv aldrig en serie! (søndag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Lyden af fantasy (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Magisystemer (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Kampen mellem det gode og det onde (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Vølvens Vej bind 3 - nu med monstre (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Bestiarium - monstre ad libitum (søndag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Troldeliv (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Den magiske manual til monstre (søndag) FÅ BILLETTER
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Monstersnak (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Bestiarium, Nomerne og Valhalla (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Nordiske myter, Spående vølve og linoleumstryk (søndag)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Drømmemesteren (søndag)
                  </Typography>
                </li>
              </ul>
            </div>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="h6" gutterBottom>
                Pladsreservation til workshops
              </Typography>
              <Typography variant="body1" gutterBottom>
                For at kunne deltage i de forskellige workshops, kræver det en pladsreservation. Den koster 20 kr. og skal købes separat. Pladsreservation kan du kun bruge sammen med aktivitetsarmbånd.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <a href="http://localhost:3000/program">Se aktiviteter og foredrag.</a>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Pladsreservation købes via samme link som aktivitetsarmbåndene. Vi anbefaler at købe på forhånd, da vi kun har et begrænset antal til salg. Køb pladsreservation.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Der kræves pladsreservation til:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Workshop med Jan og monstrene FÅ BILLETTER
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Monstervenner-workshop
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    DU er helten! (lørdag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Tentakelworkshop UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Workshop med Jan og Nomerne UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    DU er helten! (søndag) UDSOLGT
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Gå på eventyr med en rigtig forfatter UDSOLGT
                  </Typography>
                </li>
              </ul>

              <Typography variant="h6" gutterBottom>
                Særskilt billet
              </Typography>
              <Typography variant="body1" gutterBottom>
                Få et overblik over aktivteter, der kræver særskilt billet. Husk, at købe billet til:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1" gutterBottom>
                    At holde uglerne. Billet købes direkte hos Uglernes Verden på Markedspladsen.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Escape Zone. Billet købes i døren til aktiviteten.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    City Escape. Billet købes ved aktivitetens start.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Fantastiske cocktails og magiske fortællinger.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Magiske toner med Esbjerg Ensemble.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Ringenes herre er tilbage i biografen.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Med Antboy, Loppen og gutterne i biografen.
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Det praktiske
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%', margin: 20 }}>
              <ul style={{ margin: 0, padding: 0 }}>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Handicaphjælpere i følgeskab med personer med handicap har gratis adgang. Handicaphjælpere skal blot fremvise deres ledsagerkort i billetsalget for at få udleveret billet. Dog skal hjælperen stadig købe pladsreservation eller særskilt billet til de foredrag og aktiviteter, der kræver det. Der skelnes ikke mellem synlige og usynlige handicaps. Vær opmærksom på, at der kan gælde andre regler for handicaphjælpere hos vores samarbejdspartnere. Kontakt derfor lokaliteten for mere information ved de aktiviteter, der kræver særskilt billet.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    For at undgå uro under foredrag mm. lukker dørene ved aktivitetens start, og herefter er det ikke muligt at komme ind. Enkelte aktiviteter kræver særskilt pladsreservation/billet ved siden af aktivitetsarmbåndet.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Grundet Brandmyndighederne må der kun være et vist antal personer i foredragslokalerne under foredragene.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Er du bogblogger eller -vlogger, og interesseret i at dække Fantasyfestivalen, så
                    {' '}
                    <a href="mailto: fantasyfestival@esbjerg.dk">send en mail til os</a>
                    .
                  </Typography>
                </li>
              </ul>
            </div>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/fantasyfestival-1.jpg&width=1920" alt="Det praktiske" width="100%" />
            </div>
          </div>
        </div>

        <div style={{ width: '60%', margin: 'auto', marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Vi ses til Fantasyfestival
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hovedbiblioteket
            <br />
            Nørregade 19
            <br />
            6700 Esbjerg
          </Typography>
        </div>

      </div>
    </div>
  );
}

export default Tickets;
