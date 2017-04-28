import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Box from './Box';

class EditableEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }

  render() {
    return (
        <Box>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({ text: text }) }
                onSubmitEditing={(event) => this.props.onSubmit(event.nativeEvent.text)}
                autoFocus={true}
                value={this.state.text}
            />
        </Box>
    );
  }
}

EditableEntry.propTypes = {
  text: PropTypes.string.isRequired,
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