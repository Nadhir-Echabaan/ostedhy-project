import { NavLink } from "react-router-dom"; 

import LogoOstedhy from "./Logo.svg"; 

import DashboardLogo from "../../assets/NavIcons/home_4.svg"
import LiveSessionsLogo from "../../assets/NavIcons/Calendar.svg"; 
import SubjectsLogo from "../../assets/NavIcons/folder.svg"; 
import LibraryLogo from "../../assets/NavIcons/Bag2.svg"
import OffersLogo from "../../assets/NavIcons/Star_rectangle.svg"
import WalletLogo from "../../assets/NavIcons/Wallet.svg"
import ProfileLogo from "../../assets/NavIcons/User_rectangle_1.svg"

function SideBar () {
  return (
    <aside className="side-bar">
      <img src={LogoOstedhy} />
      <ul className="MainNav">
        <li>
          <NavLink className="NavLink" to="/dashboard">
            <img src={DashboardLogo} />
            <span>Dadshboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/sessions">
            <img src={LiveSessionsLogo} />
            <span>Live Sessions</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/subjects">
            <img src={SubjectsLogo} />
            <span>Subjects</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/library">
            <img src={LibraryLogo} />
            <span>My Library</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/offers"> 
            <img src={OffersLogo} />
            <span>Offers</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/wallet">
            <img src={WalletLogo} />
            <span>Wallet</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLink" to="/profil">
            <img src={ProfileLogo} />
            <span>My Profile</span>
          </NavLink>
        </li>
      </ul>

    </aside>
  )
}
export default SideBar
