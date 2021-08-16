import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'




function About() {

    return(
        <Box style={{ height: 1150, backgroundColor:'lightgrey',}} align="center">
            <Typography variant="h2" style={{ paddingTop: '5em', color: 'black'}}> Flatiron School Phase 2 Project </Typography>
            <Typography variant='h4' >Made by: Austin Turner</Typography>
            <Typography variant='h6' style={{ color: 'black'}}>Api: https://docs.mhw-db.com/</Typography>
            <Typography variant="h6">Made with React & Material-ui</Typography>
        </Box>
           
    )
}


export default About;