import React,{useContext} from 'react'
import "./topbar.css";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {

  const { user,dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"});
  }

  return (
    // <nav>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo">CaseStudy</h1>
          </Link>
        </div>
        <div className="topbarRight">
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
              Logout
          </button>
        </div>
        
      </div>
  );
}
