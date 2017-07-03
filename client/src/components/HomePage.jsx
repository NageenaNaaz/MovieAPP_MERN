import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Card className="container">
          <CardTitle title="Movie Application" subtitle="This is the MovieApp Home page."/>
        </Card>
      </div>
    )
  }
}
