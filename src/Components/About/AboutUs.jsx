import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-8 text-center">
        Welcome to our Movie Application, your one-stop destination for discovering and exploring an extensive collection of movies from around the world! 🎬
      </p>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-md mb-4">
          Our mission is to provide movie enthusiasts with a seamless experience to browse, search, and discover their favorite films. With a user-friendly interface and powerful features, we aim to make movie discovery enjoyable for everyone.
        </p>
      </div>

      <div className="max-w-2xl w-full mb-10">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          <li className="text-md mb-2">✨ Discover an extensive library of movies from all genres and eras</li>
          <li className="text-md mb-2">🔍 Effortlessly find films by title, genre, or release date with our advanced search</li>
          <li className="text-md mb-2">⭐ Share your thoughts and ratings on your favorite films to help others discover great content</li>
          <li className="text-md mb-2">🎥 Enjoy watching trailers and exclusive clips to get a sneak peek before you watch</li>
          <li className="text-md mb-2">📅 Stay informed with timely updates on the latest movie releases and upcoming titles</li>
        </ul>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mb-10">
        <h2 className="text-3xl font-semibold mb-4">Join Us!</h2>
        <p className="text-md mb-4">
          We are constantly working to improve our application and provide new features. Join our community of movie lovers and be a part of our journey!
        </p>
        <button className="bg-white-600 hover:bg-zinc-950 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Get Started
        </button>
      </div>

      <footer className="mt-10">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Movie Application. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
