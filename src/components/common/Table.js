import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const Table = ({data}) => {
  const renderCell = (row) => {
    const rowData = [];
    for (let cell in row) {
      rowData.push(<View style={styles.cells}>{row[cell]}</View>);
    }
    return rowData;
  };

  return (
    <View style={styles.view}>
      <Text>Date:</Text>
      <TextInput placeholder="DD/MM/YYYY" />
      {data.map((datum) => {
        // This will render a row for each data element.
        return <View style={styles.row}>{renderCell(datum)}</View>;
      })}
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

export default Table;
