import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { randomFill } from 'crypto';
import {
  Container,
  Service,
  Price,
  Slide,
  BtnDeletar,
  BtnEditar,
  Buttons,
} from './styles';

import api from '~/services/api';

export default function ServicesUpdate() {
  const [services, setServices] = useState([]);
  const [serv, setServ] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      setServices(response.data);
    }
    loadServices();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.put(`configuration/services/${data.id}`, data);
    setMudou(Math.random() * 1000);
  }

  async function handleSelect(id) {
    setServ(services.find(service => (service.id === id ? service : null)));
  }

  async function handleDelete(id) {
    await api.delete(`configuration/services/${id}`);
    setMudou(Math.random() * 1000);
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

    setMudou(Math.random() * 1000);
    setServ(!serv.active);
  }

  return (
    <Container>
      <aside>
        <strong>Serviços</strong>
        <button>
          <Link to="/servicescreate">Cadastrar</Link>
        </button>
      </aside>
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
            <Buttons>
              <BtnEditar type="button" onClick={() => handleSelect(service.id)}>
                Editar
              </BtnEditar>
              <BtnDeletar
                type="button"
                onClick={() => handleDelete(service.id)}
              >
                Deletar
              </BtnDeletar>
            </Buttons>
          </Service>
        ))}
      </ul>
    </Container>
  );
}
