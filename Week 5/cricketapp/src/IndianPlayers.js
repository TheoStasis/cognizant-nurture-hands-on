import React from 'react';

export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <h1>Odd Players</h1>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}

export function EvenPlayers([, second, , fourth, , sixth]) {
    return (
      <div>
        <h1>Even Players</h1>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </div>
    );
  }

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianPlayersList = [...T20Players, ...RanjiTrophyPlayers];

export const ListOfIndianPlayers = ({ IndianPlayers }) => {
    return (
        <div>
            <h1>List of Indian Players Merged:</h1>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </div>
    )
}