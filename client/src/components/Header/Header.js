import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { JsCookie } from "js-cookie";

function Header() {
  const [token, setToken] = useState();

  const getToken = () => {
    const applicationToken = JsCookie.get("accessToken");
    setToken(applicationToken);
  };
  useEffect(() => {
    getToken();
  }, []);

  const delToken = () => {
    JsCookie.remove("accessToken;");
    setToken("");
  };
  return (
    <div className={style.header}>
      <div className={style.width}>
        <p className={style.logo}>Hschool</p>
        <div className={style.buttons}>
          {token ? (
            <button onClick={delToken}>LogOut</button>
          ) : (
            <>
              <Link to="/signIn">
                <div className={style.login}>Login →</div>
              </Link>

              <Link to="/signUp">
                <div className={style.signup}>Sign Up</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
