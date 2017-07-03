import React from 'react';
import request from 'superagent';
import Dashboard from './Dashboard.jsx';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import StarBorder from 'material-ui/svg-icons/toggle/star';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    marginTop: 10
  }
};

export default class Favourite extends React.Component {
  /**
   * Class constructor.
   */
  constructor() {
    super();
    this.state = {
      movieArr: []
    }
    this.del = this.del.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   * Using SuperAgent to get list of Favourite Movie from API
   */
  componentDidMount(e) {
    console.log("in Favourite");
    request.get('/movie/view').end((err, res) => {
      if (err) {
        console.log("error:" + err);
      } else {
        console.log("this is favorite", res.body);
        this.setState({movieArr: res.body})
      }
    })
  }


  /**
   * This method will delete movie from Favourite List.
   */
  del(e)
  {
    var movieId = e.currentTarget.id;
    var self = this;
    request.delete('/movie/delete').send({id: movieId}).end(function(err, res) {
      if(err){
        console.log("error:" + err);
      }else{
        for(var i=0;i<self.state.movieArr.length;i++){
          if(self.state.movieArr[i]._id === movieId){
            self.state.movieArr.splice(i, 1);
          }
        }
        self.setState({
          movieArr: self.state.movieArr
        })
      }
    })
  }

  /**
   * Render the component.
   */
  render() {
    
    
    const movieList = this.state.movieArr.map((e) => {
      var posterPath = 'https://image.tmdb.org/t/p/w500/'+e.Poster;
      return (
            <GridTile
              key={e._id}
              title={e.Title}
              subtitle={<div><StarBorder color="white" className="rating__icon"/><br/><b>{e.imdbRating}</b></div>}
              actionIcon={<DeleteIcon id={e._id} color="white" style={{marginRight: 10}} onClick={this.del.bind(this)}/>}
            >
              <img src={posterPath} />
            </GridTile>
      )
    })

    return (
      <div>
        <div>
          <Dashboard/>
        </div>
        <div>
          <div style={styles.root}>
          <GridList cellHeight={250} style={styles.gridList}>
            <Subheader>Favorite Movies</Subheader>
            {movieList}
          </GridList>
          </div>          
        </div>
      </div>
    );
  }
}
