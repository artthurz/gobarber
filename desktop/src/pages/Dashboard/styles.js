import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  aside {
    margin-left: 20%;
    grid {
      margin-top: 20px;
    }
  }
  ul {
    max-width: 600px;
    min-width: 600px;
    margin-top: 5%;
    margin-right: 5%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;
export const SideMenu = styled.div`
  margin: 0px 5%;
  display: flex;
  align-items: center;
  align-self: center;

  strong {
    color: #fff;
    font-size: 24px;
    margin: 0 15px;
  }
`;

export const Calendar = styled.div`
  button {
    border: 0;
    background: none;
  }
`;

export const BtnsNextPrev = styled.div`
  margin-left: 35%;
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const NewAppointment = styled.div`
  margin-left: 18%;
  margin-bottom: 10%;

  a {
    color: #fff;
  }

  button{
      align-self: right;
      margin: 0;
      height: 36px;
      width: 150px;
      /*background: #e1b941;*/
      background: #69e141;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        /*background: ${darken(0.08, '#e1b941')};*/
        background: ${darken(0.08, '#69e141')};
      }
    }
`;

export const Hora = styled.div`
  margin-right: 70px;
  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#4169e1')};
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;

export const Servico = styled.div`
  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#4169e1')};
    font-size: 16px;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
