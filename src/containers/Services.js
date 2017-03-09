import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import * as servicesActions from '../actions/services';
import constants from '../utils/constants';
import ListItem from '../components/ListItem';
import NavigationBar from '../components/NavigationBar';

@connect(
  state => ({
    services: state.services
  }),
  dispatch => bindActionCreators(servicesActions, dispatch)
)

export default class Services extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  componentDidMount() {
    let { loadData, isLoaded } = this.props;
    if(!isLoaded) {
      loadData();
    }
  }

  toService = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'service'
    });
  }

  addItem = () => {
    let { addItem } = this.props;
    addItem();
    this.toService()
  }

  editItem = (id) => {
    let { editItem } = this.props;
    editItem(id);
    this.toService()
  }

  render() {
    const { services } = this.props.services;
    console.log("services", services);

    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'Services',
    };

    return (
      <View style={styles.container}>
        <NavigationBar title="Services" rightButtonConfig={{title: 'Add', handler: this.addItem}} />
        <View style={styles.body}>
          {
            services.map((item) => <ListItem key={item.id} item={item} onPress={this.editItem.bind(this, item.id)} />)
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: constants.colors.maire,
  },
  body: {
    flex: 1
  },

  header: {
    fontSize: 14,
    textAlign: 'center',
    color: constants.colors.white
  },
  text: {
    fontSize: 14,
    color: constants.colors.white
  }
});