import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <nav id="menu" className="side-left">
        <ul className="content">
          <li>
            <Link to="/">Agenda</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
          <li>
            <Link to="/configuration">Configurações</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <footer className="site-footer" />
    </Container>
  );
}
