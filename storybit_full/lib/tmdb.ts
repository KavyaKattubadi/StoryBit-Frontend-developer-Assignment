const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

async function fetchFromTMDB(path: string) {
  if (!API_KEY) throw new Error('TMDB_API_KEY not set in environment');
  const url = `${BASE}${path}${path.includes('?') ? '&' : '?'}api_key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch from TMDB: ' + res.status);
  return res.json();
}

export async function fetchPopular() {
  return fetchFromTMDB('/movie/popular?language=en-US&page=1');
}

export async function fetchNowPlaying() {
  return fetchFromTMDB('/movie/now_playing?language=en-US&page=1');
}

export async function fetchTopRated() {
  return fetchFromTMDB('/movie/top_rated?language=en-US&page=1');
}

export async function fetchMovieById(id: string) {
  return fetchFromTMDB(`/movie/${id}?language=en-US`);
}
