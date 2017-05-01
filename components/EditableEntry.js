/**
 * @flow
 */

import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Box from './Box';

class EditableEntry extends React.Component {
  render() {
    return (
        <Box numberOfLines={1}>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.props.onChangeText(text)}
                onSubmitEditing={(event) => this.props.onSubmit(event.nativeEvent.text)}
                autoFocus={true}
                value={this.props.text}
                returnKeyType="done"
            />
        </Box>
    );
  }
}

EditableEntry.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textInput: {
    paddingTop: 6,
    paddingLeft: 6,
    height: 28,
    color: '#27ae60',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default EditableEntry;