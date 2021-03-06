import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// import child components
import { Home } from '../home';
import { List } from '../list';
import { Item } from '../item';

import Navbar  from '../../components/navbar';

// export entry application component
export class App extends React.Component {
    constructor() {
        console.log( 'App.constructor()' );
        super();
    }

    // render view
    render() {
        console.log( 'App.render()' );

        return (
            <div className='mainWrapper'>
                <Navbar />
                <Switch>
                    <Route
                        path='/'
                        exact={ true }
                        render={Home}
                    />

                    <Route
                        path='/items'
                        exact={ true }
                        component={List}
                    />
                    <Route
                        path='/item/:id'
                        exact={ true }
                        component={Item}
                    />
                </Switch>
                
            </div>
        );
    }
}