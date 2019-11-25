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
    margin-left: 26%;
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

export const Calendar = styled.div`
  margin-left: 140px;
  margin-bottom: 30px;
`;

export const SelectDiv = styled.div`
  margin-bottom: 5px;
`;
