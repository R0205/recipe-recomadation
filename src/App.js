/* import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import About from './pages/About';
import Login from './components/Login';
import Register from "./components/Register";
import Recipes from './pages/Recipes';
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Spinner from "./components/Sppiner";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check for authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login state change
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout with a simulated delay for better UX
  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    localStorage.removeItem('token');  // Clear authentication token
    setIsAuthenticated(false);
    setLoading(false);
  };


  const handleLoadingStart = () => setLoading(true); 
  const handleLoadingEnd = () => setLoading(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {loading && (
        <div className="spinner-container">
          <Spinner />
          <h2 className="loading-text">Logging...</h2>
        </div>
      )}



      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/recipes"
          element={ isAuthenticated ? <Recipes /> : <Navigate to="/login" />}
        />
        <Route
          path="/testimonials"
          element={isAuthenticated ? <Testimonials /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/recipes" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />
        <Route
          path="/add-recipe"
          element={isAuthenticated ? <AddRecipe /> : <Navigate to="/login" />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
 */

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import About from './pages/About';
import Login from './components/Login';
import Register from "./components/Register";
import Recipes from './pages/Recipes';
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Spinner from "./components/Sppiner";// Corrected the import path
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check for authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login state change
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout with a simulated delay for better UX
  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    localStorage.removeItem('token'); // Clear authentication token
    setIsAuthenticated(false);
    setLoading(false);
  };

  const handleLoadingStart = () => setLoading(true); 
  const handleLoadingEnd = () => setLoading(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {loading && (
        <div className="spinner-container">
          <Spinner />
          <h2 className="loading-text">Loading...</h2>
        </div>
      )}

      <Routes>
        <Route 
          path="/" 
          element={<Home isAuthenticated={isAuthenticated} />} 
        />
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/recipes" 
          element={
            isAuthenticated ? (
              <Recipes 
                onLoadingStart={handleLoadingStart} 
                onLoadingEnd={handleLoadingEnd}
              />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        <Route 
          path="/testimonials" 
          element={
            isAuthenticated ? (
              <Testimonials 
                onLoadingStart={handleLoadingStart} 
                onLoadingEnd={handleLoadingEnd}
              />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/recipes" /> : <Login onLogin={handleLogin} />} 
        />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/recipe/:id" 
          element={<RecipeDetails />} 
        />
        <Route 
          path="/add-recipe" 
          element={
            isAuthenticated ? (
              <AddRecipe 
                onLoadingStart={handleLoadingStart} 
                onLoadingEnd={handleLoadingEnd}
              />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
