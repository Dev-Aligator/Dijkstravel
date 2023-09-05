import "../styles/Modal.css";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setOpenModal }: ModalProps) {
  return (
    <>
      <div className="modalBackground"></div>

      <div className="modalForm">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Are You Sure You Want to Continue?</h1>
          </div>
          <div className="body">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
