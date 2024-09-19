import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebaseConfig';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        navigate('/login');  // Redirect to login if not authenticated
      }
      setIsLoading(false); // Loading complete once auth state is resolved
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;  // Show loading state until auth check is done
  }

  return isAuthenticated ? children : null;  // Render children only if authenticated
};

export default ProtectedRoute;
