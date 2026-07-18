import React from 'react';
import { ListofPlayers } from './ListofPlayers';
import { OddPlayers, EvenPlayers, IndianPlayersList, ListOfIndianPlayers } from './IndianPlayers';

const players = [
  { name: 'Jack', score: 50 }, { name: 'Michael', score: 70 },
  { name: 'John', score: 40 }, { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 }, { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 }, { name: 'Virat', score: 84 },
  { name: 'Jadeja', score: 64 }, { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 }
];

const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

function App() {
  const flag = true; // Toggle this to see different outputs

  if (flag) {
    return (
      <div>
        <ListofPlayers players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <OddPlayers {...[IndianTeam]} />
        <hr />
        <EvenPlayers {...[IndianTeam]} />
        <hr />
        <ListOfIndianPlayers IndianPlayers={IndianPlayersList} />
      </div>
    );
  }
}

export default App;