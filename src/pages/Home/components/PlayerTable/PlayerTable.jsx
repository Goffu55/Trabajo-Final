import React from "react";
import "./PlayerTable.css"

export const PlayerTable = ({ classB, valor, valorI, Players}) => {
  
  const limit = valor;
  const slicedData = Players.slice(valorI, limit);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th className="table__header">#</th>
          <th className="table__header">Player</th>
          <th className="table__header">Team</th>
          <th className="table__header">Position</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {slicedData.map((player) => (
          <tr key={player.number} className={classB}>
            <td className="table__cell">
              {formatNumber(player.number)}
            </td>
            <td className="table__cell">
              {player.player}
            </td>
            <td className="table__cell">
              {player.Team}
            </td>
            <td className="table__cell">
              {player.Position}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
