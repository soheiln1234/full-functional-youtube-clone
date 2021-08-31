import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import "./_loginscreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="youtube logo"
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is using YouTube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
