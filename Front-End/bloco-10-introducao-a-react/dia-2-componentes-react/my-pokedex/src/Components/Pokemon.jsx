import React, { Component } from 'react';


class Pokemon extends Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props;

    return (
      <h1>{name}</h1>
    )
  }
};

export default Pokemon