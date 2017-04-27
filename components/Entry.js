import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Box from './Box';

class Entry extends React.Component {
  render() {
    return (
        <Box>
          <Text style={styles.text}>{this.props.text}</Text>
        </Box>
    );
  }
}

Entry.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
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

export default Entry;