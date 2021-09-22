import { MovieCard } from './MovieCard';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface contentProps {
  listMovies: MovieProps[];
  genre: GenreResponseProps;
}

export function Content( { genre, listMovies }: contentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre.title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {listMovies.map(movie => (
            <MovieCard 
              key={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}