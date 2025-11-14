'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/70 text-white backdrop-blur z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/"><a className="font-bold text-xl">StoryBit</a></Link>
        <nav className="space-x-4">
          <a className="text-sm">Home</a>
          <a className="text-sm">Movies</a>
        </nav>
      </div>
    </header>
  );
}
