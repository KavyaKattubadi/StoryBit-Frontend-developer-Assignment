'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : '';
  return (
    <Link href={`/movie/${movie.id}`}>
      <a className="block min-w-[140px]">
        {poster ? (
          <Image src={poster} alt={movie.title ?? movie.name} width={200} height={300} style={{objectFit:'cover'}} />
        ) : (
          <div className="w-48 h-72 bg-gray-300 flex items-center justify-center">No Image</div>
        )}
        <div className="mt-2 text-sm">{movie.title ?? movie.name}</div>
      </a>
    </Link>
  );
}
