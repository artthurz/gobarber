import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Container } from './styles';

export default function Configuration() {
  const [openMorning, setOpenMorning] = useState();
  const [closeMorning, setCloseMorning] = useState();
  const [openAfternoon, setOpenAfternoon] = useState();
  const [closeAfternoon, setCloseAfternoon] = useState();
  const [sunday, setSunday] = useState();
  const [monday, setMonday] = useState();
  const [tuesday, setTuesday] = useState();
  const [wednesday, setWednesday] = useState();
  const [thursday, setThursday] = useState();
  const [friday, setFriday] = useState();
  const [saturday, setSaturday] = useState();

  function handleSubmit() {
    return null;
  }

  return (
    <Container>
      <strong>Dias de funcionamento</strong>
      <aside>
        <span>* Horário abertura manhã </span>
        <DatePicker
          selected={openMorning}
          onChange={date => setOpenMorning(date)}
          dateFormat="dd/MM/y"
          placeholder="Data de Nascimento"
        />
      </aside>
      <aside>
        <span>* Horário fechamento manhã </span>
        <DatePicker
          selected={closeMorning}
          onChange={date => setCloseMorning(date)}
          dateFormat="dd/MM/y"
          placeholder="Data de Nascimento"
        />
      </aside>
      <aside>
        <span>* Horário abertura tarde </span>
        <DatePicker
          selected={openAfternoon}
          onChange={date => setOpenAfternoon(date)}
          dateFormat="dd/MM/y"
          placeholder="Data de Nascimento"
        />
      </aside>
      <aside>
        <span>* Horário fechamento tarde </span>
        <DatePicker
          selected={closeAfternoon}
          onChange={date => setCloseAfternoon(date)}
          dateFormat="dd/MM/y"
          placeholder="Data de Nascimento"
        />
      </aside>
      <hr />
      <div>
        <span>Domingo</span>
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
        <span>Segunda</span>
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
        <span>Terça</span>
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
        <span>Quarta</span>
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
        <span>Quinta</span>
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
        <span>Sexta</span>
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
        <span>Sábado</span>
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
      <hr />
      <button type="submit">Atualizar Dias de Funcionamento</button>
    </Container>
  );
}
