import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

/* If the user is not Authenticated show Sign up link*/
const Base =({ children }) => (
  <div>    
    {Auth.isUserAuthenticated() ? (<div></div>) : 
      (
        <div className="top-bar-right">
          <Link to="/signup">Sign up</Link>
        </div>
      )}
    { /* child component will be rendered here */ }
    {children}
  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
