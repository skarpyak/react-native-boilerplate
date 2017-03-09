import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import Services from './Services';
import Service from './Service';

const { CardStack } = NavigationExperimental;

@connect(
  state => state,
  dispatch => ({ dispatch })
)
export default class Router extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleNavigation = action => {
    this.props.dispatch(action);
  }

  renderScene = props => {
    switch (props.scene.key) {
      case 'scene_services':
        return <Services navigate={this.handleNavigation} />;
      case 'scene_service':
        return <Service navigate={this.handleNavigation} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <CardStack
        direction="horizontal"
        navigationState={this.props.routes}
        renderScene={this.renderScene}
      />
    );
  }
}
