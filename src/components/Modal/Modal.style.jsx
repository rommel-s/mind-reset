import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  backdrop-filter: blur(2px);
  position: fixed;
  overflow-y: hidden;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: 80%;
  height: 200px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2000;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
  text-align: center;
`;

export const FlavorText = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
`;
