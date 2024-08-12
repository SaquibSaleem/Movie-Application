import React from 'react';

const MovieList = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold mb-6 text-center">Featured Movies</h1>
      <div className="max-w-2xl w-full mb-10">
        <ul className="list-disc list-inside">
          <li className="text-md mb-2">
            <strong>The Shawshank Redemption</strong> - Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
          </li>
          <li className="text-md mb-2">
            <strong>Inception</strong> - A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.
          </li>
          <li className="text-md mb-2">
            <strong>Interstellar</strong> - A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
          </li>
          <li className="text-md mb-2">
            <strong>Parasite</strong> - Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.
          </li>
          <li className="text-md mb-2">
            <strong>The Dark Knight</strong> - When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
