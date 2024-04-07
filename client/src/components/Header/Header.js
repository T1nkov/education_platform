import style from "./header.module.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={style.header}>
      <div className={style.width}>
        <p className={style.logo}>Hschool</p>
        <div className={style.buttons}>
          <Link to="/signIn">
            <div className={style.login}>Login →</div>
          </Link>

          <Link to="/signUp">
            <div className={style.signup}>Sign Up</div>
            <h1>Hello</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
