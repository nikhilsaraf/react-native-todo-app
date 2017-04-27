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
    height: 20,
  },
});

export default Box;