import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import YouTube from "../../assets/icons/YouTube";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${input}`);
  };

  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="border border-dark header">
      <FaBars
        onClick={() => handleToggleSidebar()}
        className="header__menu"
        size={26}
      />

      <div className="header__logo">
        <YouTube />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Search"
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="user profile" />
      </div>
    </div>
  );
};

export default Header;
