import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 32px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
