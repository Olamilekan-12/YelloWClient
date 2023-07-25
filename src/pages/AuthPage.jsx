import { useEffect, useRef, useState } from 'react';
import Header from '../layout/Header';
import GoogleIcon from '@mui/icons-material/Google';
import './auth.css';
import { FacebookOutlined } from '@mui/icons-material';
import { useGlobalContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const container = useRef(null);
  const navigate = useNavigate();

  const {
    user,
    isLoading,
    error,
    errorMsg,
    dispatch,
    registerUser,
    loginUser,
  } = useGlobalContext();

  const onSignUpClick = () => {
    container.current.classList.add('right-panel-active');
  };
  const onSignInClick = () => {
    container.current.classList.remove('right-panel-active');
  };

  const onSignUpClicked = (e) => {
    e.preventDefault();
    registerUser({
      email: email.trim(),
      password: password.trim(),
      name: name.trim(),
      phoneNumber: phone.trim(),
    });
  };
  const onSignInClicked = (e) => {
    e.preventDefault();
    loginUser({
      email: email.trim(),
      password: password.trim(),
    });
  };
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
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
              {error && (
                <p className="text-[1rem] mb-4 font-medium text-red-600">
                  {errorMsg}
                </p>
              )}
              <input
                type="text"
                placeholder="Name"
                className="mb-2 p-2 rounded-md"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-2 p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="mb-2 p-2 rounded-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2 p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                onClick={onSignUpClicked}
                className="px-4 mt-2 py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait' : 'Register'}
              </button>
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
              {error && (
                <p className="text-[1rem] mb-4 font-medium text-red-600">
                  {errorMsg}
                </p>
              )}
              <input
                type="email"
                placeholder="Email"
                className="mb-2 p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2 p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#">Forgot your password?</a>
              <button
                onClick={onSignInClicked}
                className="px-4 mt-2 py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait' : 'Sign In'}
              </button>
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
