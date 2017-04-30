import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Box extends React.Component {
  render() {
    // each additional line has a smaller height
    const height = this.props.numberOfLines == 1 ? 32 : 32 + (this.props.numberOfLines - 1) * 20;
    return (
        <View style={[styles.box, {height: height}, this.props.style]}>
        {this.props.children}
        </View>
    );
  }
}

Box.propTypes = {
  numberOfLines: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  box: {
    alignSelf: 'stretch',
    margin: 6,
    backgroundColor: '#80ed8e',
    borderColor: '#80ed8e',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});

export default Box;