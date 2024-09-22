import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebaseConfig';
import NetflixLogo from '../../assets/images/pngwing.com.png';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 3000); 
      return () => clearTimeout(timer); 
    }
  }, [errorMessage]);

  const handleSignUpClick = async (e) => {
    e.preventDefault();
  
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        navigate('/Login'); // Redirect to the home page or any other route on successful sign-up
      } catch (error) {
        // Handle specific Firebase Authentication errors
        if (error.code === 'auth/invalid-email') {
          setErrorMessage('Invalid email format.');
        } else if (error.code === 'auth/weak-password') {
          setErrorMessage('Password should be at least 6 characters.');
        } else if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('Email is already in use.');
        } else {
          setErrorMessage('An error occurred: ' + error.message);
        }
      }
    } else {
      setErrorMessage('Passwords do not match!');
    }
  };
  
  return (
    <div className="app">
      <header className="header">
        <img src={NetflixLogo} alt="Netflix Logo" width="200" className="logo" />
        <button className="sign-in-btn" onClick={() => navigate('/login')}>Sign In</button>
      </header>
      <main className="main-section">
        <div className="form-container">
          <h2 className="h11">Create Your Account</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form className="sign-up-form" onSubmit={handleSignUpClick}>
            <table className="sign-up-table">
              <tbody>
                <tr>
                  <td>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit" className="get-started-btn">Sign Up</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </main>
      <div className="background-grid"></div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default SignUp;
