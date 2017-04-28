import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Box from './Box';

class NewEntry extends React.Component {
    render() {
        return (
            <Box>
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
  plusText: {
    padding: 4,
    paddingLeft: 7,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
});

export default NewEntry;