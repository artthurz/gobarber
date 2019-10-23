import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
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
      <aside>
        <strong>Cadastro de Serviços</strong>
        <button>
          <Link to="/services">Voltar</Link>
        </button>
      </aside>
      <Form initialData={null} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Título" />
        <Input name="description" placeholder="Descrição" />
        <Input name="price" placeholder="Preço" />
        <Input name="duration" placeholder="Duração" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
