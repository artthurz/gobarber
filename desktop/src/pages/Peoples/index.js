// NOVO
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ButtonSave,
  ButtonBack,
  Slide,
  DivForm,
  SelectDiv,
} from './styles';
import MaskedInput from 'react-text-mask';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import Select from 'react-select';

import api from '~/services/api';

export default function Peoples() {
  const [name, setName] = useState();
  const [birth_date, setBirth_date] = useState();
  const [email, setEmail] = useState();
  const [fone, setFone] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [provider, setProvider] = useState();
  const [users_id, setUsers_id] = useState();
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadclients() {
      const response = await api.get('users');
      let elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setUser(elements);
      setUsers(response.data);
    }
    loadclients();
  }, []);

  async function handleSelectUser(id) {
    if (users_id === id.value) {
      setUsers_id();
      return;
    }
    setUsers_id(id.value);

    console.log(users_id);
  }

  async function handleSubmit() {
    if (name == null || undefined || (birth_date == null || undefined)) {
      toast.error(
        'Falha ao realizar o cadastro, prencha os campos obrigatórios! ( * )'
      );

      return;
    }
    const data = { name, birth_date, email, fone, cpf, rg, provider, users_id };
    await api.post('configuration/peoples', data);
    toast.success('Castro realizado com sucesso');
  }

  return (
    <Container>
      <aside>
        <strong>Nova Pessoa</strong>
        <ButtonBack>
          <Link to="/peoples">Voltar</Link>
        </ButtonBack>
      </aside>
      <DivForm>
        <input
          name="name"
          placeholder="* Nome"
          onChange={e => setName(e.target.value)}
        />
        <aside>
          <span>* Data de Nascimento: </span>
          <DatePicker
            selected={birth_date}
            onChange={date => setBirth_date(date)}
            dateFormat="d/MM/y"
            placeholder="Data de Nascimento"
          />
        </aside>
        <input
          name="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <MaskedInput
          mask={[
            '(',
            /[1-9]/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          name="fone"
          placeholder="Telefone"
          onChange={e => setFone(e.target.value)}
        />
        <MaskedInput
          mask={[
            /[0-9]/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
          ]}
          name="cpf"
          placeholder="CPF"
          onChange={e => setCpf(e.target.value)}
        />
        <MaskedInput
          mask={[
            /[0-9]/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
          ]}
          name="rg"
          placeholder="RG"
          onChange={e => setRg(e.target.value)}
        />
      </DivForm>
      <SelectDiv>
        <Select
          options={user}
          placeholder="Selecione o Usuário"
          onChange={handleSelectUser}
        />
      </SelectDiv>
      <Slide>
        <aside>
          <span>Barbeiro: </span>
          <div>
            <input
              type="checkbox"
              name="provider"
              placeholder="Checkbox"
              onChange={e => setProvider(e.target.checked)}
            />
          </div>
        </aside>
      </Slide>
      <hr />
      <ButtonSave type="button" onClick={handleSubmit}>
        Salvar
      </ButtonSave>
    </Container>
  );
}
