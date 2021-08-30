import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        onClick={() => handleToggleSidebar()}
        className="header__menu"
        size={26}
      />
      <img
        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
        className="header__logo"
        alt="youtube logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <dic className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://yt3.ggpht.com/yti/APfAmoEYK-DIG3RUS-dNC3Vi1EQixBYgOaxaQ2KaW-eE=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="user profile"
        />
      </dic>
    </div>
  );
};

export default Header;
