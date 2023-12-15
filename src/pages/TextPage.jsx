/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TextPage({ page }) {
  const ref0 = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();
  const ref4 = React.useRef();
  const ref5 = React.useRef();

  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (page === 'fantasyFellowship') {
    return (
      <div className="item">
        <div style={{ margin: 15 }}>
          <Typography variant="h4" gutterBottom>
            The Fantasy Fellowship
          </Typography>
          <Typography variant="h6" gutterBottom>
            En læsekreds for voksne
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="body1" gutterBottom>
              Læser du fantasy? Kunne du tænke dig hyggelige stunder, hvor du i godt selskab kan dyrke fantasygenren?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Så er The Fantasy Fellowship lige noget for dig!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi er et nationalt fællesskab for fantasyinteresserede og Danmarks største netværk af lokale læsekredse for fantasylæsere 18+.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fellowshipperne er organiseret via Facebookgrupper. Vi har en national Facebookgruppe for fantasylæsere fra hele landet. Her kan du få, og videregive, inspiration til gode læseoplevelser og komme i kontakt med lokale læsekredse eller starte nye læsekredse op.
            </Typography>
            <Typography variant="body1" gutterBottom>
              På Facebook finder du  vores nationale gruppe
              {' '}
              <a href="https://www.facebook.com/groups/thefantasyfellowshipdanmark/" target="_blank" rel="noreferrer">The Fantasy Fellowship: Danmark</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hvis du ikke har interesse i at deltage i læsekredsen, men i stedet gerne vil fortælle om din bog, dit forlag, din blog, arrangementer eller andet bedes du i stedet sende en
              {' '}
              <a href="mailto:
fantasyfestival@esbjerg.dk"
              >
                mail til Fantasyfestival
              </a>
              .
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Fellowship i din by
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der eksisterer en masse lokale Fellowships i flere byer over hele landet. De mødes typisk et par timer en hverdagsaften en gang om måneden. I flere af grupperne de sig også med fantasyfilm og brætspil.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Er der ikke et Fellowship i din by? Så skynd dig at melde dig ind i vores nationale gruppe på Facebook. Her kan vi hjælpe dig med at få skabt et!
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Fælles begivenheder for Fellowshipperne
            </Typography>
            <Typography variant="h5" gutterBottom>
              TFF Readathon
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hvert år i marts laves der et online TFF Readathon. Her kan du vinde en masse fede præmier. Derudover er der løbende konkurrencer, hvor du også kan vinde lækre præmier.
            </Typography>

            <Typography variant="h5" gutterBottom>
              The Gathering
            </Typography>
            <Typography variant="body1" gutterBottom>
              Flere lokale grupper valfarter desuden til Fantasyfestival hvert år i september, for at mødes til The Gathering – The Fantasy Fellowships store årsmøde.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Her er der mulighed for et netværke med andre Fellowshipper og høre eksklusive forfatterforedrag og samtaler.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hvis du har spørgsmål kan du kontakte The Fantasy Fellowship koordinator Cecilia Marie Lauridsen. Du kan skrive til
              {' '}
              <a href="mailto: cecov@esbjerg.dk">Cecilia på mail</a>
              .
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der er også lavet en gruppe for køb, salg og bytte af fantasybøger mm, som du finder på
              {' '}
              <a href="https://www.facebook.com/groups/1460731517416568" target="_blank" rel="noreferrer">Facebook</a>
              .
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'socialMedia') {
    return (
      <div className="item">
        <div style={{ textAlign: 'center', margin: 'auto' }}>
          <Typography variant="h4" gutterBottom>
            Find os på sociale medier
          </Typography>
          <div className="SoMe">
            <br />
            <a href="https://www.facebook.com/fantasyfestivalen" target="_blank" rel="noreferrer" aria-label="Facebook link"><FacebookIcon fontSize="large" /></a>
            <a href="https://www.instagram.com/fantasyfestivalen/" target="_blank" rel="noreferrer" aria-label="Instagram link"><InstagramIcon fontSize="large" /></a>
          </div>
        </div>

      </div>
    );
  }

  if (page === 'about') {
    return (
      <div className="item">
        <div style={{ margin: 15 }}>
          <Typography variant="h4" gutterBottom>
            Om Fantasyfestivalen
          </Typography>
          <Typography variant="h6" gutterBottom>
            Fantasyfestival er en fejring af den fantastiske genre i alle dens former.
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="body1" gutterBottom>
              Fantasyfestivalen hylder fantasylitteraturen og bringer både store og små sammen om glæden ved fantasien og magien. Dette gør vi gennem en bred pallette af aktiviteter på festivalen, som er rettet både mod voksne, unge og børn. Festivalen afvikles den tredje weekend i september, i år den 16.-17. september 2023.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Ambitionerne for udviklingen af Fantasyfestivalen er store. Siden den første festival med 572 gæster i 2015 er den vokset år for år, og i 2022 tog ca. 8.000 gæster del i magien. Det er langt mere end en tidobling på bare otte år, og det er vi meget stolte af.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Kernen i festivalen er glæden ved fantasygenren. Her vækkes læselysten og kreativiteten. Genren kan underholde, den byder på fortællinger for både store og små, og så vækker den ikke mindst læseglæde. Den kommer også i mange afskygninger, lige fra bøger og film til spil, musik, rollespil og meget andet.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Et vildt program
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sideløbende med at Fantasyfestival sigter mod en stor udvikling i byrummet, har festivalen lagt sig i selen for at skabe det hidtil bedste program til festivalens kernepublikum. Aktiviteterne skal foregå på Hovedbiblioteket og lokationer tæt herpå. Det er aktiviteter for børn og voksne, for nørderne og for dem, der bare gerne vil have en anderledes oplevelse eller købe en masse bøger i det store messeområde. Hovedbiblioteket og området omkring kommer til at summe af magi.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Årets tema er ”monstre og magiske væsner”. Udover at kunne præsentere cremen af danske fantasyforfattere, med den prisvindende Anne-Marie Vedsø Olesen og 40-års jubilaren Josefine Ottesen i spidsen, har Fantasyfestivalen i år hele tre udenlandske topnavne: R.F. Kuang (USA), Katja Brandis (Tyskland), og Jim Butcher (USA). Navne, der repræsenterer udviklingen og fremtiden for fantasygenren, og som vækker genklang og stor glæde hos dem, der kender genren.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fantasyfestivalen tilbyder en masse spændende foredrag og paneldebatter, hvor de besøgende kan møde navne som Kenneth Bøgh Andersen, Jim Lyngvild, Silja Okking, Nicole Boyle Rødtnes, Benni Bødker og mange andre. Desuden kommer der akademiske foredrag om genren fra nogle af landets dygtigste formidlere, f.eks. Jakob Levinsen, Martin Jürgensen og Mathias Clasen.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I år satser festivalen særligt på at udvikle børneområdet med spændende foredrag og workshops, hvor børnene både kan lære at tegne, skrive, lave special effects og meget andet. Derfor har festivalen booket navne som Mette Finderup, Jan Kjær, Sandra Schwartz, Søren Jønsson og Anders Lerche.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Meget mere end bøger
            </Typography>
            <Typography variant="body1" gutterBottom>
              Litteraturen er kernen, men et andet vigtigt aspekt ved Fantasyfestival er at folde genren ud i forhold til forskellige medier og udtryksformer. Programmet byder derfor også på illustratorer og tegnere som Per O. Jørgensen, der stod bag tegningerne til de danske Harry Potter-udgivelser, og Valhalla-tegneren Peter Madsen. Hertil kommer brætspilseksperter og en figurspiller, der er på landsholdet i Age of Sigmar – et af verdens førende turneringsbrætspil.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Filmmediet er ligeledes repræsenteret på Fantasyfestivalen. Udover filmeksperter som Jakob Stegelmann fra Troldspejlet, Maria Månson fra DR og Nicolas Barbano fra Filmårbogen får festivalen besøg af skuespiller Nicolas Bro og filminstruktør Ask Hasselbalch, der bl.a. står bag Antboy-filmene og julekalenderen Kometernes jul. Der vil herudover være unikke filmvisninger i Nordisk Film Biografer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der optages flere live-podcasts på Fantasyfestivalen, og festivalen får igen besøg af nørd-podcastkongerne Han Duo.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I Musikhuset Esbjerg vil der være filmmusikkoncerter, hvor festivalens eget tema, som blev komponeret til sidste års festival, for første gang skal fremføres af et orkester.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/program">Du kan se årets program her.</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi ses i Esbjerg den 16. og 17. september – dér, hvor magien slippes løs.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Regnbuen og de magiske universer
            </Typography>
            <Typography variant="body1" gutterBottom>
              ”Engang for længe siden, dengang livets træ havde sine rødder i verdens midte, levede de nordiske guder i Asgård, landet for enden af regnbuen.”
            </Typography>
            <Typography variant="body1" gutterBottom>
              Således indledes tegneserien ”Ulven er løs” fra 1979, første bind i den danske tegneserie.  Valhalla.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vores bibliotek, og Fantasyfestivalen, er regnbuen. Dér, hvor store og små, får adgang til magiske universer.
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'beginningOfFantasyfestival') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Hvordan begyndte Fantasyfestival?
          </Typography>
          <Typography variant="h6" gutterBottom>
            Sæt jer ned omkring bålet – eller foran skærmen. Lad magien blomstre. Og tag et smut tilbage i tiden. For i år er det ottende gang, Fantasyfestival løber af stablen.
          </Typography>

          <Divider variant="middle" />

          <div style={{ marginTop: '50px', width: '100%', margin: 'auto' }}>
            <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Aktiviteter%20og%20foredrag/2022/Kirsten-Ribe-870_350.jpg&width=870" alt="Hvordan begyndte Fantasyfestival?" width="100%" />
          </div>

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="body1" gutterBottom>
              Fantasyfestival har efterhånden vokset sig stor, og får hvert år besøg af flere tusind gæster fra hele landet, foruden forfattere, foredragsholdere, rollespillere, kunstnere og illustratorer, forlag, boghandlere, rollespilsbutikker, musikere, gøglere, og spændende udendørs boder, der sammen er med til at omdanne Hovedbiblioteket i Esbjerg til et magisk universitet for en weekend.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Kirsten Bloch startede det hele
            </Typography>
            <Typography variant="body1" gutterBottom>
              Men hvordan startede det hele egentlig, og hvor kom idéen til at skabe en Fantasyfestival i Esbjerg fra? Vi har spurgt bibliotekar Kirsten Bloch, idékvinden bag festivalen.
            </Typography>
            <Typography variant="body1" gutterBottom>
              "Jeg har elsket fantasygenren, siden jeg som barn fik læst Hobbitten op af min mor. Tolkiens magiske univers, og Bilbos rejse, fangede mig med det samme, og jeg støvede ivrigt biblioteket igennem for at finde bøger, der lignede. Og fascinationen af at rejse til en anden verden, bekæmpe drager og tage på farlige eventyr sidder stadig i mig den dag i dag, hvor jeg stadig elsker at læse fantasybøger".
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              En vigtig eksamensopgave
            </Typography>
            <Typography variant="body1" gutterBottom>
              Så da jeg tilbage i 2011, som en del af en projektlederuddannelse, skulle fremlægge et projekt til min eksamen, var jeg ikke i tvivl om, at det skulle handle om fantasy. På det tidspunkt fandtes der to forskellige fantasyrelaterede festivaler i Danmark: Harry Potter-festivalen i Odense, hvor fokus mest var på børn, og Fantasticon i København for de hardcore voksne fantasynørder. Men der fandtes ikke en festival, der samlede alle genrens facetter, og viste samspillet mellem litteraturen, musikken, kunsten, rollespillet, filmene mm. Min idé var derfor at skabe en Fantasyfestival i Esbjerg med fokus på unge og voksne, der viste koblingen mellem litteraturen og de mange medier, fantasygenren i dag breder sig over. Og forundersøgelsen viste, at der var interesse for idéen.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ marginTop: '50px' }}>
              Fra opgave til festival
            </Typography>
            <Typography variant="body1" gutterBottom>
              Jeg havde dog aldrig forestillet mig, at festivalen faktisk ville blive til noget, da jeg afleverede eksamensopgaven.
              <br />
              Men det gjorde den. For bibliotekets ledelse syntes, at det lød som en rigtig god idé med en Fantasyfestival i Esbjerg,
            </Typography>
            <Typography variant="body1" gutterBottom>
              Planlægningen af den første festival startede i 2012, og 7. marts 2015 kunne biblioteket så slå dørene op for 572 glade gæster fra hele landet til den allerførste Fantasyfestival. Egentlig var tanken, at det skulle være en enkeltstående festival, men den store succes gjorde, at bibliotekets ledelse hurtigt blev enige om at gentage succesen, og siden er festivalen vokset støt både arealmæssigt og på deltagertallet til mellem 6000 og 7000 gæster ved den sidste fysiske festival i 2022. De første to år var det Esbjerg Park, der lagde lokaler og udeområder til, men i 2017 flyttede festivalen ind på Hovedbiblioteket, hvor den nu ligger trygt og godt placeret.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Og det er blevet til masser af gode oplevelser igennem årene med besøg fra store udenlandske fantasyforfattere som Tamora Pierce, Trudi Canavan, John Flanagan, Patricia Briggs, Sebastian de Castell, Peter V. Brett og Julie Kagawa, og kendte danske fantasyforfattere som Lene Kaaberbøl, Josefine Ottesen, Kenneth Bøgh Andersen og Dennis Jürgensen, samt masser af nyere fantasyforfattere, som Malene Sølvsten, Julie M. Day, Boris Hansen og Tobias Stenbæk Bro, for bare at nævne nogle få. Derudover har Fantasyfestivalen igennem tiden budt på blandt andet forpremierer på nye fantasyfilm, fantasymusik, teater, computerspil, rollespil, cosplayers, forskellige kreative workshops for børn, brætspil, fantasydrinks, musik, kunst, spændende debatter, en stor indendørs messe, og en stemningsfuld markedsplads.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Jeg glæder mig til at opleve den fantastiske stemning igen, og hilse på både nye og tidligere gæster og standholdere, når vi til september slår dørene op til endnu en omgang Fantasyfestival.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Ses vi?”
            </Typography>
            <Typography variant="body1" gutterBottom>
              Det kan du tro vi gør, Kirsten! Og tak for fortællingen.
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'EAN') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            EAN- og CVR numre
          </Typography>
          <Typography variant="h6" gutterBottom>
            Elektronisk faktura til Fantasyfestival
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="body1" gutterBottom>
              Fantasyfestival
              <br />
              Esbjerg Kommunes Biblioteker
              <br />
              Nørregade 19
              <br />
              6700 Esbjerg
            </Typography>

            <Typography variant="body1" gutterBottom>
              EAN-nummer: 579 800 493 0410
              <br />
              CVR-nummer: 29189803
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'FAQ') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }} ref={ref0}>
          <Typography variant="h5" gutterBottom>
            FAQ - frequently asked questions
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Her finder du forhåbentlig svar på alle spørgsmål du måtte have omkring Fantasyfestival.
            Dette indkluderer:
            <ul>
              <li><Button size="small" onClick={() => scrollTo(ref1)}>Handicaptilgængelighed</Button></li>
              <li><Button size="small" onClick={() => scrollTo(ref2)}>Hvor og hvornår</Button></li>
              <li><Button size="small" onClick={() => scrollTo(ref3)}>Mad og drikkelse</Button></li>
              <li><Button size="small" onClick={() => scrollTo(ref4)}>Overnatning i Esbjerg</Button></li>
              <li><Button size="small" onClick={() => scrollTo(ref5)}>Transport</Button></li>
            </ul>
          </Typography>

          <Divider variant="middle" />

          <div style={{ margin: 'auto', marginTop: '30px' }} ref={ref1}>
            <Typography variant="h5" gutterBottom>
              Handicaptilgængelighed
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Fantasyfestival er, med få undtagelser, let tilgængelig for folk med handicap.
            </Typography>
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
              <Typography variant="body1" gutterBottom>
                <strong>Hovedbiblioteket </strong>
                er let tilgængelig for folk med fysisk handicap. Ved indgangen forefindes betonrampe, og indenfor er der elevator til både førstesalen og kælderen. På førstesalen forefindes desuden handicaptoilet.
                <br />
                På Hovedbiblioteket finder du billetsalget, Riddersalen, Kunstnerhjørnet, Alkymistens Tårnværelse, Merlins Bibliotek, Orkhulen, Dragehulen, Katakomberne, Fortælletrappen, Dommedagsbjerget og Olympen.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Afhængigt af vejret kan Markedspladsen være en udfordring for folk med fysisk handicap, men for at gøre den så fremkommelig som mulig, er der udlagt køreplader mellem de forskellige boder.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Den Dansende Dværg </strong>
                er beliggende ved siden af Hovedbiblioteket. Her finder du foredragslokalerne Vanaheim, Alfheim, Midgård og Jotunheim. Museet er i flere niveauer, og kan derfor være udfordrende for kørestolsbrugere, men da der er flere elevatorer, er det muligt at komme rundt. Spørg evt. museets personale om hjælp.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Esbjerg Museum </strong>
                (også kendt som Huset) er som eneste undtagelse ikke let tilgængelig for folk med fysisk handicap. Dørene kan give udfordringer for kørestolsbrugere, og der er kun adgang via trappe til førstesalens foredragslokale Gildesalen og Mørkekammeret.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Byhistorisk Arkiv </strong>
                er beliggende ved siden af Esbjerg Museum. Her finder du Magiarkivet og Monsterarkivet.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Esbjerg Street Food </strong>
                er beliggende i gågaden, Kongensgade 34. Hos Esbjerg Street Food er der let adgang for kørestolsbrugere og gangbesværede.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>BROEN Shopping </strong>
                ligger ved siden af banegården. På BROEN Shopping er der nem adgang for kørestolsbrugere via elevator. Her finder du blandt andet Den mystiske marskandiser og indgangen til Nordisk Film Biografer.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Fiskeri- og Søfartmuseet </strong>
                finder du på Tarphagevej 2. Museet er i et plan, med elevator op til indgangen. Adgang til akvariet for kørestolsbrugere foregår via rampe. Der er anlagt stier rundt i frilandsudstillingen, men adgang til de enkelte bygninger kan give udfordringer for kørestolsbrugere.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Esbjerg Ting- og Arresthus </strong>
                er beliggende på Torvet, i kort gåafstand fra Hovedbiblioteket. Her kan du blandt andet købe aktivitetsarmbånd og deltage i flere kreative aktiviteter. Der er let adgang for kørestolsbrugere via lift til kørestol ved den udvendige trappe og elevator indenfor.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Musikhuset Esbjerg </strong>
                er beliggende på Havnegade 18, i kort gåafstand fra Hovedbiblioteket. Der er let adgang for kørestolsbrugere til både foyer og foredragssale. Her finder du Teatersalen, Mødesalen og Foyeren.
              </Typography>

              <Typography variant="body1" gutterBottom>
                Handicaphjælpere i følgeskab med personer med handicap har gratis adgang. Handicaphjælpere skal blot fremvise deres ledsagerkort i billetsalget for at få udleveret billet. Dog skal hjælperen stadig købe pladsreservation eller særskilt billet til de foredrag og aktiviteter, der kræver det. Der skelnes ikke mellem synlige og usynlige handicaps. Vær opmærksom på, at der kan gælde andre regler for handicaphjælpere hos vores samarbejdspartnere. Kontakt derfor lokaliteten for mere information ved de aktiviteter, der kræver særskilt billet.
              </Typography>
            </div>
          </div>

          <div style={{ margin: 'auto', marginTop: '30px' }} ref={ref2}>
            <Typography variant="h5" gutterBottom>
              Hvor og hvornår
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Se tid og sted for Fantasyfestivalen her.
            </Typography>
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
              <div>
                <Typography variant="h5" gutterBottom>
                  Fantasyfestival 2024
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Festivalen afholdes 14.-15. september 2024.
                  <br />
                  Lørdag 14. september kl. 10-18.
                  <br />
                  Søndag 15. september kl. 10-16.
                </Typography>

                <Typography variant="h5" gutterBottom>
                  Aktiviteter og foredrag og  foregår på
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Hovedbiblioteket
                  <br />
                  Nørregade 19
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Byhistoriske Arkiv
                  <br />
                  Torvegade 47
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Museum
                  <br />
                  Torvegade 45
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Huset Esbjerg
                  <br />
                  Finsensgade 1
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Musikhuset Esbjerg
                  <br />
                  Havnegade 18
                  <br />
                  6700 Esbjerg
                </Typography>
              </div>
              <div>
                <Typography variant="h5" gutterBottom>
                  Aktiviteter ude i byen foregår på
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Esbjerg International House
                  <br />
                  Torvegade 23
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  BROEN Shoppingcenter
                  <br />
                  Exnersgade 20
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Street Food
                  <br />
                  Kongensgade 34
                  <br />
                  6700 Esbjerg
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Esbjerg City
                  <br />
                  Gågaderne på Torvegade, Torvet, Kongensgade og Stormgade
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nordisk Film Biografer BROEN
                  <br />
                  Exnersgade 20
                  <br />
                  6700 Esbjerg
                </Typography>
              </div>

              <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                Fantasyfestivalen arrangeres af Esbjerg Kommunes Biblioteker i samarbejde med forskellige lokale og nationale foreninger, forlag og frivillige.
              </Typography>
            </div>
          </div>
          <div style={{ margin: 'auto', marginTop: '30px' }} ref={ref3}>
            <Typography variant="h5" gutterBottom>
              Mad og drikke
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Se hvor du kan købe mad og drikke på Fantasyfestivalen.
            </Typography>
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
              <Typography variant="body1" gutterBottom>
                Til Fantasyfestivalen er der mulighed for at nyde medbragt mad på Markedspladsen, ligesom der kan købes mad og drikke.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Der er flere madboder på og ved Markedspladsen og International Dragon House, ligesom der er mulighed for at købe mad og drikke hos de mange caféer mm. i nærheden af festivalen. Der er også flere boder med forskellige spise- og drikkelige specialiteter.
              </Typography>
              <Typography variant="body1" gutterBottom>
                På Markedspladsen finder du:
              </Typography>
              <ul>
                <li><Typography variant="body1" gutterBottom>Bluesette</Typography></li>
                <li><Typography variant="body1" gutterBottom>Bobbelvognen</Typography></li>
                <li><Typography variant="body1" gutterBottom>Café Memfis</Typography></li>
                <li><Typography variant="body1" gutterBottom>Den Dansende Dværg</Typography></li>
                <li><Typography variant="body1" gutterBottom>De grønne pigespejdere</Typography></li>
                <li><Typography variant="body1" gutterBottom>Dragon Inn</Typography></li>
                <li><Typography variant="body1" gutterBottom>Kaffevognen</Typography></li>
                <li><Typography variant="body1" gutterBottom>Karamelmesteren</Typography></li>
                <li><Typography variant="body1" gutterBottom>Konen med æggene</Typography></li>
                <li><Typography variant="body1" gutterBottom>Merry og Morten Villebøl</Typography></li>
                <li><Typography variant="body1" gutterBottom>Mjolnir</Typography></li>
                <li><Typography variant="body1" gutterBottom>Mjødladen</Typography></li>
                <li><Typography variant="body1" gutterBottom>Skjaldekroen</Typography></li>
              </ul>
            </div>
          </div>
          <div style={{ margin: 'auto', marginTop: '30px' }} ref={ref4}>
            <Typography variant="h5" gutterBottom>
              Overnatning i Esbjerg
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Vil du gerne have hele Fantasyfestival med?
            </Typography>
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
              <a href="https://www.vadehavskysten.dk/ribe-esbjerg-fanoe/sov-og-spis/sov-i-esbjerg">
                <Typography variant="body1" gutterBottom>
                  Se dine muligheder for overnatning i Esbjerg
                </Typography>
              </a>
            </div>
          </div>
          <div style={{ margin: 'auto', marginTop: '30px' }} ref={ref5}>
            <Typography variant="h5" gutterBottom>
              Transport
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Fantasyfestivalen ligger centralt placeret i forhold til offentlig transport og parkering.
            </Typography>
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
              <Typography variant="body1" gutterBottom>
                Det er nemt at tage toget eller egen bil til Fantasyfestival.
                Hovedbiblioteket, hvor festivalen afholdes, ligger 5 minutters gang fra banegården.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Parkering
              </Typography>
              <Typography variant="body1" gutterBottom>
                Det er muligt at parkere gratis på Museumspladsen, lige ved siden af Hovedbiblioteket.
                Parkeringspladsen fyldes hurtigt op, så alternativt må man parkere andre steder.
              </Typography>
              <a href="https://www.esbjerg.dk/planer-projekter-og-trafik/parkering/her-kan-du-parkere">
                <Typography variant="body1" gutterBottom>
                  Oversigt over parkering i Esbjerg
                </Typography>
              </a>
              <Typography variant="body1" gutterBottom>
                Det er gratis at parkere de første to timer i Esbjerg midtby. Nogle steder er parkeringen tidsbegrænset.
              </Typography>
              <a href="https://www.esbjerg.dk/planer-projekter-og-trafik/parkering/betalingszonen-i-esbjerg">
                <Typography variant="body1" gutterBottom>
                  Betalingsparkering i Esbjerg midtby
                </Typography>
              </a>
              <Typography variant="body1" gutterBottom>
                Der findes også et udmærket parkeringshus ved Streetmekka Esbjerg/Sydvestjysk Sygehus. Det er sjældent fyldt op i weekenderne, og kunne derfor være en parkeringsmulighed.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Taxa
              </Typography>
              <Typography variant="body1" gutterBottom>
                Esbjerg Taxa 7514 4500
              </Typography>
              <Button variant="contained" onClick={() => scrollTo(ref0)} style={{ position: 'fixed', right: '20%', bottom: '5vh' }} endIcon={<ArrowUpwardIcon />}>Til toppen</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'internship') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Bliv praktikant til Fantasyfestivalen
          </Typography>
          <Typography variant="h6" gutterBottom>
            Der er endnu ikke åbent for praktikantansøgninger, men er du interesseret, er du meget velkommen til at kontakte os på
            {' '}
            <a href="mailto: fantasyfestival@esbjerg.dk">mail</a>
            .
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="body1" gutterBottom>
              Har du lyst til at få et kig ind bag kulisserne på Fantasyfestivalen? Vil du være med til at videreudvikle festivalen og gøre årets festival til en succes? Så læs med her!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fantasyfestival 2023 søger en praktikant til at være en del af teamet bag Fantasyfestival.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tredje weekend i september hvert år omdanner vi Hovedbiblioteket i Esbjerg til et mekka for fantasygenren. Festivalen byder både børn, unge og voksne velkommen, uanset om man er hardcore fantasynørd eller bare gerne vil opleve den vibrerende stemning, der strømmer ud af Hovedbiblioteket og Esbjerg by.
              <br />
              Som praktikant hos os får du masser af erfaring med de forskellige dele af at planlægge et stort event som Fantasyfestivalen. Har du nogle særlige kompetencer eller ideer, du gerne vil bringe i spil, kan du også selv være med til at forme din praktik.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Vi forventer, at du
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  er studerende på en videregående uddannelse – men er du ledig og kan tilbyde virksomhedspraktik, hører vi også gerne fra dig
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  brænder for et eller flere områder: eventplanlægning, projektledelse, administration, kommunikation, SoMe og økonomi
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  tager fat og også deltager i de mange praktiske opgaver, som et stort event indebærer
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  er passioneret, ansvarsfuld, initiativrig og modig.
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Det er en fordel, hvis du er glad for fantasygenren, men absolut ikke et krav. Det vigtigste er, at du er vild med at arbejde med store kulturevents.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Er du også optaget af at arbejde med frivillige?
            </Typography>
            <Typography variant="body1" gutterBottom>
              I år søger vi særligt praktikanter, der vil være med til at gøre vores organisering af frivillige endnu bedre. Vi søger praktikanter, som vil være med til at:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  analysere den nuværende frivilligsituation og give konkrete forslag til videre udvikling, blandt andet rekruttering og fastholdelse
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  udvikle The Fantasy Fellowship, Danmarks største nationale fantasylæsekreds for voksne
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  udføre praktiske gøremål såsom at lave vagtskema, søge sponsorater og pakke informationsmaterialer til de frivillige
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  afvikle årsmødet for The Fantasy Fellowship fredag den 15. september.
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Skriv det gerne i din ansøgning, hvis din profil og dine interesser matcher ovenstående. Det er en fordel, men ikke et krav, at du gerne vil beskæftige dig med vores frivilligorganisering.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Praktikperiode
            </Typography>
            <Typography variant="body1" gutterBottom>
              Praktikperioden løber fra 1. august til 30. september 2023, med særligt meget aktivitet omkring festivalen den 15.-17. september. Vi kan tilpasse perioden til den enkelte praktikant og evt. forlænge den.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Brug for at vide mere?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hvis du har spørgsmål, kan du skrive til
              {' '}
              <a href="mailto: fantasyfestival@esbjerg.dk">fantasyfestival@esbjerg.dk</a>
              .
              <br />
              Du kan også kontakte Stine Liberty Skovgaard, der er en af festivalkoordinatorerne, på tlf. 21 31 18 56 eller mail
              {' '}
              <a href="mailto: stls@esbjerg.dk">stls@esbjerg.dk</a>
              .
            </Typography>

            <Typography variant="h5" gutterBottom>
              Ansøgningsfrist mm
            </Typography>
            <Typography variant="body1" gutterBottom>
              Send din ansøgning og CV til
              {' '}
              <a href="mailto: fantasyfestival@esbjerg.dk">fantasyfestival@esbjerg.dk</a>
              , hvor du skriver lidt om dig selv og din baggrund, og hvorfor du søger praktik hos Fantasyfestival 2023. Frist for at søge er 1. juni 2023. Vi holder samtaler løbende.
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'sponsers') {
    return (
      <div className="item">

        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Samarbejdspartnere
          </Typography>
          <Typography variant="h6" gutterBottom>
            Fantasyfestivalen har en lang række samarbejdspartnere, som vi skylder stor tak. Uden jer kunne det ikke lade sig gøre.
          </Typography>

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  BROEN Shopping
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Bunkern
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Byhistorisk Arkiv
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Dansk Fantasy
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Esbjerg City
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Kulturskole
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Kunstmuseum
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Street Food
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Esbjerg Ungdomsskole
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Fiskeri- og Søfartsmuseet
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Forlaget Falco
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  HEX! Museum of Witch Hunt
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Huset Esbjerg
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Lords Assembly
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Musikhuset Esbjerg
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Myrthuegård
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Nordisk Film Biografer Esbjerg BROEN
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Radio Victoria
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Ripen
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Rybners
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Straarup & Co.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Superlux
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Sydvestjyske Museer
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  The Fantasy Fellowship
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Tilflytterservice
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Sponsorer
          </Typography>
          <Typography variant="h6" gutterBottom>
            Stor tak til årets sponsorer.
          </Typography>

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <div>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/TAP-logo_TM-RGB.png" alt="TAP-logo" width="50%" />
            </div>
            <div>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Guldaegget.png" alt="Guldaegget-logo" width="50%" />
            </div>
            <div>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Aktiviteter%20og%20foredrag/slots-og-kulturstyrelsen-logo-658x219.jpg" alt="slots-og-kulturstyrelsen-logo" width="50%" />
            </div>
            <Typography variant="h5" gutterBottom>
              Præmier
            </Typography>
            <div>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/BOG_IDE_logo.jpg" alt="BOG_IDE-logo" width="50%" />
            </div>
            <div>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/ComicFactory.jpg" alt="ComicFactory-logo" width="50%" />
            </div>
            <div>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Forlaget-Falco-logo.jpg" alt="Forlaget-Falco-logo" width="50%" />
            </div>
            <Typography variant="body1" gutterBottom>
              Gutkind Forlag
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lindhardt og Ringhof
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nordisk Film Biografer BROEN
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'marketBooking') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Booking af stande
          </Typography>
          <Typography variant="h6" gutterBottom>
            Det er endnu ikke muligt at ansøge om stande i Riddersalen og Kunstnerhjørnet, eller annoncer i det trykte program til Fantasyfestival 2024.
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="h5" gutterBottom>
              Køb af annoncer
            </Typography>
            <Typography variant="body1" gutterBottom>
              Annonceansøgning er lukket. Det er ikke længere muligt for standholdere, aktører, lokale institutioner og virksomheder, samt andre interessenter at ansøge om annoncer i Fantasyfestivalens trykte program. Priser, formater og deadlines ses nedenfor.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Priser:
            </Typography>
            <Typography variant="body1" gutterBottom>
              ½ side (180 mm x 126 mm): 3000 kr. + moms
              <br />
              1 side til kant (200 mm x 282 mm): 4500 kr. + moms
            </Typography>

            <Typography variant="h6" gutterBottom>
              Deadlines:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Deadline for ansøgning er onsdag 3. maj kl. 12. Herefter fordeles annoncerne, og alle ansøgere får besked i løbet af mandag 8. maj, om de har fået deres ønske opfyldt. Deadline for levering af annonce er onsdag 31. maj. Der fremsendes ikke korrektur på annoncerne inden trykning. Annoncer leveres som pdf-fil. Halvsides annoncer leveres uden beskæringsmærker, mens helsides annoncer til kant skal leveres med 3 mm beskæringsmærker. Ved bestilling af annoncer til kant skal man være opmærksom på, at der vil blive indsat et sidetal øverst til enten venstre eller højre på siden.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Forbehold:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi forbeholder os retten til at udvælge, hvilke annoncer der skal optræde i programmet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi forbeholder os retten til at afvise en annonce, hvis den ikke lever op til en høj nok billedkvalitet (300 ppi), hvis indholdet er upassende, hvis der er fejl, eller hvis der er andre forhold, der gør, at annoncen ikke lever op til kravene.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi forbeholder os retten til at kræve en ændring i annoncen, hvis der er fejl i den, såsom stavefejl og faktuelle fejl. Hvis annoncen – efter ændringer fra annoncøren – stadig indeholder fejl, gælder ovenstående forbehold om retten til at afvise annoncen.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Annoncerne må ikke indeholde programomtaler af de begivenheder, som foregår i forbindelse med festivalen. Der må gerne være en overordnet omtale af begivenheder (”Kom og oplev en magisk stemning på …, hvor du blandt andet kan …”), men omtale af specifikke begivenheder (”Kl. 10 er der den her aktivitet”) skal ikke med i annoncen. Alle begivenheder vil i stedet stå omtalt i programmet (tekst og billede) samt i programoversigten med tid og sted.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der fremsendes ikke korrektur på annoncerne inden trykning.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Annoncer leveres som pdf-fil, og leveres uden beskæringsmærker, medmindre det drejer sig om annoncer til kant, som skal leveres med 3 mm beskæringsmærker.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Ved bestilling af annonce til kant skal man være opmærksom på, at der vil blive indsat et sidetal øverst til enten venstre eller højre på siden.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Annonceønsker og spørgsmål sendes til Kirsten Bloch på
              {' '}
              <a href="mailto: kbl@esbjerg.dk">denne mailadresse</a>
              .
            </Typography>

            <Typography variant="h5" gutterBottom>
              Praktiske bemærkninger henvendt til standholdere
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tid og sted
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lørdag 14. september kl. 10-18 og søndag 15. september kl. 10-16.
            </Typography>

            <Divider variant="middle" sx={{ margin: '20px' }} />

            <Typography variant="h5" gutterBottom>
              Riddersalen
            </Typography>
            <Typography variant="h6" gutterBottom>
              Priser og størrelser
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der er endnu ikke åbent for standansøgninger til Fantasyfestival 2024.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der er tre standstørrelser
              <br />
              Stor: 8x3 / 4x6 meter, 5000 kr.
              <br />
              Mellem: 4x3 meter, 2500 kr.
              <br />
              Lille: 2x2,5 meter, 1250 kr.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Priserne er eksklusiv moms.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Faktura for standbetaling fremsendes til standholderne af Esbjerg Kommunes Bibliotekers administration senest en måned før Fantasyfestivalen.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Muligheder for udstyr
            </Typography>
            <Typography variant="body1" gutterBottom>
              Standholdere får stillet borde og stole til rådighed, samt strøm efter ønske.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Alt andet udstyr skal standholderne selv medbringe. Dette gælder også forlængerledninger.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Betingelser
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fantasyfestivalen fokus er fantasy, og det er vigtigt for os, at standene udviser et samlet billede af fantasygenren. Det er derfor kun muligt at købe en stand, hvis standens indhold har relation til fantasygenren, det være sig i form af bøger, rollespilsartikler, merchandise, spil eller andre relaterede fantastiske genrer som for eksempel horror.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Stande, hvis indhold falder udenfor det overordnede fantasytema, kan kun bookes, hvis der er ledige pladser tilbage.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Det er et krav fra Fantasyfestivalens side at standholderne er til stede på standen i hele messens åbningstid både lørdag og søndag. Standholderne bedes om ikke at pakke standen ned før messens slutning søndag.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Det vil være muligt at stille op allerede fredag 16. september. Nærmere oplysninger om opsætning og nedtagning fremsendes inden Fantasyfestivalen sammen med diverse andre praktiske informationer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Afbooking af stande skal ske senest 15 dage før festivalen. Afbookes standen inden for 14 dage før festivalen, opkræves fuld standpris.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ansøgning om stand
            </Typography>
            <Typography variant="body1" gutterBottom>
              Ansøgning om stand i Riddersalen foregår på mail til Fantasyfestival, og kan kun foretages i det tidsrum, der er åbnet op for ansøgninger. Ansøgningen skal indeholde en kort beskrivelse af standholder, ønsker til standstørrelse (gerne i prioriteret rækkefølge) og kontaktinfo.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Henvendelser efter ansøgningsfristen kan komme i betragtning til ventelisten for indeværende festivalår. Ventelisten gælder kun for et år ad gangen, så ønsker du at blive skrevet op igen, skal du henvende sig igen, når der åbnes op for ansøgning om stande året efter.
            </Typography>

            <Divider variant="middle" sx={{ margin: '20px' }} />

            <Typography variant="h5" gutterBottom>
              Kunstnerhjørnet
            </Typography>
            <Typography variant="h6" gutterBottom>
              Priser og størrelser
            </Typography>
            <Typography variant="body1" gutterBottom>
              Der er endnu ikke åbent for standansøgninger til Fantasyfestival 2024.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Kunstnerhjørnets stande er 2x2,5 meter, og koster 500 kr. ekskl. moms i gebyr., som bliver indkrævet per faktura før Fantasyfestivalen afholdes.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Gebyr tilbagebetales ikke ved afbud modtaget efter udsendt faktura.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Muligheder for udstyr
            </Typography>
            <Typography variant="body1" gutterBottom>
              Standholdere får stillet borde med sort dug og stole til rådighed, samt strøm efter ønske.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Alt andet udstyr skal standholderne selv medbringe. Dette gælder også forlængerledninger.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Betingelser
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi forventer, du er en udøvende kunstner indenfor tegne- og malerkunst, craft og lignende af høj kvalitet. Det skal være i den klassiske fantasygenre. Forfattere henvises til Messeområdet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Det er et krav, at kunstnere i Kunstnerhjørnet er til stede i hele messens åbningstid både lørdag og søndag. Standholderne bedes om ikke at pakke standen ned før messens slutning søndag. Det vil være muligt at stille op allerede fredag 15. september. Nærmere oplysninger om opsætning og nedtagning fremsendes inden Fantasyfestivalen sammen med diverse andre praktiske informationer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi forventer, at din stand bliver udsmykket med dug, rekvisitter samt din kunst, så du bidrager til, at publikum får en så farverig og spændende oplevelse af Kunstnerhjørnet. Nogle stande har mulighed for ophæng af billeder i sort stof. Ellers skal du selv medbringe rekvisitter til det.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Du er velkommen til at sælge din kunst og ligeledes velkommen til at udøve/demonstrere din kunst på din stand. Det kræver ikke et CVR.nr. at sælge på standen.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ansøgning om stand
            </Typography>
            <Typography variant="body1" gutterBottom>
              Ansøgning om stand til Kunstnerhjørnet skal foregå på
              {' '}
              <a href="mailto: fantasyfestival@esbjerg.dk">denne mailadresse</a>
              .
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vi skal vide følgende:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Navn og adresse og evt. CVR-nummer.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Antal personer som deltager.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Vedhæft foto af din kunst og et portræt.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Tekst om dig selv og din kunst. Max. 5-8 linjer.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Links til sociale medier, hvor du viser/sælger din kunst (f.eks. Facebook, Instagram, hjemmeside eller Etsy)
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Du samtykker, at foto og tekst må bruges på Fantasyfestivalens hjemmeside, katalog, Facebook og Instagram.
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Vi tager forbehold for ændringer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Det er ikke længere muligt at ansøge om stande til Fantasyfestival 2023, men du kan blive skrevet på vores venteliste.
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'kunstnerhjørnet') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Om Kunstnerhjørnet
          </Typography>
          <Typography variant="h6" gutterBottom>
            Der er endnu ikke åbent for ansøgninger til Kunstnerhjørnet 2024, men herunder kan du se, hvem der lagde vejen forbi i 2023.
          </Typography>
          <Typography variant="h6" gutterBottom>
            På første sal kan du besøge Kunstnerhjørnet. Her har du en unik mulighed for at se illustratorer og kunstnere arbejde, købe deres værker og få en snak.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Mød årets deltagende kunstnere nedenfor.
          </Typography>
          <Typography variant="h6" gutterBottom fontStyle="italic">
            Der tages forbehold for ændringer.
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Anori-chan</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Jeg er Michelle – også kendt som Anori-chan online – og jeg har tegnet lige siden jeg kunne holde en blyant. Min stil er stærkt inspireret af, at jeg for 20 år siden fik stukket et japansk tegneseriehæfte i hånden, og jeg så mig aldrig tilbage. Foruden inspirationen fra manga, er jeg også storelsker af alt fantasy, hvilket ses i de mange elverpiger og havfruer, der dukker op på papiret, når jeg sidder og tegner. Til hverdag har jeg siden 2018 arbejdet ved forskellige forlag, hvor min primære opgaver har været af grafisk natur, bl.a. at kreere bogomslag men også tilrettelæggelse og opsætning af bøgernes indmad.
                  <br />
                  <br />
                  Find mig her:
                  <br />
                  <a href="https://www.instagram.com/anorichan?fbclid=IwAR1mVpi2fEGSkC_0up6k4fjhXDwtnTXUP4rsUrnRMASqb1cHTkNhnTelqqs">Instagram.com/anorichan</a>
                  <br />
                  <a href="https://www.facebook.com/Anorichan/">Facebook.com/anorichan</a>
                  <br />
                  <a href="https://www.anorichan.dk/?fbclid=IwAR19V0ru9eTHn-J5zJd96qSqSAaGX3rUSwjybGd_1yUnyxa7Wg65Q2gaRmQ">www.anorichan.dk</a>
                  <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Kunstnerhj%C3%B8rnet/Michelle.jpg" alt="Anori-chan" width="100%" />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div style={{ marginTop: 50 }}>
              <Typography variant="h5" gutterBottom>
                Kort over Kunstnerhjørnet
              </Typography>
              <Typography variant="body1" gutterBottom>
                For at gøre det nemt at finde rundt, har vi lavet et kort over standenes placering i Kunstnerhjørnet, som bliver uddelt fra billetsalget til Fantasyfestivalen.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Se det her:
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Kunstnerhj%C3%B8rnet/kort-kunstnerhj%C3%B8rnet-23.jpg" alt="Kort over Kunstnerhjørnet" width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'messe') {
    return (
      <div className="item">
        <div style={{ margin: 15, width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Messe
          </Typography>
          <Typography variant="h6" gutterBottom>
            Til dette års Fantasyfestival vil der endnu en gang være mulighed for at besøge de mange stande og købe fantasybøger, -spil og -effekter med hjem.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Der er endnu ikke åbent for standansøgninger til Fantasyfestival 2024, men herunder kan du se, hvem der lagde vejen forbi i 2023.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Se årets standholdere her.
          </Typography>
          <Typography variant="h6" gutterBottom fontStyle="italic">
            Der tages forbehold for ændringer.
          </Typography>

          <Divider variant="middle" />

          <div style={{ width: '80%', margin: 'auto', marginTop: '30px' }}>
            <Typography variant="h5" gutterBottom>
              Kort over Riddersalen
            </Typography>
            <Typography variant="body1" gutterBottom>
              For at gøre det nemt at finde rundt, har vi lavet et kort over standenes placering i Riddersalen, som bliver uddelt fra billetsalget til Fantasyfestivalen.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Se det her:
            </Typography>
            <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/kort-riddersalen-23.jpg" alt="" width="100%" />
            <div style={{ width: '40%' }}>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/DG-Logo.jpg" alt="DG-Logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/alvilda_logo.jpg" alt="alvilda_logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/BOG_IDE_logo.jpg" alt="BOG_IDE_logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/bunkern-logo.jpg" alt="bunkern-logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Calibat_logo.jpg" alt="Calibat_logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/carlsen_logo.jpg" alt="carlsen_logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/carlsenpuls.jpg" alt="carlsenpuls" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>Claus Holm</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/ComicFactory.jpg" alt="ComicFactory" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/dansk_fantasy.jpg" alt="dansk_fantasy" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/DreamLitt.jpg" alt="DreamLitt" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/forlaget_facet.jpg" alt="forlaget_facet" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Fantask.jpg" alt="Fantask" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/forlaget-afart-logo.jpg" alt="forlaget-afart-logo" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>Forlaget Esgaro</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Forlaget-Falco-logo.jpg" alt="Forlaget-Falco-logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Forlaget_Klippe.jpg" alt="Forlaget_Klippe" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Snepryd-logo-dansk-(002).jpg" alt="Snepryd-logo-dansk" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/gyldendal.jpg" alt="gyldendal" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Heroesoftheheart.jpg" alt="Heroesoftheheart" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Hi-Reader-logo.jpg" alt="Hi-Reader-logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/HUF-logo.jpg" alt="HUF-logo" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Krabat.jpg" alt="Krabat" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/LFL.jpg" alt="LFL" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>Mette Finderup</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Peasoup.jpg" alt="Peasoup" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>Rune S. Nielsen</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/scandinavian_costume.jpg" alt="scandinavian_costume" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>SCI-FI-CON - AFBUD</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Screaming Books - AFBUD</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Silhouet.jpg" alt="Silhouet" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Sminkeshoppen.jpg" alt="Sminkeshoppen" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/straarup_og_co.jpg" alt="straarup_og_co" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/superlux.jpg" alt="superlux" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>Sydvestjyske Museer</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/tellerup.jpg" alt="tellerup" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/LOGO_TFF.jpg" alt="LOGO_TFF" width="100%" />
              <Typography variant="body1" gutterBottom>
                <strong>The Kettle's</strong>
              </Typography>
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Turbineforlaget.jpg" alt="Turbineforlaget" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/Logoulvenoguglen.jpg" alt="Logoulvenoguglen" width="100%" />
              <img src="https://fantasyfestival.dk/Files/Images/Fantasyfestival/Messe/warcrafters.jpg" alt="warcrafters" width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextPage;
