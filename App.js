import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entry from './components/Entry';
import NewEntry from './components/NewEntry';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>My TODO App</Text>
        </View>
        <View style={styles.body}>
          <Entry text={"Hello World 1"}/>
          <Entry text={"Hello World 2"}/>
          <Entry text={"Hello World 3"}/>
          <NewEntry/>
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
