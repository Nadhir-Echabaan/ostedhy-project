// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useGetUserQuery } from "../../../auth/data/auth";
import UpdatingAvatar from "../../components/UpdatingAvatar/UpdatingAvatar";
import UpdatingPassword from "../../components/UpdatingPassword/UpdatingPassword";
import UpdatingProfileForm from "../../components/UpdatingProfileForm/UpdatingProfileForm";
function Profile() {
  const { data, isLoading } = useGetUserQuery({});

  return (
    <div className="profil-main-layout">
      <UpdatingProfileForm userData={data?.user?.user_metadata} />
      <div className="grid-right">
        <UpdatingAvatar avatar={data?.user.user_metadata.avatar} />
        <UpdatingPassword email={data?.user?.email} />
      </div>
    </div>
  );
}
export default Profile;
