import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadCrumb';
import ProductList from '../../components/prductList';

import {list} from '../../utils/mocks';

export class List extends React.Component {
    constructor(props) {
        console.log( 'list.constructor()' );
        super();
        if( props.staticContext ) {
            this.state = {
                isLoading: false,
                items: props.stataicContext.list
            };
        } else if( window.initial_state ) {
            this.state = {
                isLoading: false,
                items: props.stataicContext.list
            };
        } else {
            this.state = {
                isLoading: true,
                items: ''
            };
        }
    }
    static fetchData() {

        return axios.get( 'https://jsonplaceholder.typicode.com/posts/3' ).then( response => {
            return {
                title: response.data.title,
                body: response.data.body,
            };
        });
    }
    render() {
        console.log( 'list.render()' );

        return (
            <div className='container'>
                <BreadCrumb/>
                <BoxContainer>
                    <ProductList items={this.state.items} />
                </BoxContainer>
            </div>
        );
    }
}