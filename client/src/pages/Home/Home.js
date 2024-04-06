import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./home.module.scss";

function Home() {
  return (
    <div>
      <Header />

      <div className={style.main}>
        <div className={style.width}>
          <div className={style.content}>
            <p>E-COURSE PLATFORM</p>
            <h1>Learning and teaching online, made easy.</h1>
            <p className={style.about}>
              Any subject, in any language, on any device, for all ages!
            </p>
            <div className={style.button}>About platform</div>
            <div className={style.wrap}>
              <div className={style.lightning}>
                <div className={style.light_img}></div>
                <p>
                  600<span>+</span>
                </p>
              </div>
              <p className={style.stud}>Students</p>
            </div>
          </div>
          <div className={style.leftcontent}>
            <div className={style.picture}></div>
          </div>
        </div>
      </div>

      <section className={style.learn}>
        <div className={style.width}>
          <div className={style.wrapper}>
            <div className={style.picture}></div>
            <div className={style.info}>
              <h1>Learn a language in a playful way</h1>
              <p>
                Make learning programming languages more fun with mini-games
              </p>
              <div className={style.wrapPic}>
                <div className={style.firstPic}></div>
                <div className={style.secondPic}></div>
              </div>
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
      <Footer />
    </div>
  );
}

export default Home;
