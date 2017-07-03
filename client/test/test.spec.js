import 'jsdom-global/register';

import React, {PropTypes} from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dashboard from '../src/components/Dashboard';
import Drawer from 'material-ui/Drawer';
import request from 'superagent';
import Home from '../src/components/Home';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import DashboardPage from '../src/containers/DashboardPage';
import Auth from '../src/modules/Auth';
import {Card, CardText} from 'material-ui/Card';
import LoginForm from '../src/components/LoginForm'

describe('<Dashboard />', () => {
  it('should render <Dashboard />', () => {
    const wrapper = mount(<Dashboard />, {
         context: {
           muiTheme: getMuiTheme()
         },
         childContextTypes: {
           muiTheme: React.PropTypes.object.isRequired
         },
       });
    expect(wrapper.find(Drawer)).to.have.length(1);
  });
});

describe('<Home />', () => {
  it('should render <Home />', () => {
    const wrapper = mount(<Home />, {
         context: {
           muiTheme: getMuiTheme()
         },
         childContextTypes: {
           muiTheme: React.PropTypes.object.isRequired
         },
       });
    expect(wrapper.find(Dashboard)).to.have.length(1);
  });
});

// describe('componentDidMount',() =>{
//   it('should render componentDidMount' , () =>{
//     sinon.spy(DashboardPage.prototype, 'componentDidMount');
//     const wrapper = mount(<DashboardPage />,{
//       context: {
//         muiTheme: getMuiTheme()
//       },
//       childContextTypes: {
//         muiTheme: React.PropTypes.object.isRequired
//       },
//     });
//     expect(DashboardPage.prototype.componentDidMount.calledOnce).to.equal(true);
//     //expect(wrapper.find(AutoComplete)).to.have.length(1);
//   })
// })


describe('<LoginForm />', () => {
  it('should render <LoginForm />', () => {
    const wrapper = mount(<LoginForm />, {
         context: {
           muiTheme: getMuiTheme()
         },
         childContextTypes: {
           muiTheme: React.PropTypes.object.isRequired
         },
       });
    expect(wrapper.find(Card)).to.have.length(1);
  });
});
