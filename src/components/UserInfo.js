
class UserInfo {
    constructor({ userName , userJob, userAvatar }) {
      this._userName = userName; 
      this._userJob = userJob;
      this._avatar = userAvatar;
    }

    getUserInfo() {
      return {
        name: this._userName.textContent,
        job: this._userJob.textContent,
      }
    }

    setAvatar({avatar}) {
      this._avatar.src = avatar;
    }
  
    setUserInfo({name, job, _id, avatar}) { 
      this._userName.textContent = name; 
      this._userJob.textContent = job;
      this._id = _id;
      this._avatar.src = avatar;
      this._avatar.alt = name; 
    }

    getUserId() {
      return this._id;
    }
  }

  export default UserInfo;

