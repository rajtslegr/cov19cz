import React, { Component } from 'react';

import Error from '../../components/UI/Error';

class WithError extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <Error />;
    }

    return children;
  }
}

export default WithError;
