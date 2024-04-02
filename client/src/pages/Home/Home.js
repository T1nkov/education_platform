import style from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={style.header}>
        <p className={style.logo}>Hschool</p>
        <div className={style.buttons}>
          <div className={style.login}>Login →</div>
          <div className={style.signup}>Sign Up</div>
        </div>
      </div>

      <div className={style.main}>
        <div className={style.content}>
          <p>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.about}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <div className={style.button}>About platform</div>
          <div> 
              <div>600+</div>
              <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
