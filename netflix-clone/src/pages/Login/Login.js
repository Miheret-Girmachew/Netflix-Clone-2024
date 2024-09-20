import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebaseConfig';
import NetflixLogo from "../../assets/images/pngwing.com.png";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/SignUp');
  };

  const handleGetStartedClick = () => {
    if (email) {
      setIsEmailEntered(true);
      setEmailError('');
    } else {
      setEmailError("Please enter an email address.");
    }
  };

  const handlePasswordSubmit = async () => {
    if (password) {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        navigate('/dashboard'); 
        setPasswordError('');
      } catch (error) {
        setPasswordError("Invalid email or password."); 
      }
    } else {
      setPasswordError("Please enter a password.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value) {
      setPasswordError('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (isEmailEntered) {
        handlePasswordSubmit();
      } else {
        handleGetStartedClick();
      }
    }
  };

  return (
    <div className="app">
      <header className="header">
        <img src={NetflixLogo} alt="Netflix Logo" width="200" className="logo" />
        <button className="sign-in-btn" onClick={handleSignInClick}>Sign Up</button>
      </header>
      <main className="main-section">
        <div className="content">
          <h1 className="h11">Unlimited movies, TV shows, and more</h1>
          <p>Starts at USD 2.99. Cancel anytime.</p>
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className="email-form">
            {!isEmailEntered ? (
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                  onKeyDown={handleKeyDown}
                  autoComplete="email"
                />
                {emailError && <div className="error-message">{emailError}</div>}
                <button className="get-started-btn" onClick={handleGetStartedClick}>
                  Get Started
                </button>
              </div>
            ) : (
              <div className="input-container">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onKeyDown={handleKeyDown}
                  autoComplete="current-password"
                />
                {passwordError && <div className="error-message">{passwordError}</div>}
                <button className="get-started-btn" onClick={handlePasswordSubmit}>
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className="background-grid"></div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default Login;
