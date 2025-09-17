import React from 'react';

class Count extends React.Component {
  render() {
    return (
      <p>Total tasks: {this.props.count}</p>
    );
  }
}

export default Count;
