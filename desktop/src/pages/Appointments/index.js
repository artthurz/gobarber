import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import { Container, Service, Price, BtnEditar, Buttons } from './styles';

import api from '~/services/api';

export default function Services() {
  const [services, setServices] = useState([]);
  const [mudou, setMudou] = useState([]);
  const [services_id, setServices_id] = useState([]);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 8)
  );

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      setServices(response.data);
    }
    loadServices();
  }, [mudou]);

  async function handleSubmit(data) {
    const date = '2019-11-12T15:00:00-03:00';
    const { provider_id } = data;
    const { client_id } = data;
    const appointment = { client_id, date, provider_id, services_id };
    await api.post('appointments', appointment);
    setMudou(Math.random() * 1000);
  }

  async function handleSelect(id) {
    setServices_id([...services_id, id]);
  }

  return (
    <Container>
      <strong>Realizar Agendamento</strong>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 23)}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <Form initialData={null} onSubmit={handleSubmit}>
        <Input name="provider_id" placeholder="Prestador" />
        <Input name="client_id" placeholder="Cliente" />
        <span>{services_id}</span>
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <strong>Serviços cadastrados</strong>
      <ul>
        {services.map(service => (
          <Service key={service.id}>
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
                Selecionar
              </BtnEditar>
            </Buttons>
          </Service>
        ))}
      </ul>
    </Container>
  );
}
