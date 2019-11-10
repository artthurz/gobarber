import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import {
  Container,
  User,
  Price,
  BtnDeletar,
  BtnEditar,
  Buttons,
} from './styles';

import api from '~/services/api';

export default function UsersUpdate() {
  const [users, setUsers] = useState([]);
  const [serv, setServ] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data);
    }
    loadUsers();
  }, [users]);

  async function handleSubmit(data) {
    await api.put(`users/${data.id}`, data);
  }

  async function handleDelete(id) {
    await api.delete(`users/${id}`);
  }

  async function handleSelect(id) {
    setServ(users.find(user => (user.id === id ? user : null)));
  }

  return (
    <Container>
      <aside>
        <strong>Editar Usuários</strong>
        <button>
          <Link to="/userscreate">Cadastrar</Link>
        </button>
      </aside>
      <Form initialData={serv} onSubmit={handleSubmit}>
        <Input name="id" placeholder="ID" disabled />
        <Input name="name" placeholder="Nome" />
        <Input name="birth_date" placeholder="Aniversário" />
        <Input name="fone" placeholder="Telefone" />
        <Input name="email" placeholder="Email" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <strong>Usuários cadastrados</strong>
      <ul>
        {users.map(user => (
          <User key={user.name}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.description}</span>
            </div>
            <Price>
              <aside>
                <div>
                  <strong>Aniversário: </strong>
                </div>
                <span>{user.birth_date}</span>
              </aside>
            </Price>
            <aside>
              <strong>Telefone: </strong>
              <span>{user.fone} minutos</span>
            </aside>
            <Buttons>
              <BtnEditar type="button" onClick={() => handleSelect(user.id)}>
                Editar
              </BtnEditar>
              <BtnDeletar type="button" onClick={() => handleDelete(user.id)}>
                Deletar
              </BtnDeletar>
            </Buttons>
          </User>
        ))}
      </ul>
    </Container>
  );
}
