import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'StoryBit Streaming Dashboard',
  description: 'A simple streaming dashboard clone'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20 max-w-6xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
