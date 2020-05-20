import React, { useState } from 'react'
import Player from './T2_Comp/Player'
import AddPlayerFrom from './T2_Comp/AddPlayerForm'

function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }

function compare_name(player_a, player_b) {
    return player_a.name.localeCompare(player_b.name)
}

export default function Scoreboard() {
    const [players, set_players] = useState([
        { id: 1, name: "Jeroen", score: 11 },
        { id: 2, name: "Eszter", score: 14 },
        { id: 3, name: "Jeroen v2", score: 4 },
        { id: 4, name: "Lisa", score: 42 },
      ])
    const [sort_by, set_sort_by] = useState("score");

    const players_sorted_score = [...players].sort(compare_score)
    const players_sorted_name = [...players].sort(compare_name)
    
    const change_sorting = event => {
        set_sort_by(event.target.value);
        if(event.target.value === 'score'){
            set_players(players_sorted_score)
        }
        if(event.target.value === 'name'){
            set_players(players_sorted_name)
        }
    };
        
    return (
        <div className="Scoreboard">
            <h1>Scoreboard</h1>
            <select onChange={change_sorting}>
                <option value="name">Sort by name</option>
                <option value="score">Sort by score</option>
            </select>
            <ul>
                {players.map(( player, index) => {
                    return (
                            <Player 
                            key = {index}
                            name={player.name} 
                            score={player.score} />
                    )
                })}
            </ul>
            <AddPlayerFrom />
        </div>
    )
}
