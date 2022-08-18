const API_KEY = process.env.REACT_APP_API_KEY;

const requests = [
  {
    id: 1,
    name: 'New Releases',
    request: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    isLarge: true,
  },
  {
    id: 2,
    name: 'Trending Now',
    request: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    isLarge: false,
  },
  {
    id: 3,
    name: 'Top Rated',
    request: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    isLarge: false,
  },
  {
    id: 4,
    name: 'Action Movies',
    request: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    isLarge: false,
  },
  {
    id: 5,
    name: 'Comedy Movies',
    request: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    id: 6,
    name: 'Fantasy Movies',
    request: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    isLarge: false,
  },
  {
    id: 7,
    name: 'Horror Movies',
    request: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    isLarge: false,
  },
  {
    id: 8,
    name: 'Thriller Movies',
    request: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    isLarge: false,
  },
];

export default requests;
