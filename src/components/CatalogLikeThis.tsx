import {JSX} from 'react';
import {imageDirectory} from '../consts/SrcPath.ts';

function CatalogLikeThis(): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src={`${imageDirectory}/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
              alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
            />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of
              Grindelwald
            </a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src={`${imageDirectory}/bohemian-rhapsody.jpg`} alt="Bohemian Rhapsody" width="280" height="175"/>
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src={`${imageDirectory}/macbeth.jpg`} alt="Macbeth" width="280" height="175"/>
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Macbeth</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src={`${imageDirectory}/aviator.jpg`} alt="Aviator" width="280" height="175"/>
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Aviator</a>
          </h3>
        </article>
      </div>
    </section>
  );
}

export default CatalogLikeThis;
