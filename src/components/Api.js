export default class Api {
   constructor({baseUrl, headers}) {
       this._baseUrl = baseUrl;
       this._headers = headers;
   } 


_checkServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

// === 1. Load user information from the server === //
getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
    }).then(this._checkServerResponse);
}

// === 2. Load Cards from the server === //

}