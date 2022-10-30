import styled from 'styled-components';

export const Label = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const ContainerList = styled.ul`
  list-style: none;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  border: 2px solid #fff;
  height: 150px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
      width: 10px;
  }

  ::-webkit-scrollbar-track {
      background: #e0e0e0;
      border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: rgb(133, 133, 133);
      border-radius: 20px;
  }

`;

export const ItemList = styled.li`
  list-style: none;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.07);
  min-height: 24px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }


  input + label {
    position: relative;
    cursor: pointer;
    padding-left: 30px;
  }

  input[type=checkbox] + label::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=checkbox]:checked + label {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  input[type=checkbox]:checked + label::after {
    content: '';
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: 8px;
    height: 15px;
    border-right: solid 2px ${({ theme }) => theme.colors.primary.main};
    border-bottom: solid 2px ${({ theme }) => theme.colors.primary.main};
    transform: rotate(45deg);
  }
`;
