import Image from 'next/image';
import { Movie } from '../types/movie';

export default function HeroBanner({ movie }: { movie: Movie | null }) {
  if (!movie) return null;
  const backdrop = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : '';
  return (
    <section className="relative h-72 md:h-96 w-full">
      {backdrop && (
        <Image src={backdrop} alt={movie.title ?? movie.name ?? 'Hero'} fill priority style={{objectFit: 'cover'}} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 text-white max-w-xl">
        <h1 className="text-2xl md:text-4xl font-bold">{movie.title ?? movie.name}</h1>
        <p className="mt-2 hidden md:block text-sm">{movie.overview?.slice(0, 200)}</p>
      </div>
    </section>
  );
}
