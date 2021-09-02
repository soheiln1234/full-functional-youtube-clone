import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(log_out());
  };

  return (
    <nav
      onClick={() => handleToggleSidebar(false)}
      className={sidebar ? "sidebar open" : "sidebar"}
    >
      <Link to="/">
        <li>
          <MdHome color="#fff" size={23} />
          <span>Home</span>
        </li>
      </Link>
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions color="#fff" size={23} />
          <span>Subcscription</span>
        </li>
      </Link>
      <li>
        <MdThumbUp color="#fff" size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory color="#fff" size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks color="#fff" size={23} />
        <span>Libary</span>
      </li>
      <hr />
      <li onClick={logOutHandler}>
        <MdExitToApp color="#fff" size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
