import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, People, Price, Slide } from './styles';

import api from '~/services/api';

export default function Peoples() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    async function loadPeoples() {
      const response = await api.get('configuration/peoples');

      setPeoples(response.data);
    }
    loadPeoples();
  }, [peoples]);

  async function handleSubmit(data) {
    await api.post('configuration/peoples', data);
  }

  return (
    <Container>
      <aside>
        <strong>Cadastro de Pessoas</strong>
        <button>
          <Link to="/peoples">Voltar</Link>
        </button>
      </aside>
      <Form initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="price" placeholder="Telefone" />
        <Input name="duration" placeholder="E-mail" />
        <Input name="description" placeholder="Aniversário" />
        <Input name="duration" placeholder="CPF" />
        <Input name="duration" placeholder="RG" />
        {/* <aside>
          <span>Fornecedor: </span>
          <Slide>
            <label className="switch">
              <Input
                name="provider"
                type="checkbox"
                placeholder="active"
                onClick={() => handleMarkAsActive(serv.id)}
              />
              <div className="slider" />
            </label>
          </Slide>
        </aside> */}
        {/* <Input name="duration" placeholder="Usuário" /> */}        
        <hr />
        <button type="submit">
          <Link to="/peoples">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
