import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import Box from './Box';

class Entry extends React.Component {
  render() {
    return (
        <Box style={styles.box}>
          <Text style={styles.text}>{this.props.text}</Text>
          <Icon
            style={styles.icon}
            name={this.props.icon1}
            raised={true}
            color='#000'
            size={20}
            underlayColor='transparent'
            onPress={this.props.onPressIcon1}
            />
          <Icon
            style={styles.icon}
            name={this.props.icon2}
            raised={true}
            color='#000'
            size={20}
            underlayColor='transparent'
            onPress={this.props.onPressIcon2}
            />
        </Box>
    );
  }
}

Entry.propTypes = {
  text: PropTypes.string.isRequired,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  onPressIcon1: PropTypes.func.isRequired,
  onPressIcon2: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 10,
    padding: 2,
    paddingTop: 6,
    paddingLeft: 6,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  icon: {
    flex: 1,
    paddingTop: 4,
    paddingRight: 2,
  },
});

export default Entry;