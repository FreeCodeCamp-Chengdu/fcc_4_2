import React, { Component, PropTypes } from 'react';


class ChildernRender extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ChildernRender;
