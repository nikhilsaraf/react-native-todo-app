import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Entry from './components/Entry';
import EditableEntry from './components/EditableEntry';
import NewEntry from './components/NewEntry';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    console.log("state: " + JSON.stringify(this.state));
  }

  _pushRow() {
    // copy
    let newItems = JSON.parse(JSON.stringify(this.state.items))

    // push
    if (newItems.length == 0 || newItems[newItems.length - 1] !== -1) {
      newItems.push(-1);
    }

    // setState and trigger a re-render
    this.setState({ items: newItems });
  }

  _replaceRow(index, text) {
    // copy
    let newItems = JSON.parse(JSON.stringify(this.state.items))
    // replace
    newItems[index] = text;
    // push new row too
    newItems.push(-1);

    // setState and trigger a re-render
    this.setState({ items: newItems });
  }

  _getItems() {
    let items = [];
    this.state.items.forEach((item, idx) => {
      if (item === -1) {
        items.push(<EditableEntry
          key={idx}
          text={''}
          onSubmit={(text) => this._replaceRow(idx, text)}
        />);
      } else {
        items.push(<Entry
          key={idx}
          text={item}
        />);
      }
    });
    items.push(<NewEntry
      key={this.state.items.length}
      callback={() => this._pushRow()}
    />);
    console.log("_getItems() returning items: " + JSON.stringify(items.length));
    return items;
  }

  render() {
    console.log("render state items: " + JSON.stringify(this.state.items));
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>My TODO App</Text>
        </View>
        <KeyboardAwareScrollView style={styles.scrollView} extraHeight={90}>
          <View style={styles.body}>
          {this._getItems()}
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: '#000',
  },
  scrollView: {
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
