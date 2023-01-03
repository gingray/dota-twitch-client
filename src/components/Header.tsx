import headerImage from '../images/mateo-nCU4yq5xDEQ-unsplash.jpg'
import {Link} from "react-router-dom";
export const Header = () => {
    return (<header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className={'nav-link'} to={'/'}>Dota Twitch</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className={'nav-link'} to={'/matches'}>Matches</Link>*/}
                        {/*</li>*/}

                        <li className="nav-item">
                            <Link className={'nav-link'} to={'/about'}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="jumbotron-container">
            <div className={'app-jumbotron'}/>
        </div>
    </header>)
}