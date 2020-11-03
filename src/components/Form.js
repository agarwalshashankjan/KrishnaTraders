import React from 'react';
import {Text, TextInput, View, Picker, StyleSheet} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

const Form = (props) => {
  const {
    date,
    unitMasala,
    unitTobacoo,
    rateMasala,
    rateTobacoo,
    amtMasala,
    amtTobacoo,
    GSTRate,
    accessibleValue,
    GST,
    totalTax,
    cess60,
    cess160,
    roundOff,
    Gross,
    dataUpdate,
  } = props;

  const gst = GST;

  return (
    <View style={styles.view}>
      <Text>Date:</Text>
      <TextInput
        placeholder="DD/MM/YYYY"
        value={date}
        onChangeText={(text) => dataUpdate('date', text)}
      />
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
          <TextInput
            placeholder="Number"
            value={unitMasala}
            onChangeText={(text) => dataUpdate('unitMasala', text)}
          />
        </View>
        <View style={styles.cells}>
          <TextInput
            placeholder="Price"
            value={rateMasala}
            onChangeText={(text) => dataUpdate('rateMasala', text)}
          />
        </View>
        <View style={styles.cells}>
          {amtMasala ? <Text>{amtMasala}</Text> : <Text>---</Text>}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Tobacoo</Text>
        </View>
        <View style={styles.cells}>
          <TextInput
            placeholder="Number"
            value={unitTobacoo}
            onChangeText={(text) => dataUpdate('unitTobacoo', text)}
          />
        </View>
        <View style={styles.cells}>
          <TextInput
            placeholder="Price"
            value={rateTobacoo}
            onChangeText={(text) => dataUpdate('rateTobacoo', text)}
          />
        </View>
        <View style={styles.cells}>
          {amtTobacoo ? <Text>{amtTobacoo}</Text> : <Text>---</Text>}
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
          <Picker
            style={{flex: 2.5}}
            mode="dropdown"
            selectedValue={GSTRate}
            onValueChange={(rate) => dataUpdate('GSTRate', rate)}>
            <Picker.Item label="0%" value="0" />
            <Picker.Item label="5%" value="5" />
            <Picker.Item label="12%" value="12" />
            <Picker.Item label="28%" value="28" />
          </Picker>
        </View>
        <View style={styles.cells}>
          {accessibleValue ? <Text>{accessibleValue}</Text> : <Text>---</Text>}
        </View>
        <View style={styles.cells}>
          {GST ? (
            <Text>
              {gst / 2} | {gst / 2}
            </Text>
          ) : (
            <Text>---</Text>
          )}
        </View>
        <View style={styles.cells}>
          {totalTax ? <Text>{totalTax}</Text> : <Text>---</Text>}
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
          {cess60 ? <Text>{cess60}</Text> : <Text>---</Text>}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>cess @160%</Text>
        </View>
        <View style={styles.cells}>
          {cess160 ? <Text>{cess160}</Text> : <Text>---</Text>}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Round OFF</Text>
        </View>
        <View style={styles.cells}>
          {roundOff ? <Text>{roundOff}</Text> : <Text>---</Text>}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cells}>
          <Text>Gross Total</Text>
        </View>
        <View style={styles.cells}>
          {Gross ? <Text>{Gross}</Text> : <Text>---</Text>}
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

const mapStateToProps = (state) => {
  const {
    date,
    unitMasala,
    unitTobacoo,
    rateMasala,
    rateTobacoo,
    amtMasala,
    amtTobacoo,
    GSTRate,
    accessibleValue,
    GST,
    totalTax,
    cess60,
    cess160,
    roundOff,
    Gross,
  } = state.formBilling;
  return {
    date,
    unitMasala,
    unitTobacoo,
    rateMasala,
    rateTobacoo,
    amtMasala,
    amtTobacoo,
    GSTRate,
    accessibleValue,
    GST,
    totalTax,
    cess60,
    cess160,
    roundOff,
    Gross,
  };
};

export default connect(mapStateToProps, actions)(Form);
