// LISTA + ESDITA
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import { Container, BtnDeletar, Buttons, SelectDiv } from './styles';

import api from '~/services/api';

export default function PeoplesUpdate() {
  const [peoples, setPeoples] = useState([]);
  const [serv, setServ] = useState([]);
  const [mudou, setMudou] = useState([]);
  const [peopleId, setPeopleId] = useState();
  const [people, setPeople] = useState([]);
  const [birth_date, setBirth_date] = useState();

  useEffect(() => {
    async function loadPeoples() {
      const response = await api.get('configuration/peoples');

      let elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setPeople(elements);
      setPeoples(response.data);
    }
    loadPeoples();
  }, [mudou]);

  async function handleSubmit(data, { resetForm }) {
    await api.put(`configuration/peoples/${peopleId}`, data);
    setMudou(Math.random() * 1000);
    resetForm();
    toast.success('Cadastro atualizado com sucesso');
    window.location.reload();
  }

  async function handleDelete() {
    await api.delete(`configuration/peoples/${peopleId}`);
    setMudou(Math.random() * 1000);
    toast.success('Cadastro deletado com sucesso');
  }

  async function handleSelect(retorno) {
    setServ(
      peoples.find(people => (people.id === retorno.value ? people : null))
    );
    setPeopleId(retorno.value);

    console.log(serv);
    if (!(serv.birth_date == null || undefined)) {
      setBirth_date(parseISO(serv.birth_date));
    } else {
      setBirth_date(new Date());
    }
    console.log(birth_date);
  }

  return (
    <Container>
      <aside>
        <strong>Pessoas</strong>
        <button>
          <Link to="/peoplescreate">Cadastrar</Link>
        </button>
      </aside>
      <SelectDiv>
        <Select
          options={people}
          placeholder="Selecione a Pessoa"
          onChange={handleSelect}
        />
      </SelectDiv>
      <Form initialData={serv} onSubmit={handleSubmit}>
        <Input
          initialData={serv.name ? serv.name : null}
          name="name"
          placeholder="Nome"
        />
        <DatePicker
          selected={birth_date}
          onChange={date => setBirth_date(date)}
          dateFormat="d/MM/y"
          placeholder="Data de Nascimento"
        />
        <Input name="fone" placeholder="Telefone" />
        <Input name="email" placeholder="Email" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
      <Buttons>
        <BtnDeletar type="button" onClick={handleDelete}>
          Deletar
        </BtnDeletar>
      </Buttons>
    </Container>
  );
}
