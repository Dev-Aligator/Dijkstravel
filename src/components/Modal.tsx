import "../styles/Modal.css";
import { googleIcon } from "../assets";
import { useState } from "react";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setOpenModal }: ModalProps) {
  const [showPasswd, setShowPasswd] = useState(false);
  // const [formPage, setFormPage] = useState(true);
  const func = () => {
    console.log("hmi");
  };
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
          {/* <div classNameName="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div> */}

          {/* <h2>Sign In</h2>
          <form action="#">
            <div classNameName="form-control">
              <input type="text" required></input>
              <label>Email or phone number</label>
            </div>
            <div classNameName="form-control">
              <input type="password" required></input>
              <label>Password</label>
            </div>
            <button classNameName="signup-button" type="submit">
              Sign In
            </button>
            <div classNameName="form-help">
              <div classNameName="remember-me">
                <input type="checkbox" id="remember-me"></input>
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#">Need help?</a>
            </div>
          </form>
          <p>
            New to Netflix? <a href="#">Sign up now</a>
          </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="#">Learn more.</a>
          </small> */}

          <section className="form-container forms">
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
                    <a href="#" onClick={func} className="link signup-link">
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
          </section>
        </div>
      </div>
    </>
  );
}

export default Modal;
