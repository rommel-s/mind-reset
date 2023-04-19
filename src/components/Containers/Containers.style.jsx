import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TimerWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 130px;
  margin-top: 1.5em;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 20px;
`;

export const Instructions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: ${({ theme }) => theme.colors.white};

  p {
    text-align: center;
    font-size: 1em;
    font-weight: 500;
  }
`;
