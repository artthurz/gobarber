import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  /*margin-left: 50px;*/
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    font-size: 18px;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  a {
    font-weight: bold;
    color: #4169e1;

    &:active {
      color: #999;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      margin-top: 10px;
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;

      &:hover {
        color: ${darken(0.1, '#999')};
      }

      &:active {
        color: #4169e1;
      }
    }
  }

  img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
  }
`;

export const Configuration = styled.button`
  margin-right: 10px;
  background: none;
  border: 0;
  position: relative;
`;
