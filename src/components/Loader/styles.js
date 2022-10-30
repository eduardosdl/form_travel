import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(246, 246, 252, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main} transparent ${({ theme }) => theme.colors.primary.main} transparent;
    animation: ${load} 1.2s linear infinite;
  }

`;
