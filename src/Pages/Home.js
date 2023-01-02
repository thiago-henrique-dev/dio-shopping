import React from 'react';
import { Container, Paper, Grid, Typography, Button, List, ListItem, ListItemText, makeStyles } from '@material-ui/core/';
import Item from '../components/Item'
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
                    itemName="Times Nacionais"
                    itemDetails="3"
                />
                <Item
                  itemName="Times Internacionais"
                  itemDetails="3"
                />
                <Item
                  itemName="Times Municipais"
                  itemDetails="3"
                />
              </List>
            </Paper>
          </Grid>
          <Grid container xs={9} spacing={3} className={classes.root}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Grid container direction='column'>
                  <Grid item>
                    <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                    <Typography variant='h6'>
                      Produto
                    </Typography>
                    <Typography variant='subtitle1'>
                      R$ 99.00
                    </Typography>
                  </Grid>
                <Button variant="contained">Adicionar</Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Grid container direction='column'>
                  <Grid item>
                    <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                    <Typography variant='h6'>
                      Produto
                    </Typography>
                    <Typography variant='subtitle1'>
                      R$ 99.00
                    </Typography>
                  </Grid>
                <Button variant="contained">Adicionar</Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Grid container direction='column'>
                  <Grid item>
                    <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                    <Typography variant='h6'>
                      Produto
                    </Typography>
                    <Typography variant='subtitle1'>
                      R$ 99.00
                    </Typography>
                  </Grid>
                <Button variant="contained">Adicionar</Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Grid container direction='column'>
                  <Grid item>
                    <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                    <Typography variant='h6'>
                      Produto
                    </Typography>
                    <Typography variant='subtitle1'>
                      R$ 99.00
                    </Typography>
                  </Grid>
                <Button variant="contained">Adicionar</Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
    
      </Container>
    )
}

export default HomePage;