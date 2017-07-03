import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import Home from './components/Home.jsx';
import Favourite from './components/Favourite.jsx';
import Render from './components/Render.jsx';
//import FavList from './components/FavList.jsx'

import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import AboutPage from './containers/AboutPage.jsx';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          // callback(null, DashboardPage);
          callback(null, Home);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },



    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    },
    {
      path: '/home',
      component: Home
    },


    {
      path: '/Render',
      component: Render
    },
    {
      path: '/favourite',
      component: Favourite
    },
    {
      path: '/about',
      component: AboutPage
    }

  ]
};

export default routes;
