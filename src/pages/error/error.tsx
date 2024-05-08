import { useRouteError } from "react-router-dom";
import styles from "./error.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={styles.container}>
      <div className={styles.circles}>
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
          <a className={`${styles.circle}`} href={"/"}>
            Go Back and try again!
          </a>
        </p>
        <span className={`${styles.big} ${styles.circle}`}></span>
        <span className={`${styles.med} ${styles.circle}`}></span>
        <span className={`${styles.small} ${styles.circle}`}></span>
      </div>
    </div>
  );
};

export default ErrorPage;
