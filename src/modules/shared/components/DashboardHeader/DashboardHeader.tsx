import SearchIcon from "../../assets/NavIcons/fi_search.svg";
import NotifIcon from "../../assets/NavIcons/fi_bell.svg";
import WalletIcon from "../../assets/NavIcons/u_wallet.svg";
import UserAvatarIcon from "../../assets/NavIcons/Ellipse 1.svg";

function DashboardHeader() {
  let section = window.location.pathname.split("/").at(1);
  if (section === "sessions") section = "Live Session"; 
  if (section === "dashboard") section = "Dashboard"; 
  if (section === "subjects") section = "Subjects"; 
  if (section === "library") section = "My Library"; 
  if (section === "offers") section = "Offers"; 
  if (section === "wallet") section = "Wallet"; 
  if (section === "profil") section = "Profil"; 

  return (
    <header className="header">
      <div className="right-side">
        <p className="title">{section}</p>
        <div className="search">
          <img src={SearchIcon} />
          <input
            type="input"
            placeholder="Search for subjects , vedios and chapters"
          />
        </div>
      </div>
      <div className="left-side">
        <img className="notification" src={NotifIcon} />
        <div className="wallet">
          <img src={WalletIcon} />
          <div className="balance">
            <p>Votre Solde</p>
            <span>0 PTS</span>
          </div>
        </div>
        <img src={UserAvatarIcon} className="user-avatar" />
      </div>
    </header>
  );
}
export default DashboardHeader;
