import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Entry from './Entry';
import EditableEntry from './EditableEntry';
import NewEntry from './NewEntry';

class EntryList extends React.Component {
    render() {
        let items = [];
        this.props.values.forEach((item, idx) => {
          if (item.isHidden) {
            return;
          }

          if (item.isEditable) {
            items.push(<EditableEntry
              key={idx}
              text={item.text}
              onChangeText={(text) => this.props.onChangeText(idx, text)}
              onSubmit={(text) => this.props.onSubmit(idx, text)}
            />);
          } else {
            const entry = (
              <Entry
                text={item.text}
                icon1={this.props.icon1}
                icon2={this.props.icon2}
                onPressIcon1={() => { this.props.onPressIcon1(idx); }}
                onPressIcon2={() => { this.props.onPressIcon2(idx); }}
              />);
            const touchableEntry = (
              <TouchableOpacity
                key={idx}
                style={styles.tappable}
                onPress={() => this.props.onPress(idx)}>
              {entry}
              </TouchableOpacity>
            );
            items.push(touchableEntry);
          }
        });

        // item for plus sign
        if (this.props.showPlus) {
          items.push(<NewEntry
            key={this.props.values.length}
            callback={this.props.onNewRow}
          />);
        }

        return (
            <View style={styles.body}>
            {items}
            </View>
        );
    }
}

EntryList.propTypes = {
    showPlus: PropTypes.bool.isRequired,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isEditable: PropTypes.bool.isRequired,
        isHidden: PropTypes.bool.isRequired
      })).isRequired,
    icon1: PropTypes.string.isRequired,
    icon2: PropTypes.string.isRequired,
    onPressIcon1: PropTypes.func.isRequired,
    onPressIcon2: PropTypes.func.isRequired,
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    onSubmit: PropTypes.func,
    onNewRow: PropTypes.func
}

const styles = StyleSheet.create({
    tappable: {
        alignSelf: 'stretch',
    },
    body: {
        flex: 1,
        paddingTop: 2,
        paddingBottom: 2,
        alignSelf: 'stretch',
        margin: 15,
        alignItems: 'center',
        backgroundColor: '#27ae60',
        borderColor: '#27ae60',
        borderStyle: 'solid',
        borderRadius: 8,
        borderWidth: 1,
    },
});

export default EntryList;