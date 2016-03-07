import React, { Component } from 'react';

export default class App extends Component {

  render() {

    return (
      <div>

        {/* render containers dynamically based on route */}
        {this.props.children}

      </div>
    );

  }

}
