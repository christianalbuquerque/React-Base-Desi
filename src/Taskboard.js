import React, { Component } from 'react';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';

export default class Taskboard extends Component{

    constructor() {
        super();
        this.state = {
        estorias : [{
        id: 1,
        titulo: "Contratar Seguro",
        descricao: "Como usuario gostaria de contratar ...",
        pontos: 10}
        ]}
    }
    
    _getEstorias(){
        return this.state.estorias.map( estoria => <Estoria 
            titulo={estoria.titulo} descricao={estoria.descricao} 
            pontos={estoria.pontos} key={estoria.id}/> )
    }

    _getTitulo(totalDeEstorias){
        if(totalDeEstorias === 0){
            return "Backlog Vazio";
        } else if(totalDeEstorias === 1){
            return "1 estória";
        } else{
            return `${totalDeEstorias} estórias`; 
        }
    }

    _adicionarEstoria(titulo, pontos, descricao) {
        const estoria = {
        titulo,
        descricao,
        pontos,
        id: this.state.estorias.length + 1
        };
        this.setState({
            estorias: this.state.estorias.concat([estoria]) 
        });
    }
    
    
    render(){
        const estorias = this._getEstorias();
        const titulo = this._getTitulo(estorias.length);
        return(
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
            <h1 className="header center orange-text">Estórias</h1>
            <h3>{titulo}</h3>
               {estorias}
               <EstoriaForm 
                adicionarEstoria={this._adicionarEstoria.bind(this)} />
            </div>
            </div>
        );
    }
}