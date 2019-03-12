import React, { Component } from 'react';
import Topo from './Topo';
import Taskboard from './Taskboard';
import Rodape from './Rodape';

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <Taskboard />
        <Rodape />
      </div>
    );
  }
}

export default App;
