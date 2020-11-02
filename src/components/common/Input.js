import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  console.log('hie');
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#000',
    fontSize: 14,
    lineHeight: 23,
    flex: 1,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
  },
});

export {Input};
