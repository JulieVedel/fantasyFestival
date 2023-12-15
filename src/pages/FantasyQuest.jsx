/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function FantasyQuest() {
  return (
    <div className="item">
      <div style={{ margin: 15, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Fantasy Quest Esbjerg
        </Typography>
        <Typography variant="h6" gutterBottom>
          Er du klar til at leve dig ind i en anden verden, en magisk historie, hvor du er helten, der er på en "quest" for at overvinde de onde magter og redde hele verden? Så gør dig klar til Fantasy Quest Esbjerg.
        </Typography>

        <Divider variant="middle" />

        <div style={{
          width: '80%', textAlign: 'center', margin: 'auto', marginTop: '30px',
        }}
        >
          <Typography variant="body1" gutterBottom>
            Forestil dig ”Fangerne på Fortet” tilsat et par escape rooms, en masse magi, noget teater og rollespil, nogle helte og skurke og selvfølgelig kampen mellem det gode og det onde, så er du godt på vej til Fantasy Quest Esbjerg.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Fantasy Quest Esbjerg får i 2024 både en svær aftenudgave og en familievenlig udgave i dagstimerne under Fantasyfestivalen, der er skrevet i samarbejde med YouTuberen Lakserytteren, hvor alle kan være med. Har du lyst til lidt større udfordringer, så skrues sværhedsgraden op, når tusmørket lægger sig over Esbjergs gader.
          </Typography>
        </div>

        <div style={{ display: 'flex', width: '100%', marginTop: 50 }}>
          <div style={{ width: '50%', margin: 20 }}>
            <Typography variant="h6" gutterBottom>
              En oplevelse for hele familien
            </Typography>
            <Typography variant="body1" gutterBottom>
              Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det handler om at leve sig ind i en anden verden, en magisk historie, hvor I sammen er på en ”quest” – en mission, en opgave, en jagt. Her møder I magiske væsner, der stiller jer nogle opgaver og udfordringer undervejs mod målet, som I skal løse sammen for at gennemføre Questen. Sværhedsgraden er sænket, så børnene kan være med til at løse opgaverne. Men tag ikke fejl, der er brug for alle gode kræfter og samarbejdsevner, hvis I skal være med til at redde Esbjerg. Som en ekstra bonus kan I møde YouTuberen Lakserytteren undervejs i Questen rundt i Esbjergs gader.
            </Typography>
          </div>
          <div style={{ width: '50%' }}>
            <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/fantasyfestival-1.jpg&width=1920" alt="En oplevelse for hele familien" width="100%" />
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            NightQuesten: Udfordr vennerne!
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/Fantasy_Festival_Esbjerg_20.jpg&width=1920" alt="Kalder alle escaperooms-fans!" width="100%" />
            </div>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="h6" gutterBottom>
                Kalder alle escaperooms-fans!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i Questen op. Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.  Er du vild med escaperooms, så må du ikke snyde dig selv for denne ultimative oplevelse, hvor vi tager alt det magiske fra de velkente escaperooms og sender ud i Esbjergs gader og stræder og sender dig og vennerne på jeres ultimative eventyr, hvor I er nødt til at samarbejde og udtænke nye løsninger for at gennemføre Questen.
              </Typography>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Køb billetter til Fantasy Quest Esbjerg 2024
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '30%', margin: 20 }}>
              <Typography variant="h6" gutterBottom>
                Så er billetsalget skudt igang!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vil du sikre dig en plads til Fantasy Quest Esbjerg 2024, så skynd dig at købe en billet allerede nu. Du bestemmer selv, om din billet skal være til Familieudgaven eller NightQuesten. Prisen stiger desto tættere vi kommer på Fantasyfestival i september.
              </Typography>
              <Button startIcon={<OpenInNewIcon />} onClick={() => { window.open('https://www.ticketmaster.dk/event/fantasy-quest-esbjerg-billetter/541663', 'blank'); }}>
                Køb din billet til Questen her.
              </Button>
            </div>
            <div style={{ width: '70%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/quest-D.jpg&width=825" alt="Så er billetsalget skudt igang!" width="100%" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Esbjergs helt egen fantasyfortælling: Fantasy Quest Esbjerg
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="h6" gutterBottom>
                I gamle dage sagde man...
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                ... at det onde ville komme fra havet. Gennem generationer blev den fortælling givet videre. Man hørte den, da Esbjerg blev grundlagt i 1868. Man holdt altid øje med havet. Mod vest.
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                Så i Esbjerg byggede man et værn mod ondskaben. Noget der skulle holde øje med havet, noget der skulle træde i karakter, hvis det gik galt. I 1995 blev det værn forstærket, da skulpturerne ”Mennesket ved havet” blev skabt. Mens kunstneren byggede om dagen, arbejdede troldmanden Gygaz den Vise om natten.
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                Gygaz åbnede en portal til kæmpernes verden. Her fandt han frem til fire gode kæmper, der meldte sig frivilligt. De sagde farvel til deres familier og travede gennem portalen mod Esbjerg. Her mødtes de med Gygaz. Luften sitrede af magi, og da de sidste ord i en magtfuld formular forlod Gygaz' læber, var de fire kæmper blevet ét med statuerne af de fire hvide mænd. På den måde kunne de til evig tid holde øje med havet...
              </Typography>
            </div>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/fantasyfestival-5.jpg&width=1280" alt="I gamle dage sagde man..." width="100%" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Årene gik, og der var fred og ro...
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/fantasyfestival-2.jpg&width=1280" alt="Årene gik, og der var fred og ro..." width="100%" />
            </div>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                ...Men så begyndte der at ske mystiske ting. Naturen blev syg. De gamle talte om ondskaben. Om vogterne. En dag trak skyerne sig sammen, over havet mod vest, og der blev unaturligt mørkt. Lyn flængede himlen. Man kunne se en stor, bevinget skabning på himlen.
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                De fire statuer rejste sig op, vogterne var blevet vækket, de gjorde sig klar og råbte. Råbene kunne høres over hele landet, på tværs af portaler til andre verdener. ”Der er brug for helte i Esbjerg!”, råbte de.
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                Det er tid til, at heltene samles. Det er tid til, at ondskaben skal bekæmpes. Det er tid til, at portalerne lukkes.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Det er tid til Fantasy Quest Esbjerg. Er du klar?
              </Typography>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>
            Vi kalder alle helte
          </Typography>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%', margin: 20 }}>
              <Typography variant="h6" gutterBottom>
                Sådan kommer I med på Quest
              </Typography>
              <Typography variant="body1" gutterBottom>
                Her kan I løbende finde de praktiske oplysninger om Fantasy Quest Esbjerg 2024.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Questen er for hele familien, fra 7 år og op, da de helt små ikke vil få det store ud af fortællingen – og så er der også et par skumle skurke iblandt rollespillerne.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Man skal ikke være udklædt, men man må meget gerne være det.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Questen foregår lørdag 14. september 2024 under Fantasyfestival.
                <ul>
                  <li>Familieudgaven: kl. 10.00 - 14.00</li>
                  <li>AftenQuesten: kl. 18.00 - 22.00</li>
                </ul>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Questen tager ca. en time at gennemføre.  I vælger selv, hvilken Quest I deltager i, når I køber billetter.
              </Typography>
            </div>
            <div style={{ width: '50%' }}>
              <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/fantasyfestival-4.jpg&width=1280" alt="Sådan kommer I med på Quest" width="100%" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <div style={{ width: '70%', margin: 'auto', textAlign: 'center' }}>
            <Typography variant="body1" gutterBottom>
              Vi glæder os enormt meget til at byde velkommen til dette års store satsning på Fantasyfestival, nemlig Fantasy Quest Esbjerg. Det bliver megasjovt, anderledes og spændende.
            </Typography>
          </div>
          <Divider variant="middle" sx={{ margin: '40px' }} />
          <div>
            <Typography variant="h5" gutterBottom>
              Der brygges videre på Questen
            </Typography>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ width: '50%' }}>
                <img src="https://fantasyfestival.dk/admin/public/GetImage.ashx?Image=/Files/Images/Fantasyfestival/Quest/Fantasyfestival_2024_Ticket.jpg&width=1280" alt="Der brygges videre på Questen" width="100%" />
              </div>
              <div style={{ width: '50%', margin: 20 }}>
                <Typography variant="h6" gutterBottom>
                  Lakserytteren er med ombord
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Fantasy Quest Esbjerg er kommet for at blive en del af Fantasyfestivalen. 2023 var året, hvor questen blev testet af i mindre skala. 2024 har Fantasyfestival 10 års jubilæum og derfor bliver der også brygget videre på årets historie bag Questen, så vi kan blæse jer bagover i en fantastisk oplevelse. Det er ikke et hvilket som helst hold, der står bag Esbjergs helt egen fantasyfortælling. Questen er skrevet af et yderst kompetent hold, hvoraf den mest kendte nok er Rasmus Kolbe, der også er bedre kendt som Lakserytteren. Rasmus deltager også selv i Questen 2024, hvor alle deltagere har mulighed for at møde ham personligt undervejs.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginTop: 50 }}>
          <Button variant="contained" endIcon={<OpenInNewIcon />} onClick={() => { window.open('https://www.ticketmaster.dk/event/fantasy-quest-esbjerg-billetter/541663', 'blank'); }}>
            Køb din billet til Fantasy Quest Esbjerg 2024
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FantasyQuest;
