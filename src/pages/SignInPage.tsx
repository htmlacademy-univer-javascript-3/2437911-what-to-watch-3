import {FormEvent, JSX, useRef} from 'react';
import Footer from '../components/Footer.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import {Helmet} from 'react-helmet-async';
import {loginAction} from '../store/api-actions.ts';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {useAppSelector} from '../store';

function SignInPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const errorMessage = useAppSelector((state) => state.error);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <div className="user-page">
      <Helmet><title>WTW sign in</title></Helmet>

      <header className="page-header user-page__head">
        <WTWLogo isLight={false}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>

          {errorMessage && (
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password"
                name="user-password" id="user-password" ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>

          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default SignInPage;
