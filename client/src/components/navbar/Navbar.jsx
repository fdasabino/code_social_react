import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span>Code Social</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyIcon onClick={toggleDarkMode} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggleDarkMode} />
        )}
        <GridViewIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineIcon />
        <MailOutlineIcon />
        <NotificationsNoneIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="profile" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
