import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import api from '~/services/api';

import { Container } from './styles';

export default function AgendamentosDaSemana() {
  const [schedule, setSchedule] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('/grafics/agendamentosDaSemana', {
        params: { date },
      });

      setSchedule(response.data);
    }
    loadSchedule();
  }, [date]);

  return (
    <Container>
      <strong>Quantidade de Agendamentos na Semana</strong>
      <aside>
        <span>Selecione a Semana: </span>
        <DatePicker
          selected={date}
          onChange={d => setDate(d)}
          dateFormat="dd/MM/yyyy"
        />
      </aside>
      <LineChart
        width={600}
        height={300}
        data={schedule}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Line
          type="monotone"
          dataKey="Agendamentos"
          stroke="#e1b941"
          activeDot={{ r: 8 }}
        />
        <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" />
        <Tooltip stroke="#FFFFFF" />
        <YAxis stroke="#FFFFFF" />
        <XAxis dataKey="Dia" stroke="#FFFFFF" />
        <Legend stroke="#FFFFFF" />
      </LineChart>
    </Container>
  );
}
