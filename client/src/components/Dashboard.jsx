import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FavIcon from 'material-ui/svg-icons/action/favorite';
import InfoIcon from 'material-ui/svg-icons/action/info';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  title: {
    cursor: 'pointer',
  }
};

const style = {
  marginRight: 20
};

export default class Dashboard extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  /**
   * Toggle Side Menu Bar
   */
  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  };

  /**
   * Close Side Menu Bar
   */
  handleClose(){
    this.setState({
      open: false
    })
  };

  /**
   * Render the component.
   */
  render(secretData) {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            onLeftIconButtonClick={this.handleToggle.bind(this)}
              title = "10 Movies to Watch Before I die" style={{ textAlign: 'center' }}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              iconElementRight={<FlatButton icon={<FontIcon className="power_settings_new">power_settings_new</FontIcon>} containerElement={<Link to="/logout" />} />}
            />
          <Drawer
            docked={false}
            width={170}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            style={{textAlign: 'left'}}>
            <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="Home" containerElement={<Link to="/home" /> }  rightIcon={<HomeIcon />} innerDivStyle={{paddingRight: 60}} />
            <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="Favourite" containerElement={<Link to="/favourite" />} rightIcon={<FavIcon />} innerDivStyle={{paddingRight:60}}/>
            <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="About" containerElement={<Link to="/about" />} rightIcon={<InfoIcon />} innerDivStyle={{paddingRight:60}}/>
          </Drawer>
          <div style={{ textAlign: 'center' }}>
                {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
    secretData : PropTypes.string.isRequired;
  }
}
