import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import {
  Container,
  User,
  Price,
  BtnDeletar,
  BtnEditar,
  SelectDiv,
  Buttons,
} from './styles';

import api from '~/services/api';

export default function UsersUpdate() {
  const [users, setUsers] = useState([]);
  const [serv, setServ] = useState([]);
  const [roles, setRoles] = useState();
  const [role_id, setRole_id] = useState();

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('roles');
      const elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setRoles(elements);
    }
    loadRoles();
  }, []);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data);
    }
    loadUsers();
  }, []);

  async function handleSubmit(data) {
    const dados = { ...data, role_id };

    try {
      await api.put(`usersAdm/${data.id}`, dados);
      toast.success('Usuário atualizado com sucesso');
    } catch (error) {
      toast.error('Este login já está em uso');
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`users/${id}`);
      toast.success('Usuário deletado com sucesso');
    } catch (error) {
      toast.error('Erro ao deletar usuário');
    }
  }

  async function handleSelect(id) {
    setServ(users.find(user => (user.id === id ? user : null)));
  }

  async function handleSelectRole(id) {
    setRole_id(id.value);
  }

  return (
    <Container>
      <aside>
        <strong>Usuários</strong>
        <button>
          <Link to="/userscreate">Cadastrar</Link>
        </button>
      </aside>
      <SelectDiv>
        <Select
          options={roles}
          placeholder="Selecione a Função"
          onChange={handleSelectRole}
        />
      </SelectDiv>
      <Form initialData={serv} onSubmit={handleSubmit}>
        <Input name="id" placeholder="ID" disabled />
        <Input name="name" placeholder="Nome" />
        <Input name="login" placeholder="Login" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <strong>Usuários cadastrados</strong>
      <ul>
        {users.map(user => (
          <User key={user.name}>
            <div>
              <strong>{user.name}</strong>
            </div>
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
