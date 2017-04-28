import React from 'react';
import { StyleSheet, View } from 'react-native';

class Container extends React.Component {
  render() {
    return (
        <View style={styles.container}>
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