import React from 'react';
import Lupa from '../../../assets/ic_Search.png';
const handleSubmit = (event) => {
    event.preventDefault();
    let searchValue = event.target[0].value;
    location.replace(`/items?search=${searchValue}`);
    
}
const Searchbar = (props) => {
    return(
        <form className="input-group" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" />
            <button className="input-group-text" type="submit"><img src={Lupa} alt="Lupa" /></button>
        </form>
     );
};
export default Searchbar;