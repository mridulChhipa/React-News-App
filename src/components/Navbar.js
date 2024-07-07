import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav className="navbar sticky-top navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Verita Sium</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category &nbsp;
                            </span>
                            <ul className="dropdown-menu">
                                <li><Link to={"/business"} className="dropdown-item">Business</Link></li>
                                <li><Link to={"/"} className="dropdown-item active">General</Link></li>
                                <li><Link to={"/entertainment"} className="dropdown-item">Entertainment</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to={"/health"} className="dropdown-item">Health</Link></li>
                                <li><Link to={"/sports"} className="dropdown-item">Sports</Link></li>
                                <li><Link to={"/technology"} className="dropdown-item">Technology</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Country &nbsp;
                            </span>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item">US</button></li>
                                <li><button className="dropdown-item">India</button></li>
                                <li><button className="dropdown-item">China</button></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <button className="btn btn-outline-success">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
