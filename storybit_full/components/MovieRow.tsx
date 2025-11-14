'use client';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[], categoryTitle: string }) {
  return (
    <section className="py-4">
      <h3 className="text-lg font-semibold mb-2">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto snap-x py-2">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </section>
  );
}
