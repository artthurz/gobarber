import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, Service, Price, Slide } from './styles';

import api from '~/services/api';

export default function ServicesUpdate() {
  const [services, setServices] = useState([]);
  const [serv, setServ] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      setServices(response.data);
    }
    loadServices();
  }, [services]);

  async function handleSubmit(data) {
    await api.put(`configuration/services/${data.id}`, data);
  }

  async function handleSelect(id) {
    setServ(services.find(service => (service.id === id ? service : null)));
  }

  async function handleMarkAsActive(id) {
    await api.put(`configuration/services/${id}`, {
      ...serv,
      active: !serv.active,
    });

    setServices(
      services.map(service =>
        services.id === id
          ? { ...services, active: !services.active }
          : services
      )
    );

    setServ(!serv.active);
  }

  return (
    <Container>
      <strong>Editar Serviços</strong>
      <Form initialData={serv} onSubmit={handleSubmit}>
        <Input name="id" placeholder="ID" disabled />
        <Input name="name" placeholder="Título" />
        <Input name="description" placeholder="Descrição" />
        <Input name="price" placeholder="Preço" />
        <Input name="duration" placeholder="Duração" />
        <aside>
          <span>Ativo: </span>
          <Slide>
            <label className="switch">
              <Input
                name="active"
                type="checkbox"
                placeholder="active"
                checked={serv.active}
                onClick={() => handleMarkAsActive(serv.id)}
              />
              <div className="slider" />
            </label>
          </Slide>
        </aside>
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <strong>Serviços cadastrados</strong>
      <ul>
        {services.map(service => (
          <Service key={service.name}>
            <div>
              <strong>{service.name}</strong>
              <span>{service.description}</span>
            </div>
            <Price>
              <aside>
                <div>
                  <strong>Preço: </strong>
                </div>
                <span>R${service.price}</span>
              </aside>
            </Price>
            <aside>
              <strong>Duração: </strong>
              <span>{service.duration} minutos</span>
            </aside>
            <span>{service.active}</span>
            <button type="button" onClick={() => handleSelect(service.id)}>
              Selecionar
            </button>
          </Service>
        ))}
      </ul>
    </Container>
  );
}
