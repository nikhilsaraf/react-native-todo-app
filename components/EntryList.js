import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Entry from './Entry';
import EditableEntry from './EditableEntry';
import NewEntry from './NewEntry';

class EntryList extends React.Component {
    render() {
        let items = [];
        this.props.values.forEach((item, idx) => {
          if (item === -1) {
            items.push(<EditableEntry
              key={idx}
              text={this.props.editableText}
              onChangeText={this.props.onChangeText}
              onSubmit={(text) => this.props.onSubmit(idx, text)}
            />);
          } else {
            items.push(<Entry
              key={idx}
              text={item}
            />);
          }
        });

        // item for plus sign
        if (this.props.showPlus) {
          items.push(<NewEntry
            key={this.props.values.length}
            callback={this.props.onNewRow}
          />);
        }

        console.log("EntryList rendering number of items: " + JSON.stringify(items.length));

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
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])).isRequired,
    editableText: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmit: PropTypes.func,
    onNewRow: PropTypes.func
}

const styles = StyleSheet.create({
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