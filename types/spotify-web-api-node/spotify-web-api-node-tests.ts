// Test for the type definitions for spotify-web-api-node 4.0
// Project: https://github.com/thelinmichael/spotify-web-api-node
// Definitions by: Magnar Ovedal Myrtveit <https://github.com/Stadly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi();

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then((data: SpotifyWebApi.Response<SpotifyApi.MultipleAlbumsResponse>) => {
    console.log('Albums information', data.body);
  }, (err: any) => {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SingleArtistResponse>) => {
    console.log('Artist information', data.body);
  }, (err: any) => {
    console.error(err);
  });

// Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then((data: SpotifyWebApi.Response<SpotifyApi.MultipleArtistsResponse>) => {
    console.log('Artists information', data.body);
  }, (err: any) => {
    console.error(err);
  });

// Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then((data: SpotifyWebApi.Response<SpotifyApi.ArtistsAlbumsResponse>) => {
    console.log('Artist albums', data.body);
  }, (err: any) => {
    console.error(err);
  });

// Search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('Love')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SearchResponse>) => {
    console.log('Search by "Love"', data.body);
  }, (err: any) => {
    console.error(err);
  });

// Search artists whose name contains 'Love'
spotifyApi.searchArtists('Love')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SearchResponse>) => {
    console.log('Search artists by "Love"', data.body);
  }, (err: any) => {
    console.error(err);
  });

// Search tracks whose artist's name contains 'Love'
spotifyApi.searchTracks('artist:Love')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SearchResponse>) => {
    console.log('Search tracks by "Love" in the artist name', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SearchResponse>) => {
    console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Search playlists whose name or description contains 'workout'
spotifyApi.searchPlaylists('workout')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SearchResponse>) => {
    console.log('Found playlists are', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit: 5, offset: 1 })
  .then((data: SpotifyWebApi.Response<SpotifyApi.AlbumTracksResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Get an artist's top tracks
spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
  .then((data: SpotifyWebApi.Response<SpotifyApi.ArtistsTopTracksResponse>) => {
    console.log(data.body);
    }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Get artists related to an artist
spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
  .then((data: SpotifyWebApi.Response<SpotifyApi.ArtistsRelatedArtistsResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/* Get Audio Features for a Track */
spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then((data: SpotifyWebApi.Response<SpotifyApi.AudioFeaturesResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/* Get Audio Analysis for a Track */
spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then((data: SpotifyWebApi.Response<SpotifyApi.AudioAnalysisResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/* Get Audio Features for several tracks */
spotifyApi.getAudioFeaturesForTracks(['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK'])
  .then((data: SpotifyWebApi.Response<SpotifyApi.MultipleAudioFeaturesResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/*
 * User methods
 */

// Get a user
spotifyApi.getUser('petteralexis')
  .then((data: SpotifyWebApi.Response<SpotifyApi.UserProfileResponse>) => {
    console.log('Some information about this user', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Get the authenticated user
spotifyApi.getMe()
  .then((data: SpotifyWebApi.Response<SpotifyApi.CurrentUsersProfileResponse>) => {
    console.log('Some information about the authenticated user', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/*
 * Playlist methods
 */

// Get a playlist
spotifyApi.getPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
  .then((data: SpotifyWebApi.Response<SpotifyApi.SinglePlaylistResponse>) => {
    console.log('Some information about this playlist', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Get a user's playlists
spotifyApi.getUserPlaylists('thelinmichael')
  .then((data: SpotifyWebApi.Response<SpotifyApi.ListOfUsersPlaylistsResponse>) => {
    console.log('Retrieved playlists', data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Create a private playlist
spotifyApi.createPlaylist('thelinmichael', 'My Cool Playlist', { public: false })
  .then((data: SpotifyWebApi.Response<SpotifyApi.CreatePlaylistResponse>) => {
    console.log('Created playlist!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Add tracks to a playlist
spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.AddTracksToPlaylistResponse>) => {
    console.log('Added tracks to playlist!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Add tracks to a specific position in a playlist
spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
  {
    position: 5
  })
  .then((data: SpotifyWebApi.Response<SpotifyApi.AddTracksToPlaylistResponse>) => {
    console.log('Added tracks to playlist!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Remove tracks from a playlist at a specific position
spotifyApi.removeTracksFromPlaylistByPosition('5ieJqeLJjjI8iJWaxeBLuK', [0, 2, 130], "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9")
  .then((data: SpotifyWebApi.Response<SpotifyApi.RemoveTracksFromPlaylistResponse>) => {
    console.log('Tracks removed from playlist!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Remove all occurrence of a track
spotifyApi.removeTracksFromPlaylist('5ieJqeLJjjI8iJWaxeBLuK', [{ uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }], { snapshot_id: "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9" })
  .then((data: SpotifyWebApi.Response<SpotifyApi.RemoveTracksFromPlaylistResponse>) => {
    console.log('Tracks removed from playlist!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Reorder the first two tracks in a playlist to the place before the track at the 10th position
spotifyApi.reorderTracksInPlaylist('5ieJqeLJjjI8iJWaxeBLuK', 0, 10, { range_length: 2 })
  .then((data: SpotifyWebApi.Response<SpotifyApi.ReorderPlaylistTracksResponse>) => {
    console.log('Tracks reordered in playlist!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Change playlist details
spotifyApi.changePlaylistDetails('5ieJqeLJjjI8iJWaxeBLuK',
  {
    name: 'This is a new name for my Cool Playlist, and will become private',
    public: false
  }).then((data: SpotifyWebApi.Response<SpotifyApi.ChangePlaylistDetailsReponse>) => {
     console.log('Playlist is now private!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Upload a custom playlist cover image
spotifyApi.uploadCustomPlaylistCoverImage('5ieJqeLJjjI8iJWaxeBLuK', 'longbase64uri')
  .then((data: SpotifyWebApi.Response<SpotifyApi.UploadCustomPlaylistCoverImageReponse>) => {
     console.log('Playlsit cover image uploaded!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Follow a playlist (privately)
spotifyApi.followPlaylist('5ieJqeLJjjI8iJWaxeBLuK',
  {
    public: false
  }).then((data: SpotifyWebApi.Response<SpotifyApi.FollowPlaylistReponse>) => {
     console.log('Playlist successfully followed privately!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Unfollow a playlist
spotifyApi.unfollowPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
  .then((data: SpotifyWebApi.Response<SpotifyApi.UnfollowPlaylistReponse>) => {
     console.log('Playlist successfully unfollowed!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Check if Users are following a Playlist
spotifyApi.areFollowingPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', ['thelinmichael', 'ella'])
 .then((data: SpotifyWebApi.Response<SpotifyApi.UsersFollowPlaylistReponse>) => {
    data.body.forEach((isFollowing: boolean) => {
      console.log("User is following: " + isFollowing);
    });
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/*
 * Following Users and Artists methods
 */

/* Get followed artists */
spotifyApi.getFollowedArtists({ limit: 1 })
  .then((data: SpotifyWebApi.Response<SpotifyApi.UsersFollowedArtistsResponse>) => {
    // 'This user is following 1051 artists!'
    console.log('This user is following ', data.body.artists.total, ' artists!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/* Follow a user */
// TBD.

/* Follow an artist */
// TBD.

/* Unfollow a user */
// TBD

/* Unfollow an artist */
// TBD

/* Check if a user is following a user */
// TBD

/* Check if a user is following an artist */
// TBD

/*
 * Your Music library methods
 */

/* Tracks */

// Get tracks in the signed in user's Your Music library
spotifyApi.getMySavedTracks({
    limit: 2,
    offset: 1
  })
  .then((data: SpotifyWebApi.Response<SpotifyApi.UsersSavedTracksResponse>) => {
    console.log('Done!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Check if tracks are in the signed in user's Your Music library
spotifyApi.containsMySavedTracks(["5ybJm6GczjQOgTqmJ0BomP"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.CheckUsersSavedTracksResponse>) => {
    // An array is returned, where the first element corresponds to the first track ID in the query
    const trackIsInYourMusic = data.body[0];

    if (trackIsInYourMusic) {
      console.log('Track was found in the user\'s Your Music library');
    } else {
      console.log('Track was not found.');
    }
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Remove tracks from the signed in user's Your Music library
spotifyApi.removeFromMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.RemoveUsersSavedTracksResponse>) => {
    console.log('Removed!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Add tracks to the signed in user's Your Music library
spotifyApi.addToMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.SaveTracksForUserResponse>) => {
    console.log('Added track!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/* Albums */

// Get albums in the signed in user's Your Music library
spotifyApi.getMySavedAlbums({
    limit: 1,
    offset: 0
  })
  .then((data: SpotifyWebApi.Response<SpotifyApi.UsersSavedAlbumsResponse>) => {
    // Output items
    console.log(data.body.items);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Check if albums are in the signed in user's Your Music library
spotifyApi.containsMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.CheckUserSavedAlbumsResponse>) => {
    // An array is returned, where the first element corresponds to the first album ID in the query
    const albumIsInYourMusic = data.body[0];

    if (albumIsInYourMusic) {
      console.log('Album was found in the user\'s Your Music library');
    } else {
      console.log('Album was not found.');
    }
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Remove albums from the signed in user's Your Music library
spotifyApi.removeFromMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.RemoveAlbumsForUserResponse>) => {
    console.log('Removed!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

// Add albums to the signed in user's Your Music library
spotifyApi.addToMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then((data: SpotifyWebApi.Response<SpotifyApi.SaveAlbumsForUserResponse>) => {
    console.log('Added album!');
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });

/*
 * Browse methods
 */

  // Retrieve new releases
spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'SE' })
  .then((data: SpotifyWebApi.Response<SpotifyApi.ListOfNewReleasesResponse>) => {
    console.log(data.body);
  }, (err: any) => {
      console.log("Something went wrong!", err);
  });

//  Retrieve featured playlists
spotifyApi.getFeaturedPlaylists({ limit: 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp: '2014-10-23T09:00:00' })
  .then((data: SpotifyWebApi.Response<SpotifyApi.ListOfFeaturedPlaylistsResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log("Something went wrong!", err);
  });

// Get a List of Categories
spotifyApi.getCategories({
      limit: 5,
      offset: 0,
      country: 'SE',
      locale: 'sv_SE'
  })
  .then((data: SpotifyWebApi.Response<SpotifyApi.MultipleCategoriesResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log("Something went wrong!", err);
  });

// Get a Category (in Sweden)
spotifyApi.getCategory('party', {
      country: 'SE',
      locale: 'sv_SE'
  })
  .then((data: SpotifyWebApi.Response<SpotifyApi.SingleCategoryResponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log("Something went wrong!", err);
  });

// Get Playlists for a Category (Party in Brazil)
spotifyApi.getPlaylistsForCategory('party', {
      country: 'BR',
      limit: 2,
      offset: 0
    })
  .then((data: SpotifyWebApi.Response<SpotifyApi.CategoryPlaylistsReponse>) => {
    console.log(data.body);
  }, (err: any) => {
    console.log("Something went wrong!", err);
  });

/* Player */

// Get information about current playing song for signed in user
spotifyApi.getMyCurrentPlaybackState({
  })
  .then((data: SpotifyWebApi.Response<SpotifyApi.CurrentPlaybackResponse>) => {
    // Output items
    console.log("Now Playing: ", data.body);
  }, (err: any) => {
    console.log('Something went wrong!', err);
  });
/* Get Recommendations Based on Seeds */
// TBD

/**
 * Personalization Endpoints
 */

/* Get a User’s Top Artists and Tracks */
// TBD
