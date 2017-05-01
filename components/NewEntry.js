/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Box from './Box';

class NewEntry extends React.Component {
    render() {
        return (
            <Box
                style={styles.box}
                numberOfLines={1}
                >
                <Text
                    style={styles.plusText}
                    onPress={this.props.callback}
                >
                +
                </Text>
            </Box>
        );
    }
}

NewEntry.propTypes = {
    callback: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#27ae60',
    borderColor: 'transparent',
    height: 16,
    marginBottom: 16,
  },
  plusText: {
    paddingLeft: 4,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NewEntry;