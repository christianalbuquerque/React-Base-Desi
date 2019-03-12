import React, { Component } from 'react';

export default class Estoria extends Component{
    render(){
        return(
            <div>
      <div className="row">
        <div className="col s12 m12">
          <div className="card indigo darken-3">
            <div className="card-content white-text"> 
              <span className="card-title">{this.props.titulo}</span>
              <p>{this.props.descricao}<span className="badge white">{this.props.pontos} pontos</span></p>
            </div>
            <div className="card-action">
              <a className="right" href="#">Exibir Estória</a>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}