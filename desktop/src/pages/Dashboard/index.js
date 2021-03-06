import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  addSeconds,
} from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Select from 'react-select';
import api from '~/services/api';

import {
  BtnCancelar,
  Container,
  Time,
  Hora,
  Servico,
  NewAppointment,
  Calendar,
  SideMenu,
  BtnsNextPrev,
  NewAppointmentDisabled,
  SelectDiv,
} from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [create_appointment, setCreate_appointment] = useState();
  const [date, setDate] = useState(new Date());

  const [user, setUser] = useState([]);
  const [provider, setProvider] = useState();

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('users');
      const elements = [];

      for (const { id, name } of response.data) {
        elements.push({
          value: id,
          label: name,
        });
      }

      setUser(elements);
    }
    loadProviders();
  }, []);

  /* const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  ); */

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('rolepermission');

      setCreate_appointment(response.data[0].role.create_appointment);
    }

    loadRoles();
  }, []);

  useEffect(
    () => {
      async function loadSchedule() {
        const response = await api.get('schedule', {
          params: { date, provider },
        });

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const data = range.map(hour => {
          const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
          const compareDate = utcToZonedTime(checkDate, timezone);

          return {
            time: `${hour}:00h`,
            past: isBefore(compareDate, new Date()),
            appointment: response.data.find(a =>
              isEqual(parseISO(a.date), compareDate)
            ),
          };
        });
        setSchedule(data);
      }
      loadSchedule();
    },
    [provider, date],
    [schedule]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleCancel(id) {
    await api.delete(`appointments/${id}`);
    setDate(addSeconds(date, 1));
  }

  async function handleSelectUser(id) {
    setProvider(id.value);
  }

  return (
    <Container>
      <aside>
        <SideMenu>
          <grid>
            {(create_appointment === true && (
              <NewAppointment>
                <button type="button">
                  <Link to="/appointments">Novo Agendamento</Link>
                </button>
              </NewAppointment>
            )) || (
              <NewAppointmentDisabled disabled type="button">
                <button type="button">Novo Agendamento</button>
              </NewAppointmentDisabled>
            )}
            <SelectDiv>
              <Select
                options={user}
                placeholder="Selecione o Usuário"
                onChange={handleSelectUser}
              />
            </SelectDiv>
            <Calendar>
              <BtnsNextPrev>
                <button type="button" onClick={handlePrevDay}>
                  <MdChevronLeft size={36} color="#FFF" />
                </button>
                <button type="button" onClick={handleNextDay}>
                  <MdChevronRight size={36} color="#FFF" />
                </button>
              </BtnsNextPrev>
              <DatePicker
                selected={date}
                onChange={sdate => setDate(sdate)}
                inline
              />
            </Calendar>
          </grid>
        </SideMenu>

        <ul>
          {schedule.map(time => (
            <Time
              key={time.time}
              past={time.past}
              available={!time.appointment}
            >
              <aside>
                <Hora>
                  <strong>{time.time}</strong>
                  <span>
                    {time.appointment
                      ? time.appointment.user.name
                      : 'Em aberto'}
                  </span>
                </Hora>
                <Servico>
                  <strong>Serviços</strong>
                  {time.appointment
                    ? time.appointment.service.map(s => (
                        <span key={s.service.id}>
                          {s.service ? s.service.name : ''}
                        </span>
                      ))
                    : ''}
                </Servico>
              </aside>
              {time.appointment &&
              time.appointment.past === false &&
              time.appointment.cancelable === true ? (
                <BtnCancelar
                  type="button"
                  onClick={() => handleCancel(time.appointment.id)}
                >
                  Cancelar
                </BtnCancelar>
              ) : (
                ''
              )}
            </Time>
          ))}
        </ul>
      </aside>
    </Container>
  );
}
