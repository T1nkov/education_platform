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
            <p>Students</p>
          </div>
        </div>
        <div className={style.leftcontent}>
          <div className={style.picture}></div>
        </div>
      </div>

      <section className={style.learn}>
        <div className={style.wrapper}>
          <div className={style.picture}></div>
          <div className={style.info}>
            <h1>Learn a language in a playful way</h1>
            <p>Make learning programming languages more fun with mini-games</p>
            <div className={style.wrapPic}>
              <div className={style.firstPic}></div>
              <div className={style.secondPic}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.textBook}>
        <div className={style.wrapper}>
          <div className={style.about}>
            <h1>Increase your knowledge</h1>
            <p>
              Traditional and new effective approaches to learning languages
            </p>
            <div className={style.button}>Textbook →</div>
          </div>
          <div className={style.picture}></div>
        </div>
      </section>

      <section className={style.progress}>
        <div className={style.wrapper}>
          <div className={style.picture}></div>
          <div className={style.about}>
            <h1>Increase your knowledge</h1>
            <p>
              Traditional and new effective approaches to learning languages
            </p>
            <div className={style.button}>Textbook →</div>
          </div>
        </div>
      </section>

      <footer>
        <div className={style.footerTop}>
          <div className={style.leftside}>
            <p>Home</p>
            <p>Textbook</p>
            <p>Statistics</p>
            <p>Sprint</p>
          </div>
          <div className={style.rightside}>
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>
        <div className={style.footerDown}>
          <div className={style.icons}>
            <div className={style.iconGit}></div>
            <div className={style.iconGT}></div>
            <div className={style.iconYT}></div>
          </div>

          <div className={style.sert}>
            <p>©2021 Hschool. Project for Hschool.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
