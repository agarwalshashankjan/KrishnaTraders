import React from 'react';
import {Text, TextInput, View, Picker} from 'react-native';
import Table from './common/Table';

const Form = () => {
  const row1 = [
    <Text>~~~</Text>,
    <Text>Unit</Text>,
    <Text>Rate</Text>,
    <Text>Amount</Text>,
  ];

  const row2 = [
    <Text>Masala</Text>,
    <TextInput placeholder="Number" />,
    <TextInput placeholder="Price" />,
    <Text>---</Text>,
  ];

  const row3 = [
    <Text>Tobacoo</Text>,
    <TextInput placeholder="Number" />,
    <TextInput placeholder="Price" />,
    <Text>---</Text>,
  ];

  const row4 = [
    <Text>Select GST Rate</Text>,
    <Text>Accessible Value</Text>,
    <Text>CGST | SGST</Text>,
    <Text>Total Tax</Text>,
  ];

  const row5 = [
    <Picker
          style={{flex: 2.5}}
          mode="dropdown">
          <Picker.Item label="0%" value="0" />
          <Picker.Item label="5%" value="5" />
          <Picker.Item label="12%" value="12" />
          <Picker.Item label="28%" value="28" />
        </Picker>,
    <Text>---</Text>,
    <Text>---</Text>,
    <Text>---</Text>,
  ];

  const row6 = [
    <Text>Total Amount In Words: ---</Text>,
    <Text>---</Text>,
    <Text>cess @60%</Text>,
    <Text>---</Text>,
  ];
  
  const row7 = [
    <Text>---</Text>,
    <Text>---</Text>,
    <Text>cess @160%</Text>,
    <Text>---</Text>,
  ];

  const row8 = [
    <Text>---</Text>,
    <Text>---</Text>,
    <Text>Round OFF</Text>,
    <Text>---</Text>,
  ];

  const row9 = [
    <Text>---</Text>,
    <Text>---</Text>,
    <Text>Gross Total</Text>,
    <Text>---</Text>,
  ];

  return (
    <View>
      <Table data={[row1, row2, row3, row4, row5, row6, row7, row8, row9]} />
    </View>
  );
};

export default Form;
