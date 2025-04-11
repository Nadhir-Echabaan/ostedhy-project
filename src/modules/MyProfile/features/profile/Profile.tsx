import UpdatingAvatar from "../../components/UpdatingAvatar/UpdatingAvatar";
import UpdatingPassword from "../../components/UpdatingPassword/UpdatingPassword";
import UpdatingProfileForm from "../../components/UpdatingProfileForm/UpdatingProfileForm";
function Profile() {
  return  (
    <div className="profil-main-layout">
      <UpdatingProfileForm />
      <div className="grid-right">
      <UpdatingAvatar />
      <UpdatingPassword />
      </div>
    </div>
  ); 
}
export default Profile;
