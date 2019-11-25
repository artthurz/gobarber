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
  aside {
    justify-self: right;
  span {
      margin: 15px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
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
}

  ul {
    display: flex;
    margin-top: 8px;
    flex-direction: column;

    span {
      color: #e14169;
      align-self: flex-start;
      font-weight: bold;
      margin: 0px;
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
    }
  }



  button {
      margin: 5px 0 0;
      min-width: 600px;
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
