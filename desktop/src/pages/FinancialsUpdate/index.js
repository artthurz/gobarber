import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import {
  Container,
  Financial,
  Price,
  Slide,
  BtnDeletar,
  BtnEditar,
  Buttons,
} from './styles';

import api from '~/services/api';

export default function FinancialssUpdate() {
  const [financials, setFinancials] = useState([]);
  const [serv, setServ] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadFinancials() {
      const response = await api.get('financial');

      setFinancials(response.data);
    }
    loadFinancials();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.put(`financial/${data.id}`, data);
    setMudou(Math.random() * 1000);
  }

  async function handleSelect(id) {
    setServ(financials.find(financial => (financial.id === id ? financial : null)));
  }

  async function handleDelete(id) {
    await api.delete(`financial/${id}`);
    setMudou(Math.random() * 1000);
  }

  async function handleMarkAsActive(id) {
    await api.put(`financial/${id}`, {
      ...serv,
      active: !serv.active,
    });

    setFinancials(
      financials.map(financial =>
        financials.id === id
          ? { ...financials, active: !financials.active }
          : financials
      )
    );

    setMudou(Math.random() * 1000);
    setServ(!serv.active);
  }

  return (
    <Container>
      <aside>
        <strong>Finanças</strong>
        <button>
          <Link to="/financialscreate">Cadastrar</Link>
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
      <strong>Finanças</strong>
      <ul>
        {financials.map(financial => (
          <Financial key={financial.name}>
            <div>
              <strong>{financial.name}</strong>
              <span>{financial.description}</span>
            </div>
            <Price>
              <aside>
                <div>
                  <strong>Preço: </strong>
                </div>
                <span>R${financial.price}</span>
              </aside>
            </Price>
            <aside>
              <strong>Duração: </strong>
              <span>{financial.duration} minutos</span>
            </aside>
            <span>{financial.active}</span>
            <Buttons>
              <BtnEditar type="button" onClick={() => handleSelect(financial.id)}>
                Editar
              </BtnEditar>
              <BtnDeletar
                type="button"
                onClick={() => handleDelete(financial.id)}
              >
                Deletar
              </BtnDeletar>
            </Buttons>
          </Financial>
        ))}
      </ul>
    </Container>
  );
}
