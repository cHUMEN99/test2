import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { auth, firebase } from './firebaseConfig'; // Імпортуємо firebase з firebaseConfig
import 'bootstrap/dist/css/bootstrap.min.css';


const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return user ? children : <Navigate to="/products" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path="/products/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
};

export default App;
