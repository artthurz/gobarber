import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  min-width: 600px;
  margin: 30px auto;

  strong {
    display: flex;
    color: #fff;
    font-size: 24px;
    justify-content: center;
    margin-right: 14%;
    margin-left: 28%;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  aside {
    span {
      margin: 15px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 36px;
    padding: 0 15px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #e14169;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const ButtonBack = styled.button`
  a {
      color: #fff;
    }
      align-self: right;
      margin: 0 0 0;
      height: 36px;
      width: 100px;
      background: #e1b941;
      /*background: #69e141;*/
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#e1b941')};
       /* background: ${darken(0.08, '#69e141')};*/
      }
`;

export const ButtonSave = styled.button`
      max-width: 600px;
      min-width: 600px;

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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
`;

export const Slide = styled.div`
  aside {
    input {
      margin-top: 12px;
    }
    span {
      display: flex;
      color: #fff;
      min-width: 65px;
      margin: 10px;
    }
  }
`;

export const SelectDiv = styled.div`
  max-height: 54px;
`;
