import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  min-width: 600px;
  margin: 30px auto;

  aside {
    a {
      color: #fff;
    }

  }

  strong{
    display: flex;
    color: #fff;
    font-size: 24px;
    justify-content: center;
    margin-right: 18%;
    margin-left: 31%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    aside{
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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
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
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const User = styled.div`
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

export const Slide = styled.div``;

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

export const SelectDiv = styled.div`
  max-height: 54px;
  margin-top: 3%;
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
