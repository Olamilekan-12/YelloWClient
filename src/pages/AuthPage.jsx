import { useRef, useState } from 'react';
import Header from '../layout/Header';
import GoogleIcon from '@mui/icons-material/Google';
import './auth.css';
import { FacebookOutlined } from '@mui/icons-material';
const AuthPage = () => {
  const container = useRef(null);

  const onSignUpClick = () => {
    container.current.classList.add('right-panel-active');
  };
  const onSignInClick = () => {
    container.current.classList.remove('right-panel-active');
  };
  return (
    <main className="auth">
      <Header />
      <div className="px-4 lg:px-0 pt-[30%] lg:pt-[15%] flex flex-col justify-center items-center">
        <div className="container" ref={container}>
          <div className="form-container sign-up-container">
            <form>
              <h1 className="text-2xl font-medium">Sign Up</h1>
              <div className="social-container">
                <span href="#" className="social">
                  <GoogleIcon fontSize="large" />
                </span>
                <span href="#" className="social">
                  <FacebookOutlined fontSize="large" />
                </span>
                <span href="#" className="social">
                  <GoogleIcon fontSize="large" />
                </span>
              </div>
              <p className="text-[1rem] mb-4 font-medium">
                or use your email for registration
              </p>
              <input
                type="text"
                placeholder="Name"
                className="mb-2 p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-2 p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="mb-2 p-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2 p-2 rounded-md"
              />
              <button className="px-4 mt-2 py-2">Register</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1 className="text-2xl font-medium">Sign In</h1>
              <div className="social-container">
                <span href="#" className="social">
                  <GoogleIcon fontSize="large" />
                </span>
                <span href="#" className="social">
                  <FacebookOutlined fontSize="large" />
                </span>
                <span href="#" className="social">
                  <GoogleIcon fontSize="large" />
                </span>
              </div>
              <p className="text-[1rem] mb-4 font-medium">or use your email</p>
              <input
                type="email"
                placeholder="Email"
                className="mb-2 p-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2 p-2 rounded-md"
              />
              <a href="#">Forgot your password?</a>
              <button className="px-4 mt-2 py-2">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>Please login with your personal info</p>
                <button
                  className="ghost px-4 mt-2 py-2"
                  onClick={onSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="ghost px-4 mt-2 py-2"
                  onClick={onSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
