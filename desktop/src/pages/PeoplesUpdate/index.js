import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import {
  Container,
  People,
  Price,
  Slide,
  BtnDeletar,
  BtnEditar,
  Buttons,
} from './styles';

import api from '~/services/api';

export default function PeoplesUpdate() {
  const [peoples, setPeoples] = useState([]);
  const [serv, setServ] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadPeoples() {
      const response = await api.get('configuration/peoples');

      setPeoples(response.data);
    }
    loadPeoples();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.put(`configuration/peoples/${data.id}`, data);
    setMudou(Math.random() * 1000);
  }

  async function handleDelete(id) {
    await api.delete(`configuration/peoples/${id}`);
    setMudou(Math.random() * 1000);
  }

  async function handleSelect(id) {
    setServ(peoples.find(people => (people.id === id ? people : null)));
  }

  return (
    <Container>
      <aside>
        <strong>Editar Pessoas</strong>
        <button>
          <Link to="/peoplescreate">Cadastrar</Link>
        </button>
      </aside>
      <Form initialData={serv} onSubmit={handleSubmit}>
        <Input name="id" placeholder="ID" disabled />
        <Input name="name" placeholder="Nome" />
        <Input name="birth_date" placeholder="Aniversário" />
        <Input name="fone" placeholder="Telefone" />
        <Input name="email" placeholder="Email" />
        {/* <aside>
          <span>Ativo: </span>
          <Slide>
            <label className="switch">
              <Input
                name="active"
                type="checkbox"
                placeholder="active"
                checked={serv.active}
                onClick={() => handleMarkAsActive(serv.id)}
              />
              <div className="slider" />
            </label>
          </Slide>
        </aside> */}
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <strong>Pessoas cadastrados</strong>
      <ul>
        {peoples.map(people => (
          <People key={people.name}>
            <div>
              <strong>{people.name}</strong>
              <span>{people.description}</span>
            </div>
            <Price>
              <aside>
                <div>
                  <strong>Aniversário: </strong>
                </div>
                <span>{people.birth_date}</span>
              </aside>
            </Price>
            <aside>
              <strong>Telefone: </strong>
              <span>{people.fone} minutos</span>
            </aside>
            <Buttons>
              <BtnEditar type="button" onClick={() => handleSelect(people.id)}>
                Editar
              </BtnEditar>
              <BtnDeletar type="button" onClick={() => handleDelete(people.id)}>
                Deletar
              </BtnDeletar>
            </Buttons>
          </People>
        ))}
      </ul>
    </Container>
  );
}
