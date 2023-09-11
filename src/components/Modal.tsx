import "../styles/Modal.css";
import { googleIcon } from "../assets";
import { useState } from "react";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setOpenModal }: ModalProps) {
  const [showPasswd, setShowPasswd] = useState(false);
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
              <div className="form login">
                <div className="form-content">
                  <header>Login</header>
                  <form action="#">
                    <div className="field input-field">
                      <input
                        type="text"
                        // placeholder="Email"
                        className="input"
                        required
                      ></input>
                      <label className="form-label">Email Address</label>
                    </div>
                    <div className="field input-field">
                      <input
                        type={showPasswd ? "text" : "password"}
                        // placeholder="Password"
                        className="password"
                        required
                      ></input>{" "}
                      <label className="form-label">Password</label>
                      <i
                        className={
                          showPasswd
                            ? "bx bx-show eye-icon"
                            : "bx bx-hide eye-icon"
                        }
                        onClick={() => {
                          if (showPasswd) {
                            setShowPasswd(false);
                          } else {
                            setShowPasswd(true);
                          }
                        }}
                      ></i>
                    </div>
                    <div className="form-link">
                      <a href="#" className="forgot-pass">
                        Forgot password?
                      </a>
                    </div>
                    <div className="field button-field">
                      <button>Login</button>
                    </div>
                  </form>
                  <div className="form-link">
                    <span>
                      Don't have an account?{" "}
                      <a
                        onClick={() => {
                          setFormPage(false);
                        }}
                        className="link signup-link"
                      >
                        Signup
                      </a>
                    </span>
                  </div>
                </div>
                <div className="line"></div>
                <div className="media-options">
                  <a href="#" className="field facebook">
                    <i className="bx bxl-facebook facebook-icon"></i>
                    <span>Login with Facebook</span>
                  </a>
                </div>
                <div className="media-options">
                  <a href="#" className="field google">
                    <img src={googleIcon} alt="" className="google-img"></img>
                    <span>Login with Google</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="form signup">
                <div className="form-content">
                  <header>Signup</header>
                  <form action="#">
                    <div className="field input-field">
                      <input type="text" className="input" required></input>
                      <label className="form-label">Email Address</label>
                    </div>
                    <div className="field input-field">
                      <input
                        type={showPasswd ? "text" : "password"}
                        className="password"
                        required
                      ></input>
                      <label className="form-label">Password</label>
                    </div>
                    <div className="field input-field">
                      <input
                        type={showPasswd ? "text" : "password"}
                        className="password"
                        required
                      ></input>
                      <label className="form-label">Confirm password</label>

                      <i
                        className={
                          showPasswd
                            ? "bx bx-show eye-icon"
                            : "bx bx-hide eye-icon"
                        }
                        onClick={() => {
                          if (showPasswd) {
                            setShowPasswd(false);
                          } else {
                            setShowPasswd(true);
                          }
                        }}
                      ></i>
                    </div>
                    <div className="field button-field">
                      <button>Signup</button>
                    </div>
                  </form>
                  <div className="form-link">
                    <span>
                      Already have an account?{" "}
                      <a
                        onClick={() => {
                          setFormPage(true);
                        }}
                        className="link login-link"
                      >
                        Login
                      </a>
                    </span>
                  </div>
                </div>
                <div className="line"></div>
                <div className="media-options">
                  <a href="#" className="field facebook">
                    <i className="bx bxl-facebook facebook-icon"></i>
                    <span>Login with Facebook</span>
                  </a>
                </div>
                <div className="media-options">
                  <a href="#" className="field google">
                    <img src={googleIcon} alt="" className="google-img"></img>
                    <span>Login with Google</span>
                  </a>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Modal;