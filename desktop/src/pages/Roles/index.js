import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import {
  Container,
  User,
  Price,
  BtnDeletar,
  BtnEditar,
  SelectDiv,
  Buttons,
  ButtonBack,
} from './styles';

import api from '~/services/api';

export default function Roles() {
  const [schedule, setSchedule] = useState(false);
  const [financial, setFinancial] = useState(false);
  const [people, setPeople] = useState(false);
  const [services, setServices] = useState(false);
  const [grafics, setGrafics] = useState(false);
  const [users, setUsers] = useState(false);
  const [configuration, setConfiguration] = useState(false);
  const [create_appointment, setCreate_appointment] = useState(false);

  async function handleSubmit(data) {
    const dados = {
      ...data,
      schedule,
      financial,
      people,
      services,
      grafics,
      users,
      configuration,
      create_appointment,
    };

    try {
      await api.post(`roles`, dados);
      toast.success('Função cadastrada com sucesso');
    } catch (error) {
      toast.error('Erro ao cadastrar Função');
    }
  }

  return (
    <Container>
      <aside>
        <strong>Cadastrar Funções</strong>
        <ButtonBack>
          <Link to="/Roles">Voltar</Link>
        </ButtonBack>
      </aside>
      <Form initialData={''} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <hr />
        <strong>Permissões</strong>
        <aside>
          <span>Criar Agendamento: </span>
          <input
            type="checkbox"
            checked={create_appointment}
            name="create_appointment"
            placeholder="Criar Agendamento: "
            onClick={() => setCreate_appointment(!create_appointment)}
          />
        </aside>
        <aside>
          <span>Acessar a Agenda: </span>
          <Input
            type="checkbox"
            checked={schedule}
            name="schedule"
            placeholder="Acessar a Agenda: "
            onClick={() => setSchedule(!schedule)}
          />
        </aside>
        <aside>
          <span>Acessar o Financeiro: </span>
          <Input
            type="checkbox"
            checked={financial}
            name="financial"
            placeholder="Acessar o Financeiro: "
            onClick={() => setFinancial(!financial)}
          />
        </aside>
        <aside>
          <span>Cadastro de Pessoas: </span>
          <Input
            type="checkbox"
            checked={people}
            name="people"
            placeholder="Cadastro de Pessoas: "
            onClick={() => setPeople(!people)}
          />
        </aside>
        <aside>
          <span>Cadastro de Serviços: </span>
          <Input
            type="checkbox"
            checked={services}
            name="services"
            placeholder="Cadastro de Serviços: "
            onClick={() => setServices(!services)}
          />
        </aside>
        <aside>
          <span>Visualizar Gráficos: </span>
          <Input
            type="checkbox"
            checked={grafics}
            name="grafics"
            placeholder="Visualizar Gráficos: "
            onClick={() => setGrafics(!grafics)}
          />
        </aside>
        <aside>
          <span>Cadastro de Usuários: </span>
          <Input
            type="checkbox"
            checked={users}
            name="users"
            placeholder="Cadastro de Usuários: "
            onClick={() => setUsers(!users)}
          />
        </aside>
        <aside>
          <span>Configurações: </span>
          <Input
            type="checkbox"
            checked={configuration}
            name="configuration"
            placeholder="Configurações: "
            onClick={() => setConfiguration(!configuration)}
          />
        </aside>
        <hr />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
