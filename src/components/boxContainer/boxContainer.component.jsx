import React from 'react';

const BoxContainer = (props) => {
    let containerStyles = props.containerStyles ? props.containerStyles : 'padding-16';
    return(
        <div className={"boxContainer " + containerStyles}>
            {props.children}
        </div>
     );
};
export default BoxContainer;