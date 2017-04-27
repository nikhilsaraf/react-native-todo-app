import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Entry extends React.Component {
  render() {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>
            {this.props.text}
            </Text>
        </View>
    );
  }
}

Entry.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  box: {
    alignSelf: 'stretch',
    margin: 6,
    backgroundColor: '#16a085',
    height: 20,
  },
  text: {
    padding: 4,
    paddingLeft: 7,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
});

export default Entry