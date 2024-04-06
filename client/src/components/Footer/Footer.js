import style from "./footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={style.wrapper}>
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
      </div>
    </footer>
  );
}

export default Footer;
