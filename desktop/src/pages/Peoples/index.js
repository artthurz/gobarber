// NOVO
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, People, Price, Slide } from './styles';
import * as Yup from 'yup';

import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  birth_date: Yup.string().required('O Aniversário é obrigatório'),
  provider: Yup.string().required('Fornecedor? é obrigatório'),
});

export default function Peoples() {
  const [peoples, setPeoples] = useState([]);
  // const [mudou, setMudou] = useState([]);

  // useEffect(() => {
  //   async function loadPeoples() {
  //     const response = await api.get('configuration/peoples');

  //     setPeoples(response.data);
  //   }
  //   loadPeoples();
  // }, [mudou]);

  async function handleSubmit(data) {
    await api.post('configuration/peoples', data);
    // setMudou(Math.random() * 1000);
  }

  return (
    <Container>
      <aside>
        <strong>Nova Pessoa</strong>
        <button>
          <Link to="/peoples">Voltar</Link>
        </button>
      </aside>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="birth_date" placeholder="Aniversário" />
        <Input name="email" placeholder="E-mail" />
        <Input name="fone" placeholder="Telefone" />
        <Input name="cpf" placeholder="CPF" />
        <Input name="rg" placeholder="RG" />
        <Input name="provider" placeholder="Fornecedor?" />       
        <Input name="users_id" placeholder="Usuário" />       
        <hr />
        <button type="submit">
          <Link to="/peoples">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
