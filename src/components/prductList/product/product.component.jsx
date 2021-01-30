import React from 'react';
import Shipping from '../../../assets/ic_shipping.png';
import {formatNumber} from '../../../utils/functions';
import { Link } from 'react-router-dom';
const freeShipping = (free_shipping) => {
    console.log('[FreeShipping]', free_shipping)
    if (free_shipping === true) {
       return <img className="shipping img-fluid" src={Shipping} />
    }
    return null
};
const linkRedirect = () => {
    console.log('Redirect')
}
const Product = (props) => {
    console.log(props)
    let picture = props.picture.replace("-O.jpg", "-V.jpg");
    return(
        <div className="product d-flex">
                <Link to={'/items/' + props.id}>
                <div className="image" title={props.title}>
                    <img className="rounded img-fluid" src={picture} />
                </div>
                </Link>
                <div className="descrip col">
                    <div className="descrip__top d-flex align-items-center mb-32">
                        <div className="price"><p className="t4">$ {formatNumber(props.price)}</p></div>
                        {freeShipping(props.free_shipping)}
                        <div className="city col"><p className="p1">{props.city}</p></div>
                    </div>
                    <Link to={'/items/' + props.id}>
                        <div className="descrip__bottom" title={props.title}>
                            <p className="p4">{props.title}</p>
                        </div>
                    </Link>
                </div>
            </div>
     );
};
export default Product;