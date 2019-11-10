import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, People, Price, Slide } from './styles';

import api from '~/services/api';

export default function Peoples() {
  const [peoples, setPeoples] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadPeoples() {
      const response = await api.get('configuration/peoples');

      setPeoples(response.data);
    }
    loadPeoples();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.post('configuration/peoples', data);
    setMudou(Math.random() * 1000);
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
        <Input name="fone" placeholder="Telefone" />
        <Input name="email" placeholder="E-mail" />
        <Input name="birth_date" placeholder="Aniversário" />
        <Input name="cpf" placeholder="CPF" />
        <Input name="rg" placeholder="RG" />
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
