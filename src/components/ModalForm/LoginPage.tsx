import { useEffect, useState } from "react";
import axios from "axios";
import { googleIcon } from "../../assets";

interface LoginPageProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFormPage: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  authenticated: boolean;
}

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://aligator.pythonanywhere.com",
});

const LoginPage = ({
  setOpenModal,
  setFormPage,
  setAuthenticated,
  authenticated,
}: LoginPageProps) => {
  const [showPasswd, setShowPasswd] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    client.post("/api/login/", formData).then(function (res) {
      console.log(res);
      setAuthenticated(true);
      setOpenModal(false);
    });
  };

  useEffect(() => {
    if (authenticated) {
      client
        .get("/api/get/user/")
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      handleLogout();
    }
  }, [authenticated]);

  const handleLogout = () => {
    if (!authenticated) {
      client
        .post("/api/logout/", { withCredentials: true })
        .then(function (res) {
          console.log(res);
          setAuthenticated(false);
        });
    }
  };

  return (
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="text"
              // placeholder="Email"
              className="input"
              required
              name="email"
              onChange={handleChange}
            ></input>
            <label className="form-label">Email Address</label>
          </div>
          <div className="field input-field">
            <input
              type={showPasswd ? "text" : "password"}
              // placeholder="Password"
              className="password"
              required
              name="password"
              onChange={handleChange}
            ></input>{" "}
            <label className="form-label">Password</label>
            <i
              className={
                showPasswd ? "bx bx-show eye-icon" : "bx bx-hide eye-icon"
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
            <button type="submit">Login</button>
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
  );
};

export default LoginPage;
