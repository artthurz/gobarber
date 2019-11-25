// NOVO
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, ButtonSave, ButtonBack, Slide, DivForm } from './styles';

import api from '~/services/api';

export default function Peoples() {
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [admin, setAdmin] = useState();

  async function handleSubmit() {
    if (name == null || undefined || (login == null || undefined)) {
      toast.error(
        'Falha ao realizar o cadastro, prencha os campos obrigatórios! ( * )'
      );

      return;
    }

    let data = { name, login };

    if (!(password == null || undefined)) {
      data = { ...data, password };
    }
    if (!(admin == null || undefined)) {
      data = { ...data, admin };
    }

    await api.post('users', data);
    toast.success('Cadastro realizado com sucesso');
  }

  return (
    <Container>
      <aside>
        <strong>Cadastrar nova pessoa</strong>
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
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
      </DivForm>
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
