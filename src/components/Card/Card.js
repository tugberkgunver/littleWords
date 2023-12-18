import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import card_style from './Card.style';

const Card = props => {
  return (
    <View style={card_style.card_container}>
      <View style={card_style.card_body}>
        <Text style={card_style.card_title}>{props.title}</Text>
        <Text style={card_style.card_text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => Alert.alert('Hello ' + props.title)}
        style={card_style.card_button_container}>
        <Text style={card_style.card_button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
