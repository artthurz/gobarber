import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, User } from './styles';

import api from '~/services/api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      // setPeoples(response.data);
    }
    loadUsers();
  }, [users]);

  async function handleSubmit(data) {
    await api.post('users', data);
  }

  return (
    <Container>
      <aside>
        <strong>Cadastro de Usuários</strong>
        <button>
          <Link to="/users">Voltar</Link>
        </button>
      </aside>
      <Form initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" placeholder="E-mail" />
        <hr />
        <button type="submit">
          <Link to="/users">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
