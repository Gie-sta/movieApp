import { API_KEY } from "./constants";

export const fetchPopular = `movie/popular?api_key=${API_KEY}`;

export const fetchTopRated = `movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const fetchUpcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US`

export const fethchSimilar= (id) => `movie/${id}/similar?api_key=${API_KEY}`

export const fetchVideo = (id) => `movie/${id}/videos?api_key=${API_KEY}&language=en-US`;