import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;

  strong{
    display: flex;
    color: #fff;
    font-size: 24px;
    justify-content: center;
    margin: 0 15px;
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

  form {
    display: flex;
    margin-top: 20px;
    flex-direction: column;

    span {
      color: #e14169;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    div {
      display: flex;
      align-self: center;
      align-items: center;


      span {
        display: flex;
        color: #fff;
        min-width: 65px;
        margin: 10px;
      }

      label{
        margin-left: 20px;

      }

      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        outline: none;
      }
      .switch input {
        position: absolute;
        top: -99999px;
        left: -99999px;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
      }
      .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
      input:checked + .slider {
        background-color: #69e141;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #69e141;
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
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

      &:hover {
        /*background: ${darken(0.08, '#e1b941')};*/
        background: ${darken(0.08, '#3b9eff')};
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  
`;
