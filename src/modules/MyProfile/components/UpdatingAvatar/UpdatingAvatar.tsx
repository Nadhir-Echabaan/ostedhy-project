import defaultAvatar from '../../assets/Ellipse 68.svg'; 
function UpdatingAvatar() {
  return (
    <div className='update-avatar-container'>
      <img src={defaultAvatar} className="user-avatar" />
      <div className='updating-avatar-condition'>
        <p>Edit your photo</p>
        <span>The size must be less than 2Mo</span>
      </div>
      <div className="action-btns"> 
        <input type="file" name="avatar" hidden/>
        <label className="image-input-label">
          <span>Upload</span>
        </label>
        <button className="delete-avatar-btn">Delete</button>
      </div>
    </div>
  )
}

export default UpdatingAvatar
