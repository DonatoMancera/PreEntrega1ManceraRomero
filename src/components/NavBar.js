import CartWidget from "./CartWidget";

function NavBar(imageBrand, link){
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main- navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href={link}>
                    <img src={imageBrand} width="112" height="28" alt="imagee"/>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href={link}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href={link}>
                        Trucks
                    </a>
                    <a className="navbar-item" href={link}>
                        Maderos
                    </a>
                    <a className="navbar-item" href={link}>
                        Ruedas
                    </a>
                </div>
                <div className="navbar-end columns">
                <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;