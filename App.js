import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EntryList from './components/EntryList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editableText: '',
      disableRemove: false,
      items: []
    };
    console.log("initial state: " + JSON.stringify(this.state));
  }

  _hasDangler(items) {
    return items.length > 0 && items[items.length - 1] === -1;
  }

  _pushRow() {
    // copy
    let newItems = JSON.parse(JSON.stringify(this.state.items))

    // push
    if (!this._hasDangler(newItems)) {
      newItems.push(-1);
    }

    // setState and trigger a re-render
    this.setState({ items: newItems });
  }

  _replaceRow(index, text) {
    if (text === '') {
      // we don't want to save empty text
      return;
    }

    // copy
    let newItems = JSON.parse(JSON.stringify(this.state.items))

    // replace
    newItems[index] = text;

    // push new row too
    newItems.push(-1);

    // setState and trigger a re-render
    this.setState({
      editableText: '',
      // disableRemove because the keyboard close event will trigger removal of the dangling row just added
      disableRemove: true,
      items: newItems
    });
  }

  _removeDanglingRow() {
    if (!this._hasDangler(this.state.items) || this.state.disableRemove) {
      // consume the disableRemove flag
      this.setState({ disableRemove: false });
      return;
    }

    // copy
    let newItems = JSON.parse(JSON.stringify(this.state.items))

    // delete last element
    newItems.splice(newItems.length - 1, 1);

    // setState and trigger a re-render
    this.setState({ items: newItems });
  }

  render() {
    console.log("render state: " + JSON.stringify(this.state));
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>My TODO App</Text>
        </View>
        <KeyboardAwareScrollView
          style={styles.scrollView}
          extraHeight={90}
          onKeyboardWillHide={(frames: Object) => {
            this._removeDanglingRow();
          }}
          >
          <EntryList
            editableText={this.state.editableText}
            values={this.state.items}
            onChangeText={(text) => this.setState({ editableText: text })}
            onSubmit={(idx, text) => this._replaceRow(idx, text)}
            onNewRow={() => this._pushRow()}
          />
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
});
