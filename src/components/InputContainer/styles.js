import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  border: 2px solid #fff;
  height: 48px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;

    &::placeholder {
      color: ${theme.colors.danger.main};
    }
  `}
`;
