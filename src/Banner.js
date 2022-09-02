import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

const imageBaseURL = 'https://image.tmdb.org/t/p/original';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchUrl = requests[0].request;
        const response = await axios.get(fetchUrl);
        const randMovie = Math.floor(
          Math.random() * response.data.results.length
        );
        setMovie(response.data.results[randMovie]);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(${imageBaseURL}${movie?.backdrop_path})`,
      }}
    >
      <div className='banner-content'>
        <h1 className='banner-title'>{movie?.original_title}</h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <h4 className='banner-desc'>{truncate(movie?.overview, 200)}</h4>
      </div>
    </header>
  );
}

export default Banner;
