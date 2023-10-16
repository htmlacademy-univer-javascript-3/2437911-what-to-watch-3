import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import PromoFilmCard from '../components/PromoFilmCard.tsx';
import CatalogFilmCard from '../components/CatalogFilmCard.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';

type MainPageProps = FilmInfo & { authStatus: AuthorizationStatuses };

function MainPage(promoFilmCardProps: MainPageProps): JSX.Element {
  return (
    <>
      <PromoFilmCard {...promoFilmCardProps}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

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
            <CatalogFilmCard srcImg={'img/what-we-do-in-the-shadows.jpg'}
              Title={'What We Do in the Shadows'}
            />
            <CatalogFilmCard srcImg={'img/revenant.jpg'} Title={'Revenant'}/>
            <CatalogFilmCard srcImg={'img/johnny-english.jpg'} Title={'Johnny English'}/>
            <CatalogFilmCard srcImg={'img/shutter-island.jpg'} Title={'Shutter Island'}/>
            <CatalogFilmCard srcImg={'img/pulp-fiction.jpg'} Title={'Pulp Fiction'}/>
            <CatalogFilmCard srcImg={'img/no-country-for-old-men.jpg'} Title={'No Country for Old Men'}/>
            <CatalogFilmCard srcImg={'img/snatch.jpg'} Title={'Snatch'}/>
            <CatalogFilmCard srcImg={'img/moonrise-kingdom.jpg'} Title={'Moonrise Kingdom'}/>
            <CatalogFilmCard srcImg={'img/seven-years-in-tibet.jpg'} Title={'Seven Years in Tibet'}/>
            <CatalogFilmCard srcImg={'img/midnight-special.jpg'} Title={'Midnight Special'}/>
            <CatalogFilmCard srcImg={'img/war-of-the-worlds.jpg'} Title={'War of the Worlds'}/>
            <CatalogFilmCard srcImg={'img/dardjeeling-limited.jpg'} Title={'Dardjeeling Limited'}/>
            <CatalogFilmCard srcImg={'img/orlando.jpg'} Title={'Orlando'}/>
            <CatalogFilmCard srcImg={'img/mindhunter.jpg'} Title={'Mindhunter'}/>
            <CatalogFilmCard srcImg={'img/midnight-special.jpg'} Title={'Midnight Special'}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>);
}

export default MainPage;
