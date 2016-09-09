import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AndroidBase from './AndroidBase';
import { checkLogin } from '../Auth/actions';

class Base extends Component {
  static propTypes = {
    title: PropTypes.string,
    toolbarBackgroundColor: PropTypes.string,
    children: PropTypes.node,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }
  render() {
    const { title, toolbarBackgroundColor, children } = this.props;
    return (
      <AndroidBase title={title} toolbarBackgroundColor={toolbarBackgroundColor}>
        {children}
      </AndroidBase>
    );
  }
}

export default connect()(Base);
