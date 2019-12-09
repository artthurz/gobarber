// LISTA + EDITA
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import Select from 'react-select';
import {
  Container,
  Financial,
  Price,
  BtnEditar,
  Buttons,
  Others,
  BtnPagar,
  BtnPagarDisabled,
  BtnEditarDisabled,
  SelectDiv,
} from './styles';

import api from '~/services/api';

export default function Financials() {
  const [date, setDate] = useState();
  const [financials, setFinancials] = useState([]);
  const [fin, setFin] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadFinancials() {
      const response = await api.get('financials');

      setFinancials(response.data);
    }
    loadFinancials();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.put(`financials/${data.id}`, data);
    setMudou(Math.random() * 1000);
  }

  async function handleSelect(id) {
    setFin(
      financials.find(financial => (financial.id === id ? financial : null))
    );
  }

  async function handlePayment(id) {
    await api.put(`financials/${id}`, {
      status: true,
    });

    setFinancials(
      financials.map(financial =>
        financial.id === id ? { ...financial, status: true } : financial
      )
    );
  }

  return (
    <Container>
      <aside>
        <strong>Finanças</strong>
      </aside>
      <Form initialData={fin} onSubmit={handleSubmit}>
        <Input disabled name="id" placeholder="ID" />
        <Input name="observation" placeholder="Obseravação" />
        <Input name="discount_percentage" placeholder="Desconto" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <ul>
        {financials.map(financial => (
          <Financial key={financial.id}>
            <div>
              <strong>{financial.appointment.user.name}</strong>
              <span>{financial.observation}</span>
            </div>
            <Price>
              <aside>
                <div>
                  <strong>Valor: </strong>
                </div>
                <span>R${financial.total_value}</span>
              </aside>
            </Price>
            <Others>
              <aside>
                <div>
                  <strong>Desconto: </strong>
                </div>
                <span>
                  {financial.discount_percentage
                    ? financial.discount_percentage
                    : '0'}{' '}
                  %
                </span>
              </aside>
            </Others>
            <Price>
              <aside>
                <div>
                  <strong>Valor a pagar: </strong>
                </div>
                <span>R${financial.discount_value}</span>
              </aside>
            </Price>
            <aside>
              <strong>Status: </strong>
              <span>{financial.status === true ? 'Pago' : 'Em haver'}</span>
            </aside>
            <Buttons>
              {(!financial.status && (
                <BtnEditar
                  type="button"
                  onClick={() => handleSelect(financial.id)}
                >
                  Editar
                </BtnEditar>
              )) || (
                <BtnEditarDisabled disabled type="button">
                  Editar
                </BtnEditarDisabled>
              )}
              {(!financial.status && (
                <BtnPagar
                  type="button"
                  onClick={() => handlePayment(financial.id)}
                >
                  Receber
                </BtnPagar>
              )) || (
                <BtnPagarDisabled disabled type="button">
                  Pago
                </BtnPagarDisabled>
              )}
            </Buttons>
          </Financial>
        ))}
      </ul>
    </Container>
  );
}
