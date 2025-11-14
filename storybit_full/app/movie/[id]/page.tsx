import { fetchMovieById } from '../../../lib/tmdb';
import Image from 'next/image';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const data = await fetchMovieById(params.id);
  const movie = data;

  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';

  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          {poster && <Image src={poster} alt={movie.title} width={500} height={750} style={{objectFit:'cover'}} />}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-sm mt-2">{movie.overview}</p>
          <p className="mt-4 text-sm">Release date: {movie.release_date}</p>
          {movie.genres?.length ? (
            <div className="mt-2">
              <h4 className="font-semibold">Genres</h4>
              <div className="flex gap-2 mt-2">
                {movie.genres.map((g: any) => <span key={g.id} className="text-sm bg-gray-200 px-2 py-1 rounded">{g.name}</span>)}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
