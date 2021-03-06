import React, { useContext } from "react";
import "../assets/css/Favourite.css";
import { GlobalContext } from "../Context/GlobalState";
import { FavouriteMovie } from "./FavouriteMovie";
import { FavouriteTvShow } from "./FavouriteTvShow";

export const Favourite = () => {
  const { movieFavourite, tvShowFavourite } = useContext(GlobalContext);

  return (
    <div className="Favourite mt-4 w-100">
      <h3 className="text-left colorCustom mb-4">Favourites</h3>
      <hr className=" mb-5" />


      {movieFavourite && movieFavourite.length > 0 && (
        <div className="mb-3">
          <h5 className="text-left favColor">Favourite Movies</h5>
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            {movieFavourite.map((movieFavourite) => (
              <FavouriteMovie
                key={movieFavourite.id}
                movieFavourite={movieFavourite}
              />
            ))}
          </div>
        </div>
      )}



      {tvShowFavourite && tvShowFavourite.length > 0 && (
        <div className="">
          <h5 className="text-left colorCustom">Favourite TV-Shows</h5>
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            {tvShowFavourite.map((tvShowFavourite) => (
              <FavouriteTvShow
                key={tvShowFavourite.id}
                tvShowFavourite={tvShowFavourite}
              />
            ))}
          </div>
        </div>
      )}
      {movieFavourite.length === 0 && tvShowFavourite.length === 0 && (
        <h3 className="text-secondary mt-4">Favourite List is Empty.</h3>
      )}
    </div>
  );
};
