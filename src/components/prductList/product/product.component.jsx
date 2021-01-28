import React from 'react';
import Shipping from '../../../assets/ic_shipping.png';
import {formatNumber} from '../../../utils/functions';

const freeShipping = (free_shipping) => {
    console.log('[FreeShipping]', free_shipping)
    if (free_shipping === true) {
       return <img class="shipping img-fluid" src={Shipping} />
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
            <a className="image" href={linkRedirect} title={props.title}>
                <img className="rounded img-fluid" src={picture} />
            </a>
            <div className="descrip col">
                <div className="descrip__top d-flex align-items-center mb-32">
                    <div className="price"><p class="t4">$ {formatNumber(props.price)}</p></div>
                    {freeShipping(props.free_shipping)}
                    <div className="city col"><p class="p1">{props.city}</p></div>
                </div>
                <a className="descrip__bottom" title={props.title}>
                    <p class="p4">{props.title}</p>
                </a>
            </div>
        </div>
     );
};
export default Product;