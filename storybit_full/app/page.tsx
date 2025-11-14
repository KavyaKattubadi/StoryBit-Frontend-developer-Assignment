import { fetchPopular, fetchNowPlaying, fetchTopRated } from '../lib/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { Movie } from '../types/movie';

export default async function Home() {
  // Server-side fetches (uses TMDB_API_KEY from environment)
  const [popularRes, nowRes, topRes] = await Promise.allSettled([
    fetchPopular(),
    fetchNowPlaying(),
    fetchTopRated()
  ]);

  const popular = popularRes.status === 'fulfilled' ? (popularRes.value.results as Movie[]) : [];
  const nowPlaying = nowRes.status === 'fulfilled' ? (nowRes.value.results as Movie[]) : [];
  const topRated = topRes.status === 'fulfilled' ? (topRes.value.results as Movie[]) : [];

  const hero = popular[0] ?? null;

  return (
    <div>
      <HeroBanner movie={hero} />
      <div className="mt-6">
        <MovieRow movies={popular.slice(0,20)} categoryTitle="Popular" />
        <MovieRow movies={nowPlaying.slice(0,20)} categoryTitle="Now Playing" />
        <MovieRow movies={topRated.slice(0,20)} categoryTitle="Top Rated" />
      </div>
    </div>
  );
}
