import React from 'react';
import Product from './product';
const renderItems = (items) => {
    console.log('[ProductList Items]', items)
    if (items !== null) {
        return items.map((i,key) => {
            return (<Product 
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        free_shipping={i.free_shipping}
                        picture={i.picture}
                        price={i.price.amount}
                        city={i.city}
                    />);
        })
    }
    return null
};
const ProductList = (props) => {
    return(
        <div className="productList">
            {renderItems(props.items)}
        </div>
     );
};
export default ProductList;