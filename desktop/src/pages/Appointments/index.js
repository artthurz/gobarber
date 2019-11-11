import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import { MdSearch } from 'react-icons/md';
import 'react-datepicker/dist/react-datepicker.css';
import {
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';
import {
  Container,
  Service,
  Price,
  BtnEditar,
  Buttons,
  Badge,
  NotificationList,
  Notification,
  Scroll,
  ContServ,
  BtnSalvar,
  AsideHeader,
  Entradas,
  Calendar,
} from './styles';

import api from '~/services/api';

export default function Services() {
  const [services, setServices] = useState([]);
  const [mudou, setMudou] = useState([]);
  const [services_id, setServices_id] = useState([]);
  const [servname, setServname] = useState([]);
  const [visibleProv, setVisibleProv] = useState(false);
  const [visibleCli, setVisibleCli] = useState(false);
  const [visibleServ, setVisibleServ] = useState(false);
  const [providers, setProviders] = useState([]);
  const [provider_id, setProvider_id] = useState();
  const [clients, setClients] = useState([]);
  const [client_id, setClient_id] = useState();

  const [startDate, setStartDate] = useState(
    setMilliseconds(setSeconds(setMinutes(setHours(new Date(), 8), 0), 0), 0)
  );

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('configuration/services');

      setServices(response.data);
    }
    loadServices();
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
    await api.post('appointments', appointment);
    toast.success('Agendamento realizado com sucesso');
    setServices_id();
    setProvider_id();
    setClient_id();
    setMudou(Math.random() * 1000);
  }

  async function handleSelectServices(id) {
    setServices_id([...services_id, id]);
  }

  useEffect(() => {
    async function loadclients() {
      const response = await api.get('users');
      let data = [];
      for (let index = 0; index < response.data.length; index++) {
        if (response.data[index].admin === false) {
          data = [...clients, response.data[index]];
        }
      }

      setClients(data);
      data = [];
    }
    loadclients();
  }, [mudou]);

  useEffect(() => {
    async function loadproviders() {
      const response = await api.get('users');
      let data = [];
      for (let index = 0; index < response.data.length; index++) {
        if (response.data[index].admin === true) {
          data = [...providers, response.data[index]];
        }
      }

      setProviders(data);
      data = [];
    }
    loadproviders();
  }, [mudou]);

  function handleToggleVisibleProv() {
    setVisibleProv(!visibleProv);
  }

  function handleToggleVisibleCli() {
    setVisibleCli(!visibleCli);
  }

  function handleToggleVisibleServ() {
    setVisibleServ(!visibleServ);
  }

  async function handleSelectProvider(id) {
    if (provider_id === id) {
      setProvider_id();
      return;
    }
    setProvider_id(id);
  }

  async function handleSelectClient(id) {
    if (client_id === id) {
      setClient_id();
      return;
    }
    setClient_id(id);
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
      <AsideHeader>
        <Entradas>
          <aside>
            <span>
              Barbeiro:{' '}
              {providers.map(provider =>
                provider.id === provider_id ? provider.name : null
              )}
            </span>
            <Badge onClick={handleToggleVisibleProv}>
              <MdSearch color="#4169e1" size={20} />
            </Badge>
          </aside>
          <aside>
            <span>
              Cliente:{' '}
              {clients.map(client =>
                client.id === client_id ? client.name : null
              )}
            </span>
            <Badge onClick={handleToggleVisibleCli}>
              <MdSearch color="#4169e1" size={20} />
            </Badge>
          </aside>
          <aside>
            <span>
              Serviços:
              {services_id}
            </span>
            <Badge onClick={handleToggleVisibleServ}>
              <MdSearch color="#4169e1" size={20} />
            </Badge>
          </aside>
        </Entradas>
        <div>
          <NotificationList visible={visibleProv}>
            <strong>Barbeiros</strong>
            <Scroll>
              {providers.map(provider => (
                <Notification key={provider.id}>
                  <aside>
                    <p>{provider.name}</p>
                    <button
                      type="button"
                      onClick={() => handleSelectProvider(provider.id)}
                    >
                      Selecionar
                    </button>
                  </aside>
                  <hr />
                </Notification>
 
              ))}
            </Scroll>
          </NotificationList>
          <NotificationList visible={visibleCli}>
            <strong>Clientes</strong>
            <Scroll>
              {clients.map(client => (
                <Notification key={client.id}>
                  <aside>
                    <p>{client.name}</p>
                    <button
                      type="button"
                      onClick={() => handleSelectClient(client.id)}
                    >
                      Selecionar
                    </button>
                  </aside>
                  <hr />
                </Notification>
                
              ))}
            </Scroll>
          </NotificationList>
          <NotificationList visible={visibleServ}>
            <strong>Serviços</strong>
            <Scroll>
              {services.map(service => (
                <Notification key={service.id}>
                  <aside>
                    <p>{service.name}</p>
                    <button
                      type="button"
                      onClick={() => handleSelectServices(service.id)}
                    >
                      Selecionar
                    </button>
                  </aside>
                  <hr />
                </Notification>
              ))}
            </Scroll>
          </NotificationList>
        </div>
      </AsideHeader>
      <hr />
      <BtnSalvar type="button" onClick={() => handleSubmit()}>
        Salvar
      </BtnSalvar>
    </Container>
  );
}
