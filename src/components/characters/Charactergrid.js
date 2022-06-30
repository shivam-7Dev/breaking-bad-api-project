import React from 'react';
import CharacterItem from './CharacterItem';
import spinner from '../ui/spinner';

function Charactergrid({ items, isLoading }) {
  return isLoading ? (
    <spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
}

export default Charactergrid;
