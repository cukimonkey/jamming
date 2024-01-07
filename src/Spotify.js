//This component is for encapsulating all Spotify-related logic. 

const clientId = '6b3b7cb1d9874bf7959e0a61a4f20b77'; // Replace with your client ID
const redirectUri = 'http://localhost:3000/'; // Replace with your redirect URI
const scopes = ['playlist-modify-public']; // Replace with required scopes

let accessToken;


const Spotify = {
    getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
  
      // Check for access token match
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        // Clear parameters from URL, so we get a new access token when it expires
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scopes.join(' '))}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location = accessUrl;
      }
    },
  //handle search requests in Spotify 
    search(term) {
        const accessToken = this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => response.json())
        .then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name, // Assuming the first artist
            album: track.album.name,
            uri: track.uri
          }));
        });
      },

      getUserId() {
        const accessToken = this.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
    
        return fetch('https://api.spotify.com/v1/me', { headers: headers })
          .then(response => response.json())
          .then(jsonResponse => jsonResponse.id);
      },

//Create a new Playlist
createPlaylist(userId, playlistName) {
    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };
    const data = JSON.stringify({ name: playlistName });
  
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: headers,
      body: data
    })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.id);
  },

  //Add tracks to the playlists
  addTracksToPlaylist(playlistId, trackUris) {
    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };
    const data = JSON.stringify({ uris: trackUris });
  
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: headers,
      body: data
    });
  },

  //Combine the previous two to save the playlist
  savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) {
      return Promise.reject('Playlist name or tracks are missing');
    }
  
    let userId = null;
    let playlistId = null;
  
    return this.getUserId()
      .then(id => {
        userId = id;
        return this.createPlaylist(userId, playlistName);
      })
      .then(id => {
        playlistId = id;
        return this.addTracksToPlaylist(playlistId, trackUris);
      });
  }
    };




export default Spotify;
