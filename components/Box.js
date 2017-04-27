import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Box extends React.Component {
  render() {
    return (
        <View style={styles.box}>
        {this.props.children}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'stretch',
    margin: 6,
    backgroundColor: '#16a085',
    height: 32,
    borderColor: '#16a085',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});

export default Box;