import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Message = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.danger.main};
`;
