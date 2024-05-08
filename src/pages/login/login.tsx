import LoginForm from "../../components/login-form/login-form";
import styles from "./login.module.css";
import VideoBackground from "../../assets/video-background/video-background";

const Login = () => {
  return (
    <div className={styles.container}>
      <VideoBackground />
      <div className={styles.loginForm}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
