import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isEqual,
  parseISO,
} from 'date-fns';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Container, BtnSalvar, Calendar, SelectDiv } from './styles';

import api from '~/services/api';

export default function Services() {
  const [services, setServices] = useState([]);
  const [mudou, setMudou] = useState([]);
  const [services_id, setServices_id] = useState([]);
  const [providers, setProviders] = useState([]);
  const [provider_id, setProvider_id] = useState();
  const [clients, setClients] = useState([]);
  const [prov, setProv] = useState([]);
  const [cli, setCli] = useState([]);
  const [serv, setServ] = useState([]);
  const [client_id, setClient_id] = useState();

  const [startDate, setStartDate] = useState(
    setMilliseconds(setSeconds(setMinutes(setHours(new Date(), 8), 0), 0), 0)
  );

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      let elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setServ(elements);

      setServices(response.data);
    }
    loadServices();
  }, [mudou]);

  useEffect(() => {
    async function loadclients() {
      const response = await api.get('configuration/peoples');
      let data = [];
      for (let index = 0; index < response.data.length; index++) {
        if (response.data[index].provider === false) {
          data.push(response.data[index]);
        }
      }

      let elements = [];

      for (const { id, name } of data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setCli(elements);
      setClients(data);
      data = [];
    }
    loadclients();
  }, [mudou]);

  useEffect(() => {
    async function loadproviders() {
      const response = await api.get('providers');

      let elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setProv(elements);
      setProviders(response.data);

      elements = [];
    }
    loadproviders();
  }, [mudou]);

  async function handleSubmit() {
    const date = startDate;
    const appointment = { client_id, date, provider_id, services_id };

    const response = await api.get('schedule', {
      params: { date },
    });

    for (let index = 0; index < response.data.length; index++) {
      if (
        isEqual(parseISO(response.data[index].date), startDate) &&
        response.data[index].provider_id == provider_id
      ) {
        toast.error(
          'Falha ao realizar agendamento, horário não disponível para este Barbeiro!'
        );
        setServices_id();
        return;
      }
    }

    console.log(appointment);
    await api.post('appointments', appointment);
    toast.success('Agendamento realizado com sucesso');
    setServices_id();
    setProvider_id();
    setClient_id();
    setMudou(Math.random() * 1000);
  }

  async function handleSelectProvider(id) {
    if (provider_id === id.value) {
      //setProvider_id();
      return;
    }
    setProvider_id(id.value);
  }

  async function handleSelectClient(id) {
    if (client_id === id.value) {
      setClient_id();
      return;
    }
    setClient_id(id.value);
  }

  async function handleSelectServices(selected) {
    let elements = [];

    if (selected !== null) {
      for (const { value } of selected) {
        elements.push(value);
      }
      setServices_id(elements);
    }

    elements = [];
  }

  return (
    <Container>
      <strong>Realizar Agendamento</strong>
      <Calendar>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 0), 20)}
          dateFormat="MMMM d, yyyy h:mm aa"
          inline
        />
      </Calendar>
      <SelectDiv>
        <Select
          options={prov}
          placeholder="Selecione o Barbeiro"
          onChange={handleSelectProvider}
        />
      </SelectDiv>
      <SelectDiv>
        <Select
          options={cli}
          placeholder="Selecione o Cliente"
          onChange={handleSelectClient}
        />
      </SelectDiv>
      <SelectDiv>
        <Select
          options={serv}
          isMulti
          placeholder="Selecione o(s) Serviço(s)"
          onChange={handleSelectServices}
        />
      </SelectDiv>
      <hr />
      <BtnSalvar type="button" onClick={() => handleSubmit()}>
        Salvar
      </BtnSalvar>
    </Container>
  );
}
