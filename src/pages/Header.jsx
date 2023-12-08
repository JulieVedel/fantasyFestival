import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styling/header.css';
import logo from '../logo_no_title.jpg';
import DropdownMenu from '../components/DropdownMenu';
import HeaderLink from '../components/HeaderLink';

export default function Header() {
  return (

    <div className="header">
      <nav>
        <div className="firstRow">
          <HeaderLink title="Fantasy Quest" link="/fantasy-quest" />
          <DropdownMenu
            title="Fællesskaber"
            routes={
            [
              { title: 'The Fantasy Fellowship', link: '/the-fantasy-fellowship' },
              { title: 'Sociale medier', link: '/sociale-medier' },
              { title: 'Galleri: Fantasyfestival 2022', link: '/billeder-fra-fantasyfestival-22' },
              { title: 'Galleri: Fantasyfestival 2021', link: '/billeder-fra-fantasyfestival-21' },
            ]
              }
          />
          <DropdownMenu
            title="Program"
            routes={
            [
              { title: 'Se program', link: '/program' },
              { title: 'Billetter', link: '/billetter' },
              { title: 'Kort over festivalen', link: '/kort-over-festivalen' },
              { title: 'Dansk Fantasy Pris', link: '/dansk-fantasy-pris' },
              { title: 'Guests of Honour', link: '/guests-of-honour' },
            ]
              }
          />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width={150} height={150} className="roundedLogo" />
          </Link>
        </div>
        <div className="lastRow">
          <DropdownMenu
            title="Praktisk info"
            routes={
            [
              { title: 'Om Fantasyfestivalen', link: '/om-fantasyfestivalen' },
              { title: 'Hvordan begyndte fantasyfestival', link: '/om-fantasyfestivalen/hvordan-begyndte-fantasyfestival' },
              { title: 'EAN- og CVR-numre', link: 'praktisk-info/ean-og-cvrnumre' },
              { title: 'FAQ', link: '/praktisk-info/FAQ' },
              { title: 'Praktikanter', link: '/praktisk-info/praktikanter' },
              { title: 'Sponsorer og samarbejdspartnere', link: '/praktisk-info/sponsorer-og-samarbejdspartnere' },
            ]
              }
          />
          <DropdownMenu
            title="Markedspladsen"
            routes={
            [
              { title: 'Standholdere og annoncører', link: '/standholdere-og-annoncoerer' },
              { title: 'Kunstnerhjørnet', link: '/kunstnerhjoernet' },
              { title: 'Markedsplads', link: '/markedsplads' },
              { title: 'Messe', link: '/messe' },
            ]
              }
          />
          <HeaderLink title="Min liste" link="/min-liste" />
        </div>
      </nav>
    </div>
  );
}
