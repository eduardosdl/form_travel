import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  max-height: calc(100vh - 32px);
  padding: 32px;
  margin: 16px auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: overlay;

  ::-webkit-scrollbar {
      width: 8px;
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
