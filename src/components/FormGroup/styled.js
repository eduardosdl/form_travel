import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 16px;
    max-width: 400px;


  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }
`;
