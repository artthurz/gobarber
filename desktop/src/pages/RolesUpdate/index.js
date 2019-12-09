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
} from './styles';

import api from '~/services/api';

export default function RolesUpdate() {
  const [role, setRole] = useState();
  const [roles, setRoles] = useState([]);
  const [roleData, setRoleData] = useState([]);
  const [role_id, setRole_id] = useState();

  const [schedule, setSchedule] = useState();
  const [financial, setFinancial] = useState();
  const [people, setPeople] = useState();
  const [services, setServices] = useState();
  const [grafics, setGrafics] = useState();
  const [users, setUsers] = useState();
  const [configuration, setConfiguration] = useState();
  const [create_appointment, setCreate_appointment] = useState();
  const [atualizou, setAtualizou] = useState(false);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('roles');
      const elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setRoles(elements);
      setRoleData(response.data);
    }
    loadRoles();
  }, [atualizou]);

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
      await api.put(`roles/${data.id}`, dados);
      toast.success('Função atualizada com sucesso');
      setAtualizou(!atualizou);
    } catch (error) {
      toast.error('Erro ao atualizar Função');
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`users/${id}`);
      toast.success('Usuário deletado com sucesso');
    } catch (error) {
      toast.error('Erro ao deletar usuário');
    }
  }

  async function handleSelectRole(id) {
    setRole_id(id.value);
    const elem = roleData.find(rol => (rol.id == id.value ? rol : null));
    setRole(elem);
    setSchedule(elem.schedule);
    setFinancial(elem.financial);
    setPeople(elem.people);
    setServices(elem.services);
    setGrafics(elem.grafics);
    setUsers(elem.users);
    setConfiguration(elem.configuration);
    setCreate_appointment(elem.create_appointment);
  }

  return (
    <Container>
      <aside>
        <strong>Funções</strong>
        <button>
          <Link to="/rolescreate">Cadastrar</Link>
        </button>
      </aside>
      <SelectDiv>
        <Select
          options={roles}
          placeholder="Selecione a Função"
          onChange={handleSelectRole}
        />
      </SelectDiv>
      <Form initialData={role} onSubmit={handleSubmit}>
        <Input name="id" placeholder="ID" disabled />
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
