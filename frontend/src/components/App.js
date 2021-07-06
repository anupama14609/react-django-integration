import React, { Component } from 'react';
import {render} from 'react-dom';
import {Grid,Typography} from '@material-ui/core';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render() {

        return (
             <h1>Django React Integration Testing</h1>
          )
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);