import { Link } from "react-router-dom";
import "./../styles/login.css";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">

        <h1>Hospital Management System</h1>
        <p>Digital Healthcare Platform</p>

        <div className="btn-group">

          <Link to="/admin-login" className="home-btn">
            Admin Login
          </Link>

          <Link to="/doctor-login" className="home-btn">
            Doctor Login
          </Link>

          <Link to="/login" className="home-btn">
            Patient Login
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Home;