import React from 'react';
import SearchBar from './searchbar';
import MeliLogo from '../../assets/Logo_ML.png';
const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-md bg-warning">
            <div className="container align-items-center">
                    <a className="d-flex" href="/"><img src={MeliLogo} alt="MercadoLibre" /></a>
                    <SearchBar />
            </div>
        </nav>
     );
};
export default Navbar;