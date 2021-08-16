import React from "react"
import Paper from '@material-ui/core/Paper'
import { Route } from "react-router-dom"


function MonstersList({ monsterData, setSelectedInfo }) {
   
    const displayMonsters = monsterData.map((monster) => {
       return ( 
            <Paper elevation={3} 
            key={monster.id} 
            onClick={() => setSelectedInfo(monster.name)}
            style={{ height: 50, width:220, textAlign: "center", backgroundColor: 'floralwhite', marginTop: 10 }}
             >
                {monster.name}
            </Paper>
       ) 
    })

    return (
        <div>
            <ul>
                {displayMonsters}
            </ul>
        </div>
    )
}


export default MonstersList;


// When monster is clicked, SelectedPannel should display monsters 
// Name, Type, Specices, and Description