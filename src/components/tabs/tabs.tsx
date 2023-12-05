import {JSX, useState} from 'react';
import classNames from 'classnames';
import OverviewComponent, {OverviewProps} from '../FilmPage/overview-component.tsx';
import DetailsComponent, {DetailsProps} from '../FilmPage/details-component.tsx';
import ReviewsComponent, {ReviewComponentProps} from '../FilmPage/reviews-component.tsx';

enum TabsTitle {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

type FilmPageLinksProps = {
  title: TabsTitle;
  view: JSX.Element;
}

type TabsProps = OverviewProps & DetailsProps & ReviewComponentProps;

function Tabs(props: TabsProps): JSX.Element {
  const links: FilmPageLinksProps[] = [
    {
      title: TabsTitle.Overview,
      view: <OverviewComponent {...props}/>
    },
    {
      title: TabsTitle.Details,
      view: <DetailsComponent {...props}/>
    },
    {
      title: TabsTitle.Reviews,
      view: <ReviewsComponent {...props}/>
    }
  ];

  const [selectTab, setSelectTab] = useState(TabsTitle.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            links.map((link) => (
              <li
                className={classNames('film-nav__item', {'film-nav__item--active': link.title === selectTab})}
                key={link.title}
              >
                <nav className='film-nav__link' onClick={() => setSelectTab(link.title)}>
                  {link.title}
                </nav>
              </li>
            ))
          }
        </ul>
      </nav>

      {links.find((link) => link.title === selectTab)?.view}
    </div>
  );
}

export default Tabs;
