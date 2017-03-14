import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native';
import constants from '../utils/constants';

export default (props) => {

  leftButton = props.leftButtonConfig ? <TouchableOpacity onPress={props.leftButtonConfig.handler} style={styles.action}>
      <Text style={styles.actionText}>{props.leftButtonConfig.title}</Text>
    </TouchableOpacity> : null;

  rightButton = props.rightButtonConfig ? <TouchableOpacity onPress={props.rightButtonConfig.handler}>
      <Text style={styles.actionText}>{props.rightButtonConfig.title}</Text>
    </TouchableOpacity> : null;

  return (
    <View style={styles.toolbar}>
      <View style={styles.leftButton}>
        { leftButton }
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>
          {props.title}
        </Text>
      </View>
      <View style={styles.rightButton}>
        { rightButton }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  toolbar: {
    width: Dimensions.get('window').width,
    height: 50,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',
    justifyContent: 'space-between',
    borderBottomWidth: 5,
    borderBottomColor: constants.colors.black
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width/3,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width/3,
    paddingLeft: 10
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width/3,
    paddingRight: 10
  },
  actionText: {
    fontSize: 20,
    color: constants.colors.cabaret
  },
  text: {
    fontSize: 20,
    color: constants.colors.white
  },
});
