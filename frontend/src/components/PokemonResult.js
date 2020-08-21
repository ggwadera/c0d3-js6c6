import React from 'react';

const PokemonResult = ({ name, search, onClick }) => {
  const regex = new RegExp(`(${search})`, 'i');
  const splitName = name.split(regex).filter(str => str !== '');
  return (
    <h3 onClick={onClick}>
      {splitName.map(str => {
        if (regex.test(str)) return <span className="match">{str}</span>
        return str
      })}
    </h3>
  );
};

export default PokemonResult;