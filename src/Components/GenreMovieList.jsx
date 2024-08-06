import React, { useContext } from "react";
import GenersList from "../Constants/GenersList";
import MovieList from "./MovieList";
import loadingContext from "../context/Context";

const GenreMovieList = () => {
  const { movieGenreList } = useContext(loadingContext);
  return (
    <div>
     {movieGenreList.map(
      (item, index) =>
      index <= 4 && (
      <div key={item.id} className="p-10 px-8 md:px-20 ">
        <h2 className="text-white text-[30px] font-bold pb-5">
          {item.name}
        </h2>
        <MovieList data={item.data} />
      </div>


          )
      )}
    </div>
  );
};

export default GenreMovieList;
