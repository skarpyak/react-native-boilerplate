import React, { Component, PropTypes } from 'react';
import { Dimensions, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as servicesActions from '../actions/services';
import NavigationBar from '../components/NavigationBar';
import constants from '../utils/constants';
import picture from '../assets/images.png';

@connect(
  state => ({
    ...state.services
  }),
  dispatch => bindActionCreators(servicesActions, dispatch)
)
export default class CounterContainer extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  }

  handleSave = () => {
    const { navigate, saveItem, service } = this.props;
    saveItem(service);
    navigate({ type: 'pop' });
  }

  handleChangeItem = (prop, value) => {
    const { service, changeItem } = this.props;
    const changedService = {...service};
    changedService[prop] = value;
    changeItem(changedService);
  }

  render() {
    const { service } = this.props;

    return (
      <View style={styles.container}>
        <NavigationBar title={constants.labels.service.navigationBar.title}
                       leftButtonConfig={{title: constants.labels.service.navigationBar.cancelButtonLabel, handler: this.handleBack}}
                       rightButtonConfig={{title: constants.labels.service.navigationBar.saveButtonLabel, handler: this.handleSave}} />
        <Image  style={styles.image} source={service.image ? {uri: service.image} : picture } />
        <Text style={styles.text}>{constants.labels.service.item.name}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleChangeItem.bind(this, 'name')}
          value={service.name}
          placeholder="name"
          placeholderTextColor={constants.colors.tuna}
        />
        <Text style={styles.text}>{constants.labels.service.item.category}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleChangeItem.bind(this, 'category')}
          value={service.category}
          placeholder="name"
          placeholderTextColor={constants.colors.tuna}
        />
        <Text style={styles.text}>{constants.labels.service.item.description}</Text>
        <TextInput
          style={styles.multilineTextInput}
          multiline={true}
          onChangeText={this.handleChangeItem.bind(this, 'description')}
          value={service.description}
          placeholder="name"
          placeholderTextColor={constants.colors.tuna}
        />
        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    backgroundColor: constants.colors.maire,
  },
  image: {
    width: 75,
    height: 75,
    margin: 10,
  },
  textInput: {
    width: Dimensions.get('window').width,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: constants.colors.white
  },
  multilineTextInput: {
    width: Dimensions.get('window').width,
    height: 80,
    textAlign: 'left',
    borderColor: 'gray',
    borderWidth: 1,
    color: constants.colors.white,
    textAlignVertical: 'top'
  },
  back: {
    margin: 10,
    fontSize: 20,
  },
  text: {
    width: Dimensions.get('window').width,
    textAlign: 'left',
    fontSize: 14,
    color: constants.colors.white
  }
});