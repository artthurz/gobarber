// NOVO
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, User } from './styles';
import * as Yup from 'yup';

import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  login: Yup.string().required('O Login é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  admin: Yup.string().required('Administrador? é obrigatório'),
  status: Yup.string().required('Status? é obrigatório'),
});

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
        <strong>Novo Usuário</strong>
        <button>
          <Link to="/users">Voltar</Link>
        </button>
      </aside>
      <Form schema={schema} initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="login" placeholder="Login" />
        <Input name="password" placeholder="Senha" />
        <Input name="admin" placeholder="Administrador?" />
        <Input name="status" placeholder="Status?" />
        <hr />
        <button type="submit">
          <Link to="/users">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
