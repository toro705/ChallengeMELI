import React from 'react';

export class Home extends React.Component {
    constructor() {
        console.log( 'Home.constructor()' );
        super();
    }
    render() {
        console.log( 'home.rendersape()' );

        return (
            <div className="iframeContainer">
                <iframe src="https://mercadolibre.com.ar" title="iframe mercadolibre" height="100%" wifth="100%" />
            </div>
            
        );
    }
}