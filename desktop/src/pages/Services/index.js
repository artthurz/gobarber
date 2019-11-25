// NOVO
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, Service, Price, Slide } from './styles';
import * as Yup from 'yup';

import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  price: Yup.string().required('O Preço é obrigatório'),
  duration: Yup.string().required('A Duração é obrigatória'),
  active: Yup.string().required('Ativo? é obrigatório'),
});

export default function Services() {
  const [services, setServices] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      setServices(response.data);
    }
    loadServices();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.post('configuration/services', data);
    setMudou(Math.random() * 1000);
  }

  return (
    <Container>
      <aside>
        <strong>Novo Serviço</strong>
        <button>
          <Link to="/services">Voltar</Link>
        </button>
      </aside>
      <Form schema={schema} initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Título" />
        <Input name="description" placeholder="Descrição" />
        <Input name="price" placeholder="Preço" />
        <Input name="duration" placeholder="Duração" />
        <Input name="active" placeholder="Ativo?" />
        <hr />
        <button type="submit">
          <Link to="/services">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
