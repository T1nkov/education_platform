import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./signIn.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const email = useRef();
  const pwd = useRef();

  const navigate = useNavigate();

  const sign = async () => {
    const data = { email: email.current.value, pwd: pwd.current.value };
    console.log(data);
    const response = await axios.post("http://localhost:3002/api/auth", data, {
      withCredentials: true,
    });
    console.log(response.data);
    navigate("/courses")
  };

  return (
    <div>
      <Header />
      <div className={style.background}>
        <div className={style.content}>
          <div className={style.info}>
            <h1>Login</h1>
            <input ref={email} type="text" placeholder="login" />
            <input ref={pwd} type="text" placeholder="password" />
            <button onClick={sign}>Login</button>
          </div>
          <div className={style.image}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
