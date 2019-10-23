import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Service, Price, Slide } from './styles';

import api from '~/services/api';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      setServices(response.data);
    }
    loadServices();
  }, [services]);

  async function handleSubmit(data) {
    await api.post('configuration/services', data);
  }

  return (
    <Container>
      <strong>Cadastro de Serviços</strong>
      <Form initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Título" />
        <Input name="description" placeholder="Descrição" />
        <Input name="price" placeholder="Preço" />
        <Input name="duration" placeholder="Duração" />
        <hr />
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
