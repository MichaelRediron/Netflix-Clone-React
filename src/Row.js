import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const imageBaseURL = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow, rowID }) {
  const [movies, setMovies] = useState([]);
  const [scroll, setScroll] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [displayPlayer, setDisplayPlayer] = useState(false);
  var targetRow = document.getElementById(rowID);

  const playTrailer = (movie) => {
    setDisplayPlayer(true);
    movieTrailer(movie?.original_title)
      .then((url) => {
        let urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    if (scroll === 'left') {
      targetRow.scrollBy(-200, 0);
      setScroll('');
    }
    if (scroll === 'right') {
      targetRow.scrollBy(200, 0);
      setScroll('');
    }
  }, [scroll, targetRow]);

  return (
    <>
      <div className='row'>
        <h2 className='row-title'>{title}</h2>
        <div className='row-posters' id={rowID}>
          <button className='prev btn' onClick={() => setScroll('left')}>
            <FiChevronLeft />
          </button>
          <button className='next btn' onClick={() => setScroll('right')}>
            <FiChevronRight />
          </button>
          {movies.map((movie) => {
            const { poster_path, name, id, backdrop_path } = movie;
            return (
              <LazyLoadImage
                key={id}
                src={`${imageBaseURL}${
                  isLargeRow ? poster_path : backdrop_path
                }`}
                alt={name}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                onClick={() => playTrailer(movie)}
                delayTime
              />
            );
          })}
        </div>
      </div>
      {displayPlayer && (
        <Item trailerUrl={trailerUrl} setDisplayPlayer={setDisplayPlayer} />
      )}
    </>
  );
}

const Item = ({ trailerUrl, setDisplayPlayer }) => {
  const opts = {
    height: '440',
    width: '720',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='modal' onClick={() => setDisplayPlayer(false)}>
      <YouTube videoId={trailerUrl} className='vidPlayer' opts={opts} />;
    </div>
  );
};

export default Row;
