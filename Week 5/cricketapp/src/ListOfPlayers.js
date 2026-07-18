import React from 'react';

export const ListofPlayers = ({ players }) => {
  const players70 = players.filter(item => item.score <= 70);

  return (
    <div>
      <h1>List of Players</h1>
      {players.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>{item.score}</span></li>
        </div>
      ))}
      <hr />
      <h1>List of Players having Scores Less than 70</h1>
      {players70.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>{item.score}</span></li>
        </div>
      ))}
    </div>
  );
};