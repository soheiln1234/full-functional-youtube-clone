import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./_loginscreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

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
