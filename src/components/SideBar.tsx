import { useEffect, useState } from "react";
import { api } from '../services/api';
import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface sideBarProps {
  onClickButton: (id: number) => void;
}

export function SideBar({ onClickButton }: sideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => {
              onClickButton(genre.id)
              setSelectedGenreId(genre.id)
            }}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}