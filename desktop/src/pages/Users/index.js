// NOVO
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import {
  Container,
  ButtonSave,
  ButtonBack,
  Slide,
  DivForm,
  SelectDiv,
} from './styles';

import api from '~/services/api';

export default function Peoples() {
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  const [admin, setAdmin] = useState();
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

  async function handleSelectRole(id) {
    setRole_id(id.value);
  }

  async function handleSubmit() {
    if (name == null || undefined || (login == null || undefined)) {
      toast.error(
        'Falha ao realizar o cadastro, prencha os campos obrigatórios! ( * )'
      );

      return;
    }

    if (password !== checkPassword) {
      toast.error('Falha ao realizar o cadastro, as senhas não conferem! ');

      return;
    }

    let data = { name, login, role_id };

    if (!(password == null || undefined)) {
      data = { ...data, password };
    }
    if (!(admin == null || undefined)) {
      data = { ...data, admin };
    }

    try {
      await api.post('users', data);
      toast.success('Cadastro realizado com sucesso');
    } catch (error) {
      toast.error('Erro ao realizar cadastro');
    }
  }

  return (
    <Container>
      <aside>
        <strong>Cadastrar Usuário</strong>
        <ButtonBack>
          <Link to="/users">Voltar</Link>
        </ButtonBack>
      </aside>
      <DivForm>
        <input
          name="name"
          placeholder="* Nome"
          onChange={e => setName(e.target.value)}
        />
        <input
          name="login"
          placeholder="* Login"
          onChange={e => setLogin(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          name="checkpassword"
          type="password"
          placeholder="Confirme sua senha"
          onChange={e => setCheckPassword(e.target.value)}
        />
      </DivForm>
      <SelectDiv>
        <Select
          options={roles}
          placeholder="Selecione a Função"
          onChange={handleSelectRole}
        />
      </SelectDiv>
      <Slide>
        <aside>
          <span>Administrador: </span>
          <div>
            <input
              type="checkbox"
              name="admin"
              placeholder="Checkbox"
              onChange={e => setAdmin(e.target.checked)}
            />
          </div>
        </aside>
      </Slide>
      <hr />
      <ButtonSave type="button" onClick={handleSubmit}>
        Salvar
      </ButtonSave>
    </Container>
  );
}
