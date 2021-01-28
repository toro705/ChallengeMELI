const { Home } = require( '../src/containers/home' );
const { List } = require( '../src/containers/list' );
const { Item } = require( '../src/containers/item' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/:query',
        exact: true,
        component: List,
    },
    {
        path: '/item:id',
        exact: true,
        component: Item,
    }
];
