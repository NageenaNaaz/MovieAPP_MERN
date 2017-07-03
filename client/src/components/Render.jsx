var React = require('react');
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import request from 'superagent';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// Material UI Styling
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
};

export default class Render extends React.Component {

  /**
   * Class constructor.
   */
  constructor(){
    super();
    this.state = {
      movieDetail: null
    }
  }

  /**
   * This method will call just after render
   */
  componentDidMount(){
    var self = this;
    var getMovieDetail = 'https://api.themoviedb.org/3/movie/'+this.props.inputtext.id+'?api_key=0058d43a094e9d8f63318cf2d24d8f15'
    request.get(getMovieDetail).then(function(movieDetail) {
      self.setState({
        movieDetail: movieDetail.body
      })
    }.bind(this));
  }

  /**
   * This method will add movie to favourite list using SuperAgent
   */
  collection(e)
  {
    console.log("in Collections", e);
    request.post('/movie/add').send(e).end(function(err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }

  /**
   * Render the component.
   */
  render()
  {
    if(this.state.movieDetail === null){
      return(
        <div></div>
      );
    }

    var genres = " ";
    for(var i= 0;i<this.state.movieDetail.genres.length;i++){
      if(i==0){
        genres += this.state.movieDetail.genres[i].name
      }else{
        genres += ", "+ this.state.movieDetail.genres[i].name
      }
    }
    var posterPath = 'https://image.tmdb.org/t/p/w500/'+this.state.movieDetail.poster_path;

    /* Code to format Date starts here */
    var date = new Date(this.state.movieDetail.release_date);
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var formattedDate = monthNames[date.getMonth()] + "-"+ date.getFullYear();
    /* Code to format Date ends here */

    return (
      <div style={styles.root}>
        <GridList cols={2} cellHeight={400} padding={1} style={styles.gridList}>
          <GridTile>
            <Card>
              <CardMedia overlay={< CardTitle title = {this.state.movieDetail.Title}
              subtitle = {this.state.movieDetail.Year} />}>
                <img src={posterPath}/>
              </CardMedia>
            </Card>
          </GridTile>

          <GridTile>
            <Card cellHeight={400}>
              <FloatingActionButton secondary={true} onClick={this.collection.bind(this, this.state.movieDetail)}>
                <ContentAdd/>
              </FloatingActionButton>
              <CardText>
                <h3>{this.state.movieDetail.title}</h3>
                <br/>Genre:{genres}<br/>
                <br/>Released:{formattedDate}<br/>
                <br/>Vote Average:{this.state.movieDetail.vote_average}<br/>
              </CardText>
            </Card>
          </GridTile>
        </GridList>
      </div>
    );
  }
}
