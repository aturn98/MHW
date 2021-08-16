import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MonstersList from "./MonstersList";
import SelectedPannel from "./SelectedPannel";
import Grid from '@material-ui/core/Grid'
import About from "./About"
import Box from '@material-ui/core/Box'
import { Typography } from "@material-ui/core";
import ToPrimitive from "es-to-primitive/es5";


function ListPannel() {
    const [monsterData, setMonsterData] = useState([])
    const [selectedInfo, setSelectedInfo] = useState("")


    useEffect(() => {
        fetch("https://mhw-db.com/monsters")
        .then(resp => resp.json())
        .then(data => setMonsterData(data))
    }, [])

    console.log(monsterData)
    return (
        <div>
            <Switch>
                <Route exact path="/home">
                    <Box style={{ height: 1150, backgroundColor:'lightgrey',}} align="center">
                        <Typography variant='h2' style={{ paddingTop: '5em', color: 'limegreen'}}>Monster Hunter World Monster Index</Typography>
                        <Typography variant='h4' style={{ color: 'black' }}>Info on all the monster in MHW</Typography>
                    </Box>
                </Route>
                <Route path="/Monsters">
                   <div>
                        <Grid container >
                            <Grid item xs={3}>
                                <MonstersList monsterData={monsterData} setSelectedInfo={setSelectedInfo} />
                            </Grid>
                            <Grid item xs={6} >
                                <SelectedPannel monsterData={monsterData} selectedInfo={selectedInfo} />
                            </Grid>
                        </Grid>
                    </div>
                </Route>
                <Route path="/About">
                    <About />
                </Route>
            </Switch>
        </div>
    );
}

export default ListPannel;