import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 600px;
  min-width: 600px;
  margin: 30px auto;

  hr {
    border: 0;
    height: 1px;
    width: 600px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  strong {
    display: flex;
    color: #fff;
    font-size: 24px;
    justify-content: center;
    margin-right: 25%;
    margin-left: 31%;
    margin-bottom: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const BtnSalvar = styled.button`
      height: 36px;
      width: 600px;
      margin: 5px 0 0;
      height: 36px;
      /*background: #e1b941;*/
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      margin-bottom: 30px;

      &:hover {
        /*background: ${darken(0.08, '#e1b941')};*/
        background: ${darken(0.08, '#3b9eff')};
      }
`;

export const ContServ = styled.div`
  max-width: 600px;
  min-width: 600px;
  margin-left: 23%;
`;

export const Service = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  div {
    margin-bottom: 10px;
    strong {
      color: #4169e1;
      font-size: 24px;
      margin-bottom: 5%;
    }

    span {
      color: #999;
      font-size: 14px;
      align-content: center;
      margin: 0 5%;
    }
  }

  strong {
    color: #999;
    font-size: 14px;
    margin: 0 5%;
  }

  span {
    color: #999;
    font-size: 14px;
    margin: 0;
  }
`;

export const Price = styled.div`
  aside {
    max-height: 15px;
    div {
      margin: 0 5%;
      strong {
        color: #999;
        font-size: 14px;
      }
    }

    span {
      color: green;
      font-size: 14px;
      margin: 0;
    }
  }
`;

export const BtnEditar = styled.button`
  margin: 5px 0 0;
  height: 36px;
  width: 230px;
  /*background: #e1b941;*/
  background: #3b9eff;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    /*background: ${darken(0.08, '#e1b941')};*/
    background: ${darken(0.08, '#3b9eff')};
  }
`;

export const BtnDeletar = styled.button`
  margin: 5px 0 0;
  height: 36px;
  width: 230px;
  /*background: #e1b941;*/
  background: #e14169;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    /*background: ${darken(0.08, '#e1b941')};*/
    background: ${darken(0.08, '#e14169')};
  }
`;

export const Buttons = styled.div`
  margin-top: 5%;
  margin-left: 5%;
`;

export const AsideHeader = styled.aside``;

export const Calendar = styled.div`
  margin-left: 150px;
`;

export const Entradas = styled.div`
  margin-top: 30px;
  span {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 36px;
    width: 260px;
    padding: 0 15px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
  }
`;

export const Badge = styled.button`
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 10px;
  background: white;
  border: 0;
  position: relative;
  border-radius: 4px;
  height: 36px;
  width: 36px;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 0;
  width: 260px;
  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  hr {
    border: 0;
    height: 1px;
    width: 200px;
    background: rgba(0, 0, 0, 0.2);
    margin-top: 2px;
  }

  strong {
    color: #3b9eff;
    font-size: 18px;
    margin-bottom: 0;
    margin-left: 50px;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #fff;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 200px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #3b9eff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }


  aside {
    margin-left: 0;
    float: right;

    p {
      width: 165px;
    }

    button {
      font-size: 12px;
      border: 0;
      background: none;
      color: ${lighten(0.2, '#4169e1')};
    }
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
