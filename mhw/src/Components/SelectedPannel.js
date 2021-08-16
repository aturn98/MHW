import React from "react"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

function SelectedPannel({ monsterData, selectedInfo }) {

    const selectedMonster = monsterData.filter(monster => monster.name === selectedInfo)
    const monsterMap = selectedMonster.map(monster => {
        return (
            <Card key={monster.id} style={{backgroundColor: 'floralwhite' }} >
               <CardContent > 
                    <Typography style={{ borderBottom: 'thick groove aqua'}} gutterBottom align="center" variant="h2" >{monster.name}</Typography>
                    <Typography gutterBottom variant="h6">Species: {monster.species}</Typography>
                    <Typography gutterBottom variant="h6">Type: {monster.type}</Typography>
                    <Typography gutterBottom variant="h6">Location: {monster.locations[0].name}</Typography>
                    <Typography gutterBottom variant="body1" >Description: {monster.description}</Typography>
                </CardContent>
            </Card>
        )
    })

    console.log(selectedMonster)
    
    return (
        <Box 
            sx={{ width: 750 }}
            p={3}>    
            {monsterMap}
        </Box>
    )
}


export default SelectedPannel;