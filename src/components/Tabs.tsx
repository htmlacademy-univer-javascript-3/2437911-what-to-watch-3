import {JSX, useState} from 'react';
import classNames from 'classnames';
import OverviewComponent, {OverviewProps} from './FilmPage/OverviewComponent.tsx';
import DetailsComponent, {DetailsProps} from './FilmPage/DetailsComponent.tsx';
import ReviewsComponent, {ReviewsProps} from './FilmPage/ReviewsComponent.tsx';

type FilmPageLinksProps = {
  title: string;
  view: JSX.Element;
}

type TabsProps = OverviewProps & ReviewsProps & DetailsProps;

function Tabs(props: TabsProps): JSX.Element {
  const links: FilmPageLinksProps[] = [
    {
      title: 'Overview',
      view: <OverviewComponent {...props}/>
    },
    {
      title: 'Details',
      view: <DetailsComponent {...props}/>
    },
    {
      title: 'Reviews',
      view: <ReviewsComponent {...props}/>
    }
  ];

  const [viewIndex, setViewIndex] = useState(0);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            links.map((link, index) => (
              <li
                className={classNames('film-nav__item', {'film-nav__item--active': index === viewIndex})}
                key={link.title}
              >
                <nav className='film-nav__link' onClick={() => setViewIndex(index)}>
                  {link.title}
                </nav>
              </li>
            ))
          }
        </ul>
      </nav>

      {links[viewIndex].view}
    </div>
  );
}

export default Tabs;
