import React, { Component } from 'react';
import Estoria from './Estoria';

export default class Taskboard extends Component{
    render(){
        return(
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
            <h1 className="header center orange-text">Estórias</h1>
            <h3>2 estórias</h3>
                <Estoria 
                    titulo="Estevão"/>
                <Estoria
                    titulo="Christian"/>
            </div>
            </div>
        );
    }
}