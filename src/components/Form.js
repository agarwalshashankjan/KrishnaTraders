import React from 'react';
import {Text, TextInput, View, Picker, StyleSheet} from 'react-native';
import Table from './common/Table';

const Form = () => {
  return (
    <View style={styles.view}>
      <Text>Date:</Text>
      <TextInput placeholder="DD/MM/YYYY" />
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>~~~</Text>
        </View>
        <View style={styles.cells}>
          <Text>Unit</Text>
        </View>
        <View style={styles.cells}>
          <Text>Rate</Text>
        </View>
        <View style={styles.cells}>
          <Text>Amount</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Masala</Text>
        </View>
        <View style={styles.cells}>
          <TextInput placeholder="Number" />
        </View>
        <View style={styles.cells}>
          <TextInput placeholder="Price" />
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Tobacoo</Text>
        </View>
        <View style={styles.cells}>
          <TextInput placeholder="Number" />
        </View>
        <View style={styles.cells}>
          <TextInput placeholder="Price" />
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
      <View style={{margin: 5}}></View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Select GST Rate</Text>
        </View>
        <View style={styles.cells}>
          <Text>Accessible Value</Text>
        </View>
        <View style={styles.cells}>
          <Text>CGST | SGST</Text>
        </View>
        <View style={styles.cells}>
          <Text>Total Tax</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Picker style={{flex: 2.5}} mode="dropdown">
            <Picker.Item label="0%" value="0" />
            <Picker.Item label="5%" value="5" />
            <Picker.Item label="12%" value="12" />
            <Picker.Item label="28%" value="28" />
          </Picker>
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
        <View style={styles.cells}>
            <Text>---</Text>
          </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
      <View style={{margin: 5}}></View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Total Amount In Words: ---</Text>
        </View>
        <View style={styles.cells}>
          <Text>cess @60%</Text>
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>cess @160%</Text>
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Round OFF</Text>
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Gross Total</Text>
        </View>
        <View style={styles.cells}>
          <Text>---</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  cells: {
    flex: 1,
    padding: 5,
    alignSelf: 'stretch',
    borderWidth: 1,
  },
});

export default Form;
