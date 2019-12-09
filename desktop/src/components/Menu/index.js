import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import api from '~/services/api';

export default function Menu() {
  const [schedule, setSchedule] = useState();
  const [financial, setFinancial] = useState();
  const [people, setPeople] = useState();
  const [services, setServices] = useState();
  const [grafics, setGrafics] = useState();
  const [users, setUsers] = useState();
  const [configuration, setConfiguration] = useState();

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('rolepermission');

      setSchedule(response.data[0].role.schedule);
      setFinancial(response.data[0].role.financial);
      setPeople(response.data[0].role.people);
      setServices(response.data[0].role.services);
      setGrafics(response.data[0].role.grafics);
      setUsers(response.data[0].role.users);
      setConfiguration(response.data[0].role.configuration);
    }

    loadRoles();
  }, []);

  return (
    <Container>
      <nav id="menu" className="side-left">
        <ul className="content">
          {schedule === true && (
            <li>
              <Link to="/">Agenda</Link>
            </li>
          )}
          {financial === true && (
            <li>
              <Link to="/financials">Finanças</Link>
            </li>
          )}
          {people === true && (
            <li>
              <Link to="/peoples">Pessoas</Link>
            </li>
          )}
          {services === true && (
            <li>
              <Link to="/services">Serviços</Link>
            </li>
          )}
          {grafics === true && (
            <li>
              <Link to="/grafics">Gráficos</Link>
            </li>
          )}
          {console.log(users)}
          {users === true && (
            <li>
              <Link to="/users">Usuários</Link>
            </li>
          )}
          {configuration === true && (
            <li>
              <Link to="/roles">Funções</Link>
            </li>
          )}
          {configuration === true && (
            <li>
              <Link to="/configuration">Configurações</Link>
            </li>
          )}
        </ul>
      </nav>

      <hr />

      <footer className="site-footer" />
    </Container>
  );
}
