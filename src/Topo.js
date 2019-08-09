import React from 'react'
import { Link } from 'react-router-dom';

const Topo = () => {
    return(
        <nav className="indigo darken-4" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">React Taskboard</a>
          <Link className="right" to="/">Estórias</Link>
        </div>
      </nav>
    );
}

export default Topo;