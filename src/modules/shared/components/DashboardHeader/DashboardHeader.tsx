import SearchIcon from "../../assets/NavIcons/fi_search.svg";
import NotifIcon from "../../assets/NavIcons/fi_bell.svg";
import WalletIcon from "../../assets/NavIcons/u_wallet.svg";
import LogoutIcon from "@mui/icons-material/Logout";

import { useGetUserPointsQuery } from "../../../Sessions/data/sessions.ts";

import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useLogoutMutation } from "../../../auth/data/auth.ts";

function DashboardHeader() {
  const { data, isLoading: isLoadingUser } = useGetUserQuery();

  let section = window.location.pathname.split("/").at(1);
  if (section === "sessions") section = "Live Session";
  if (section === "dashboard") section = "Dashboard";
  if (section === "subjects") section = "Subjects";
  if (section === "library") section = "My Library";
  if (section === "offers") section = "Offers";
  if (section === "wallet") section = "Wallet";
  if (section === "profil") section = "Profil";

  const navigate = useNavigate();
  function handleNavigateWallet() {
    navigate("/wallet");
  }
  function handleNavigateProfil() {
    navigate("/profil");
  }

  const { data: amount, isLoading } = useGetUserPointsQuery({});
  if (isLoading || !amount) return;
  let userPoints = amount.points;
  return (
    <header className="header">
      <div className="right-side">
        <p className="title">{section}</p>
        <div className="search">
          <img src={SearchIcon} />
          <input
            type="input"
            placeholder="Search for subjects , videos and chapters"
          />
        </div>
      </div>
      <div className="left-side">
        <img className="notification" src={NotifIcon} />
        <div className="wallet" onClick={() => handleNavigateWallet()}>
          <img src={WalletIcon} />
          <div className="balance">
            <p>Votre Solde</p>
            <span>{userPoints} PTS</span>
          </div>
        </div>
        <img
          src={data?.user?.user_metadata?.avatar}
          className="user-avatar"
          onClick={() => handleNavigateProfil()}
        />
      </div>
    </header>
  );
}
export default DashboardHeader;
