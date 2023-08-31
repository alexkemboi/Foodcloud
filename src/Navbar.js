// import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
    <div className="Navbar">
          {/* <!-- Navbar --> */}
    <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container">
            <a className="navbar-brand">Foodcloud</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  );
}

export default Navbar;
