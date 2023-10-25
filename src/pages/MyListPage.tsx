import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {FilmTypes} from '../types/filmTypes.ts';
import FilmsList from '../components/FilmsList.tsx';
import {Helmet} from 'react-helmet-async';

type MyListProps = {
  films: FilmTypes[];
}

function MyListPage({films}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Helmet><title>My list</title></Helmet>
      <header className="page-header user-page__head">
        <WTWLogo isLight={false}/>
        <h1 className="page-title user-page__title">My List <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock authStatus={AuthorizationStatuses.AUTH}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
