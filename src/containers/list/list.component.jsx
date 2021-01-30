import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadCrumb';
import ProductList from '../../components/prductList';

import {listCategories, listQuery} from '../../utils/mocks';

export class List extends React.Component {
    constructor(props) {
        console.log( 'list.constructor()');
        super();
        if( props.staticContext ) {
            this.state = {
                isLoading: false,
                query: props.query
            };
        } else if( window.initial_state ) {
            this.state = {
                isLoading: false,
                query: props.query.items
            };
        } else {
            this.state = {
                isLoading: true,
                query: listQuery,
                categories: listCategories
            };
        }
    }
    getSearch = () => {
        let search = new URLSearchParams(this.props.location.search);;
        return search.get("search");
    }
    //funcion estatica que se ejecuta en el pre-fetch
    static fetchData(search) {
        const getSearch = () => {
            let search = new URLSearchParams(this.props.location.search);
            search = search.get("search");
            return search;
        }
        return axios.get( 'https://api.mercadolibre.com/sites/MLA/search?q='+getSearch+'&limit=4' ).then( res => {
            let newItemsArray = [];
            res.map((o, i) => {
                console.log('inside map')
                let newItem = {      
                    "id": o.id,      
                    "title": o.title,      
                    "price": {        
                        "currency": o.currency_id,       
                        "amount": o.price,        
                        "decimals": null      
                    },      
                    "picture": o.thumbnail,      
                    "condition": o.condition,      
                    "city": o.address.state_name,
                    "free_shipping": o.shipping.free_shipping    
                };
                console.log('[NewItem]', newItem)
                newItemsArray.push(newItem);
                return query = {
                    "items": newItemsArray,
                    "categories": []
                }
                

            }).catch((err) => {
                console.error('Eror while fetching: ', err)
            })
            
            return response
        });
    }
    componentDidMount() {
        /* List.fetchData(this.getSearch()); */
    }
    render() {
        console.log( 'list.render()' );

        return (
            <div className='container'>
                <BreadCrumb/>
                <BoxContainer>
                    <ProductList items={this.state.query.items ? this.state.query.items : null} />
                </BoxContainer>
            </div>
        );
    }
}