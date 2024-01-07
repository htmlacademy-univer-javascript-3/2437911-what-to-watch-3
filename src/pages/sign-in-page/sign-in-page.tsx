import {FormEvent, JSX, useRef} from 'react';
import Footer from '../../components/footer/footer.tsx';
import WtwLogo from '../../components/wtw-logo/wtw-logo.tsx';
import {Helmet} from 'react-helmet-async';
import {loginAction} from '../../store/actions/api-actions.ts';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state.ts';
import {useAppSelector} from '../../store';
import {getAuthError} from '../../store/auth/selectors.ts';

function SignInPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const errorMessage = useAppSelector(getAuthError);

  const dispatch = useDispatch<AppDispatch>();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current && emailRef.current.value !== '' && passwordRef.current && passwordRef.current.value !== '') {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <div className="user-page">
      <Helmet><title>WTW sign in</title></Helmet>

      <header className="page-header user-page__head">
        <WtwLogo isLight={false}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleFormSubmit}>

          {errorMessage && (
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" ref={emailRef}
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
