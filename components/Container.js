/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

class Container extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
        />
        {this.props.children}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
});

export default Container;