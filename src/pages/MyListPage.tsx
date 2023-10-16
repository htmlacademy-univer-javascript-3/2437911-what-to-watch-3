import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import CatalogFilmCard from '../components/CatalogFilmCard.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';

function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <WTWLogo isLight={false}/>
        <h1 className="page-title user-page__title">My List <span className="user-page__film-count">9</span>
        </h1>;
        <UserBlock authStatus={AuthorizationStatuses.AUTH}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <CatalogFilmCard srcImg={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
            Title={'Fantastic Beasts: The Crimes of Grindelwald'}
          />
          <CatalogFilmCard srcImg={'img/bohemian-rhapsody.jpg'} Title={'Bohemian Rhapsody'}/>
          <CatalogFilmCard srcImg={'img/macbeth.jpg'} Title={'Macbeth'}/>
          <CatalogFilmCard srcImg={'img/aviator.jpg'} Title={'Aviator'}/>
          <CatalogFilmCard srcImg={'img/we-need-to-talk-about-kevin.jpg'}
            Title={'We need to talk about Kevin'}
          />
          <CatalogFilmCard srcImg={'img/what-we-do-in-the-shadows.jpg'} Title={'What We Do in the Shadows'}/>
          <CatalogFilmCard srcImg={'img/revenant.jpg'} Title={'Revenant'}/>
          <CatalogFilmCard srcImg={'img/johnny-english.jpg'} Title={'Johnny English'}/>
          <CatalogFilmCard srcImg={'img/shutter-island.jpg'} Title={'Shutter Island'}/>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
