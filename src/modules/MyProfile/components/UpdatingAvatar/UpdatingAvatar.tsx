import toast from "react-hot-toast";
import {
  useUploadImageMutation,
  useUpdateUserAvatarMutation,
} from "../../../auth/data/auth";

function UpdatingAvatar({ avatar }: any) {
  const [updateUserAvatar] = useUpdateUserAvatarMutation({});
  const [uploadImage] = useUploadImageMutation();

  async function handleChange(e: any) {
    const value = e.target.files[0];

    const extension = value.type.split("/").at(-1);

    const size = value.size;

    if (
      (extension !== "jpeg" && extension !== "png" && extension !== "jpg") ||
      size > 2000 * (1024 * 1024)
    ) {
      toast.error("Wrong Picture format");
    } else {
      const imageName = `${Date.now()}-${value.name}`;

      const res = await uploadImage({ imageName, file: value });

      updateUserAvatar(
        `https://nemnkkgusenwmqjxkqeg.supabase.co/storage/v1/object/public/avatars//${res.data.path}`
      );
    }
  }

  return (
    <div className="update-avatar-container">
      <img src={avatar} className="user-avatar" />
      <div className="updating-avatar-condition">
        <p>Edit your photo</p>
        <span>The size must be less than 2Mo</span>
      </div>
      <div className="action-btns">
        <input
          type="file"
          name="avatar"
          id="imageInputLabel"
          hidden
          onChange={handleChange}
        />
        <label className="image-input-label" htmlFor="imageInputLabel">
          <span>Upload</span>
        </label>
        <button
          className="delete-avatar-btn"
          onClick={() => {
            updateUserAvatar(
              "https://nemnkkgusenwmqjxkqeg.supabase.co/storage/v1/object/public/avatars//images.png"
            );
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UpdatingAvatar;
