import styled from "styled-components";

interface IButton {
  $background: string;
  $height: string;
}

export const Button = styled.button<IButton>`
  width: 100%;
  min-height: 40px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.White};
  height: ${({ $height }) => $height};
  background-color: ${({$background}) => $background};
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
`;
