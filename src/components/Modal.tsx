import "../styles/Modal.css";
import { useState } from "react";
import LoginPage from "./ModalForm/LoginPage";
import RegisterPage from "./ModalForm/RegisterPage";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setOpenModal }: ModalProps) {
  const [formPage, setFormPage] = useState(true);

  return (
    <>
      <div
        className="modalBackground"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>

      <div className="modalForm">
        <div className="modalContainer form-wrapper">
          <section className="form-container forms">
            {formPage ? (
              <LoginPage setFormPage={setFormPage}></LoginPage>
            ) : (
              <RegisterPage setFormPage={setFormPage}></RegisterPage>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Modal;
