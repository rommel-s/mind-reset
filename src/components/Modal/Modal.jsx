import { useRef } from "react";
import { Background, ModalWrapper, Title, FlavorText } from "./Modal.style";
import { TryAgain } from "../Buttons/Button.style";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const reloadPage = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            {/* Inserir lottie aqui */}
            <Title>Você conseguiu!</Title>
            <FlavorText>Está tudo bem dar uma pausa.</FlavorText>
            <TryAgain
              onClick={() => {
                reloadPage();
              }}
            >
              Quero tentar de novo
            </TryAgain>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
