import React from 'react';
const categories = ['categoria1', 'categoria2', 'categoria3']
const renderCrumbs = (props) => {
    console.log(categories)
    return categories.map((i,key) => {
        return (<li key={key}className="breadcrumb-item"><a href="#" class="color-2">{i}</a></li>);
    })
};
const BreadCrumb = (props) => {
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {renderCrumbs()}
            </ol>
        </nav>
      
     );
};
export default BreadCrumb;