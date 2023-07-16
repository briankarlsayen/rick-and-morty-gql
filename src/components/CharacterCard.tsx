import * as React from 'react';

interface CharProps {
  id: number;
  name: string;
  image: string;
  onClick: any;
}

export default function CharacterCard({ onClick, ...character }: CharProps) {
  return (
    <div onClick={() => onClick(character?.id)}>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
