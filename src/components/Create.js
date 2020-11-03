import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Button, CardSection} from './common';
import * as actions from '../actions';
import Form from './Form';

const Create = (props) => {
  const {dataCalculate} = props;

  const calculate = () => {
    dataCalculate(props);
  };

  return (
    <View>
      <Form />
      <CardSection>
        <Button title="Calculate" onPress={calculate} />
      </CardSection>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {
    unitMasala,
    unitTobacoo,
    rateMasala,
    rateTobacoo,
    GSTRate,
  } = state.formBilling;
  return {
    unitMasala,
    unitTobacoo,
    rateMasala,
    rateTobacoo,
    GSTRate,
  };
};

export default connect(mapStateToProps, actions)(Create);
