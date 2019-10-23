import styled from 'styled-components';

export const Container = styled.div`
  max-width: 140px;
  /* padding: 0px; */
  background-color: #fff;
  font-size: 18px;

  ul {
    margin-top: 30px;
  }

  hr {
    background-color: transparent;
    margin-top: 1000px;
  }

  #menu ul li a {
    padding: 2px 10px;
    display: flex;

    /* visual do link */
    background-color: #fff;
    color: #333;
    text-decoration: none;
    border-bottom: 3px solid #fff;
  }

  #menu ul li a:hover {
    background-color: #eee;
    color: #6d6d6d;
    border-bottom: 3px solid #4169e1;
  }
`;
