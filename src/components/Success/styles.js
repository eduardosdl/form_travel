import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(200, 200, 200, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  height: 150px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
`;