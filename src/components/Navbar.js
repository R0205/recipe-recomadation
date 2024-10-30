
import { Link } from 'react-router-dom';
const Navbar = ({ isAuthenticated, onLogout }) => {


    return (
        <nav className="navbar">
            <div className="logo-container">
                <i className="fas fa-utensils"></i>
                <h1 className="logo-text">RecipeHub</h1>
            </div>

            <ul className='navbar-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>

                {isAuthenticated ? (
                    <>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li>
                            <Link to="/add-recipe">Add Recipe</Link>  {/* Add Recipe link */}
                        </li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li> <button className="logout-button" onClick={onLogout}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button></li>

                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>

                )}


            </ul>



        </nav>
    )
}
export default Navbar;
