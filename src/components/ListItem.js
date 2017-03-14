import React from 'react'
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import constants from '../utils/constants';
import picture from '../assets/images.png';

export default (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.row}>
        <View>
          <Image  style={styles.image} source={props.item.image ? {uri: props.item.image} : picture} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.item.name}</Text>
          <Text style={styles.text}>{props.item.duration}min. - ${props.item.price} - {props.item.category} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 14,
    color: constants.colors.white
  }
});
