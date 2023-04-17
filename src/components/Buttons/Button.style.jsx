import styled from "styled-components";

export const TimerButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  margin: 0 10px;
  font-size: 18px;

  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accent};
    transition: ease-in 0.1s;
  }
`;

export const Start = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  padding: 10px 75px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontSize.bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white01};
    transition: ease-in 0.1s;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white01};
    transform: translateY(2px);
  }
`;

export const TryAgain = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;
