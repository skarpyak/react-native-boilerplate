import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import * as servicesActions from '../actions/services';
import constants from '../utils/constants';
import ListItem from '../components/ListItem';
import NavigationBar from '../components/NavigationBar';

@connect(
  state => ({
    ...state.services
  }),
  dispatch => bindActionCreators(servicesActions, dispatch)
)

export default class Services extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

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
    const { services } = this.props;
    const { filter } = this.state;

    const filterdServices = services.filter((item) => {
      if(!filter) {
        return true;
      } else if((item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) ||
         (item.category.toLowerCase().indexOf(filter.toLowerCase()) >= 0)) {
        return true;
      }
      return false;
    })

    return (
      <View style={styles.container}>
        <NavigationBar title={constants.labels.services.navigationBar.title}
                       rightButtonConfig={{title: constants.labels.services.navigationBar.addButtonLabel, handler: this.addItem}} />
        <TextInput
          style={styles.filter}
          onChangeText={(filter) => this.setState({filter})}
          value={this.state.text}
          placeholder={constants.labels.services.search.placeholder}
          placeholderTextColor={constants.colors.tuna}
        />
        <View style={styles.body}>
          {
            filterdServices.map((item) => <ListItem key={item.id} item={item} onPress={this.editItem.bind(this, item.id)} />)
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
    flex: 1,
    width: Dimensions.get('window').width,
  },
  filter: {
    width: Dimensions.get('window').width,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: constants.colors.white
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