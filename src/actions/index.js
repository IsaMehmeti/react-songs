//action creator
export const selectSong = (song) => {
  //returns an action (plain object)
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
