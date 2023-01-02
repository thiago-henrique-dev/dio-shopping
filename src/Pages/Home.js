import React from 'react';
import { Container, Paper, Grid, Typography, Button, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item'
import Card from '../components/Card';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
      
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography variant='h5'>
                Categorias
              </Typography>
              <List>
                <Item 
                    name="Times Nacionais"
                    details="3"
                />
                <Item
                  name="Times Internacionais"
                  details="3"
                />
                <Item
                  name="Times Municipais"
                  details="3"
                />
              </List>
            </Paper>
          </Grid>
          <Grid container xs={9} spacing={3} className={classes.root}>
            <Card
                name="Flamengo 2020" 
                price="99,99" 
                image="./images/produtos/fla.jpg"
            />
                 <Card
                name="Arsenal" 
                price="99,99" 
                image="./images/produtos/arsenal.jpg"
            />
          </Grid>
        </Grid>
    
      </Container>
    )
}

export default HomePage;