import React from "react";
import "./Home.css";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    // gridList: {
    //   width: 500,
    //   height: 450,
    // },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const Home = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
        },
        {
            name: "Random Name #4",
            description: "Hello World!",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        }
    ]

    const classes = useStyles();
    return (

<div className={classes.root} style={{margin: "20px"}}>
<Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
      <GridList cellHeight={300} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>description: {tile.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
        


    );
};

function Item(props)
{
    return (
        <Paper >
            <img src={props.item.imageUrl} style={{width: '100%', height: '200px'}} />
            
        </Paper>
    )
}


export default Home;
