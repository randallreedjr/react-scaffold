import React from 'react';

import HelloWorld from './HelloWorld';

class HelloWorldContainer extends React.Component {
  constructor() {
    super();
    this.state = { name: 'World' };
  }

  render() {
    return (
      <HelloWorld name={this.state.name} />
    );
  }
}

export default HelloWorldContainer;
