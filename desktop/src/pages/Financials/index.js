// NOVO
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import * as Yup from 'yup';

import api from '~/services/api';

const schema = Yup.object().shape({
  total_value: Yup.string().required('O Valor total é obrigatório'),
  appointments_services_id: Yup.string().required('O Serviço é obrigatório'),
  status: Yup.string().required('Status? é obrigatório'),
});

export default function Financials() {
  const [financials, setFinancials] = useState([]);
  const [mudou, setMudou] = useState([]);

  useEffect(() => {
    async function loadFinancials() {
      const response = await api.get('financial');

      setFinancials(response.data);
    }
    loadFinancials();
  }, [mudou]);

  async function handleSubmit(data) {
    await api.post('financial', data);
    setMudou(Math.random() * 1000);
  }

  return (
    <Container>
      <aside>
        <strong>Nova Finança</strong>
        <button>
          <Link to="/financials">Voltar</Link>
        </button>
      </aside>
      <Form schema={schema} initialData={null} onSubmit={handleSubmit}>
        <Input name="total_value" placeholder="Valor total" />
        <Input name="discount_percentage" placeholder="Desconto %" />
        <Input name="discount_value" placeholder="Desconto R$" />
        <Input name="value" placeholder="Valor final" />
        <Input name="appointments_services_id" placeholder="Serviço" />
        <Input name="observation" placeholder="Observação" />
        <Input name="status" placeholder="Status?" />    
        <hr />
        <button type="submit">
          <Link to="/financials">Salvar</Link>
        </button>
      </Form>
    </Container>
  );
}
