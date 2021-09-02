import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import YouTube from "../../assets/animations/YouTube";
import Google from "../../assets/icons/Google";
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
        <div className="login__form">
          <YouTube />
          <h1>YouTube</h1>
          <h2>Welcom Back!</h2>
          <button onClick={handleLogin}>
            {
              <Google
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                }}
              />
            }
            Login with Google
          </button>
          <div className="login__description">
            <p>
              This project is using YouTube Data API
              {"\n"}
            </p>
            <p>
              Please don't refresh the site a lot, beacauese the youtube api is
              limited.
            </p>
            <p>I hope enjoy it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
