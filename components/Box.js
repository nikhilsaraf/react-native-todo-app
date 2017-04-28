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
    backgroundColor: '#80ed8e',
    height: 32,
    borderColor: '#80ed8e',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});

export default Box;