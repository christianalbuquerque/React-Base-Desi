import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Topo from './Topo';
import Taskboard from './Taskboard';
import Rodape from './Rodape';
import Sobre from './Sobre';

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <Switch>
          <Route exact path='/' component={Taskboard}/>
          <Route path='/about' component={Sobre}/>
        </Switch>
        <Rodape />
      </div>
    );
  }
}

export default App;
