class UserInfo {
    constructor({ nameSelector, bioSelector }) {
      this._nameSelector = nameSelector;
      this._bioSelector = bioSelector;
    }

    getUserInfo() {
      return {
        userName: this._nameSelector.textContent,
        userBio: this._bioSelector.textContent,
      }
    }
  
    setUserInfo({userName, userBio}) {
      this._nameSelector.textContent = userName;
      this._bioSelector.textContent = userBio;
    }
  }

  export default UserInfo;

