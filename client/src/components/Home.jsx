var React = require('react');

import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import request from 'superagent';
import Render from './Render.jsx';
import IconButton from 'material-ui/IconButton';
import Dashboard from './Dashboard.jsx';

//Material-UI Styles
const Styles = {
  errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: orange500
  },
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
};

const style = {
  margin: 12
}

var promise;

//Home Class Exporting
export default class Home extends React.Component {
  /**
   * Class constructor.
   */
  constructor() {
    super();
    //whatever we are entering in Textfield is stored in input variable
    //the data from api whatever we are Getting is stored in allinputcontent
    this.state = {
      text: "",
      searchResult: null
    };
    this.Search = this.Search.bind(this);
  }

  /**
   * This method will set State which user is changing to search movie
   */
  onChange(m) {
    this.setState(
      {
        text: m.target.value
      }
    );
  };

  /**
   * This method is using SuperAgent to get the data from API and storing it in data
   */
  Search(data) {
    //var url = `http://www.omdbapi.com?s=${data}&y=&r=json`;
    var url = `https://api.themoviedb.org/3/search/movie?api_key=0058d43a094e9d8f63318cf2d24d8f15&query=${data}`;
    request.get(url).then(function(response) {
      console.log(response.body);
      this.setState({searchResult: response.body.results});
    }.bind(this));
  };

  /**
   * Render the component.
   */
  render() {
    if(this.state.searchResult === null) {
      return(
        <div>
          <Dashboard/>
          <Subheader>Search your Favourite Movie</Subheader>
          <div>
            <TextField hintText={"Search your Favourite Movie"} style={{ width: '70%', marginTop: '20px'}} underlineFocusStyle={Styles.underlineStyle} value={this.state.text} onChange={this.onChange.bind(this)}/>
            <RaisedButton label="Search" secondary={true} style={style} onClick={this.Search.bind(this, this.state.text)} />
          </div>          
        </div>
      )
    }
   
    const movies = this.state.searchResult.map((movieItem, index) => {

      return(
        <Render key={movieItem.id} inputtext={movieItem} />
      )      
    });

    return (
      <div>
        <Dashboard/>
        <Subheader>Search your Favourite Movie</Subheader>
        <div>
          <TextField hintText={"Search your Favourite Movie"} style={{ width: '70%', marginTop: '20px'}} underlineFocusStyle={Styles.underlineStyle} value={this.state.text} onChange={this.onChange.bind(this)}/>
          <RaisedButton label="Search" secondary={true} style={style} onClick={this.Search.bind(this, this.state.text)} />
        </div>
        {movies}
      </div>
    );
  }
}
