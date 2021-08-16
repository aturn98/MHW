import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

function NavBar() {

    return (
        <div>
            <nav>
                <Grid align="center" container spacing={3}>
                    <Grid item xs={2}>            
                        <Paper elevation={15} style={{ height: 40 }} >
                            <Link style={{ textDecoration: 'none', margin: '1rem', color: 'black' }} to="/home">Home</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>   
                        <Paper elevation={15} style={{ height: 40 }}>
                            <Link style={{ textDecoration: 'none', margin: '1rem', color: 'black' }} to="/Monsters">Monsters</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} >
                        <Paper elevation={15} style={{ height: 40 }}>
                            <Link style={{ textDecoration: 'none', margin: '1rem', color: 'black' }} to="/About">About</Link>
                        </Paper>
                    </Grid>
                </Grid>
            </nav>
        </div>
    );
}

export default NavBar