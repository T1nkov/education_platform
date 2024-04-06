import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./courses.module.scss";
import image1 from "./assets/js.png";
import image2 from "./assets/ts.png";
import image3 from "./assets/pyhon.png";
function Courses() {
  return (
    <div>
      <Header />
      <section className={style.wrapper}>
        <div className={style.title}>
          <div className={style.image}></div>
          <p>Courses</p>
        </div>
      </section>

      <section className={style.course}>
        <div className={style.wrapper}>
          <img src={image1} alt="" />
          <div className={style.content}>
            <h1>JavaScript</h1>
            <div className={style.line}></div>
            <p>
              JavaScript is a practical course where students learn the basics
              of JavaScript. It covers variables, operators, conditionals,
              loops, functions, and data manipulation.
            </p>
          </div>
        </div>

        <div className={style.wrapper}>
          <img src={image2} alt="" />
          <div className={style.content}>
            <h1>TypeScript</h1>
            <div className={style.line}></div>
            <p>
              TypeScript is a course that provides an introduction to
              TypeScript. Students will learn about TypeScript's key features,
              such as type annotations, interfaces, classes, and modules
            </p>
          </div>
        </div>

        <div className={style.wrapper}>
          <img src={image3} alt="" />
          <div className={style.content}>
            <h1>Python</h1>
            <div className={style.line}></div>
            <p>
              Students will learn about variables, data types, conditionals,
              loops, functions, and file handling. Through hands-on exercises
              and projects, students will gain proficiency in writing Python
              code and solving real-world problems.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Courses;
