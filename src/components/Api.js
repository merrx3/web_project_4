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
getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
    }).then(this._checkServerResponse);
}

// === 3. Editing the profile === //
setUserInfo({name, bio}){
    return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name,
            bio,
        }),
    }).then(this._checkServerResponse);
}

// === 4. Adding a new card === //
addCard({ name, image }) {
    return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name,
            image,
        }),
    }).then(this._checkServerResponse);
}

// === 5. Showing how many likes a card has === //
toggleCardLikes(cardID, like) {
    return fetch(`${this._baseUrl}/cards/like/${cardID}`, {
        method: like ? "PUT" : "DELETE",
        headers: this._headers,
    }).then(this._checkServerResponse);
}

// === 6. Creating a popup for deleting a card === //




}