import React from 'react';
import Dashboard from '../components/Dashboard.jsx';
import { Card, CardHeader } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';

class AboutPage extends React.Component {  

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <Dashboard/>
        <Subheader>About</Subheader>
        <Card>
          <CardHeader
            subtitle="This movie application site is essentially trying to take on IMDb by combining detailed movie information with ratings, recommendations, and reviews. One way where the site really sets itself apart is that users can add movie as their favorite."
          />
        </Card>
      </div>
    );
  }

}
export default AboutPage;
