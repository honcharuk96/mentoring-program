import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(`Error: ${error}`);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(`Error: ${error} - ErrorInfo: ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
