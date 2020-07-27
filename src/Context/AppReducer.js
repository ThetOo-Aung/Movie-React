export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        movieWatchlist: [...state.movieWatchlist, action.payload],
      };
    case "ADD_TVSHOW_TO_WATCHLIST":
      return {
        ...state,
        tvShowWatchlist: [...state.tvShowWatchlist, action.payload],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        movieWatchlist: state.movieWatchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
