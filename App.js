import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entry from './components/Entry';
import NewEntry from './components/NewEntry';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['Hello World 1', 'Hello World 2', 'Hello World 3'] };
    console.log("state: " + JSON.stringify(this.state));
  }

  _getItems() {
    let items = [];
    this.state.items.forEach((item, idx) => {
      items.push(<Entry
        key={idx}
        text={item}
      />);
    });
    items.push(<NewEntry key={this.state.items.length}/>);
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
        <View style={styles.body}>
        {this._getItems()}
        </View>
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
  body: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 15,
    alignItems: 'center',
    borderColor: '#27ae60',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
