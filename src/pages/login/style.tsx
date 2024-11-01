import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.Primary100};
`;
export const WarpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 90%;
  height: 90%;
`;
export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 35%;
  height: 100%;
  
  &:last-child {
    width: 60%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
export const WarpLogo = styled.div`
  margin-bottom: 20px;
`;
export const Logo = styled(Img)`
  object-fit: contain;
  max-width: 120px;
`;
export const WarpText = styled.aside`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  gap: 70px;
  margin-top: 40px;
 
`;

export const Description = styled.h3`
  color: ${({ theme }) => theme.colors.White};
  width: 100%;
  height: auto;
  font-size: 1.2rem;
  ${({ theme }) =>
    css`
      ${theme.typography.Tajawal300}
    `}
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  width: 100%;
`;
export const WarpInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  `;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.White};
  margin-bottom: 11px;
  font-size: 1rem;
  ${({ theme }) =>
    css`
      ${theme.typography.Tajawal500}
    `}
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.938rem;
  background-color: ${({ theme }) => theme.colors.Black200};
  color: ${({ theme }) => theme.colors.White};
  transition: all 0.3s ease;
  border: 0.5px solid transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.Gray300};
    background-color: ${({ theme }) => theme.colors.Black200};
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.Blue270};
    -webkit-box-shadow: 0 0 0px 1000px #f8f9fa inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus {
    border: 0.5px solid ${({ theme }) => theme.colors.Blue270};
  }
`;
export const Error = styled.p`
  margin-top: 5px;
  height: 10px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.Red300};
`;
