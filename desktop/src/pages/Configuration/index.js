import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { parseISO, getHours, getMinutes } from 'date-fns';
import { Container } from './styles';

import api from '~/services/api';

export default function Configuration() {
  const [ms, setMorning_start] = useState();
  const [me, setMorning_end] = useState();
  const [as, setAfternoon_start] = useState();
  const [ae, setAfternoon_end] = useState();
  const [sunday, setSunday] = useState();
  const [monday, setMonday] = useState();
  const [tuesday, setTuesday] = useState();
  const [wednesday, setWednesday] = useState();
  const [thursday, setThursday] = useState();
  const [friday, setFriday] = useState();
  const [saturday, setSaturday] = useState();

  async function handleSubmit() {
    const morning_start = `${getHours(ms)}:${getMinutes(ms)}`;
    const morning_end = `${getHours(me)}:${getMinutes(me)}`;
    const afternoon_start = `${getHours(as)}:${getMinutes(as)}`;
    const afternoon_end = `${getHours(ae)}:${getMinutes(ae)}`;
    const data = {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      morning_start,
      morning_end,
      afternoon_start,
      afternoon_end,
    };

    console.log(data);
    await api.put(`/configuration/horary/${1}`, data);
    toast.success('Horários de funcionamento atualizados com sucesso!');
  }

  return (
    <Container>
      <strong>Dias de funcionamento</strong>
      <aside>
        <span>* Horário abertura manhã </span>
        <DatePicker
          selected={ms}
          onChange={date => setMorning_start(date)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
          placeholder="Data de Nascimento"
        />
      </aside>
      <aside>
        <span>* Horário fechamento manhã </span>
        <DatePicker
          selected={me}
          onChange={date => setMorning_end(date)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
          placeholder="Data de Nascimento"
        />
      </aside>
      <aside>
        <span>* Horário abertura tarde </span>
        <DatePicker
          selected={as}
          onChange={date => setAfternoon_start(date)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
          placeholder="Data de Nascimento"
        />
      </aside>
      <aside>
        <span>* Horário fechamento tarde </span>
        <DatePicker
          selected={ae}
          onChange={date => setAfternoon_end(date)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
          placeholder="Data de Nascimento"
        />
      </aside>
      <hr />
      <ul>
        <div>
          <span>Domingo:</span>
          <label className="switch">
            <input
              name="sunday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setSunday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
        <div>
          <span>Segunda:</span>
          <label className="switch">
            <input
              name="monday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setMonday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
        <div>
          <span>Terça:</span>
          <label className="switch">
            <input
              name="tuesday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setTuesday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
        <div>
          <span>Quarta:</span>
          <label className="switch">
            <input
              name="wednesday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setWednesday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
        <div>
          <span>Quinta:</span>
          <label className="switch">
            <input
              name="thursday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setThursday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
        <div>
          <span>Sexta:</span>
          <label className="switch">
            <input
              name="friday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setFriday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
        <div>
          <span>Sábado:</span>
          <label className="switch">
            <input
              name="saturday"
              type="checkbox"
              placeholder="Checkbox"
              onChange={e => setSaturday(e.target.checked)}
            />
            <div className="slider" />
          </label>
        </div>
      </ul>
      <hr />
      <button type="button" onClick={handleSubmit}>
        Atualizar Dias de Funcionamento
      </button>
    </Container>
  );
}
