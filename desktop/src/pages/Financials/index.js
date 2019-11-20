// NOVO
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import api from '~/services/api';

export default function Financials() {
  const [financials, setFinancials] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadFinancials() {
      const response = await api.get('financial');

      setFinancials(response.data);
    }
    loadFinancials();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.post('financial', data);
    setMudou(Math.random() * 1000);
  }

  return (
    <Container>
      <aside>
        <strong>Finanças</strong>
        <button>
          <Link to="/financials">Voltar</Link>
        </button>
      </aside>
      <Form initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Título" />
        <Input name="description" placeholder="Descrição" />
        <Input name="price" placeholder="Preço" />
        <Input name="duration" placeholder="Duração" />
        <hr />
        <button type="submit">
          <Link to="/financials">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
