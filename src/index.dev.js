import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App components
import { App } from './containers/app';

// compile App component in `#app` HTML element
ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById( 'app' ) );
