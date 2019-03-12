import React, { Component } from 'react';

export default class EstoriaForm extends Component{

    _handleSubmit(event) {
        event.preventDefault()
        let titulo = this._titulo.value
        let pontos = this._pontos.value
        let descricao = this._descricao.value
        this.props.adicionarEstoria(titulo, pontos, descricao)
    }

    render(){
        return(
            <div class="row">
                <form className="col s12"  onSubmit={this._handleSubmit.bind(this)}>
                <h5>+1 Estória</h5>
                <div className="input-field col s12">
                <input placeholder="Titulo" ref={ input => this._titulo = input}/><br/>
                <input placeholder="Pontos" ref={ input => this._pontos = input}/><br/>
                <textarea placeholder="Descrição"
                className="materialize-textarea" ref={ textarea => this._descricao = textarea}></textarea>
                <button className="btn waves-effect waves-light"
                type="submit">Enviar</button>
                </div>
                </form>
            </div>
        );
    }
}

