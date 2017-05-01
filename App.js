/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Container from './components/Container';
import EntryList from './components/EntryList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableRemove: false,
      completedItems: [],
      items: []
    };
  }

  _move(fromList, toList, idx) {
    const item = this._newItem(fromList[idx].text, false, false);

    // delete
    const newFromList = this._delete(fromList, idx);

    // add
    let newToList = JSON.parse(JSON.stringify(toList));
    newToList.push(item);

    return {
      newFromList: newFromList,
      newToList: newToList
    };
  }

  _actionCompleted(idx) {
    const updated = this._move(this.state.items, this.state.completedItems, idx);
    this.setState({
      items: updated.newFromList,
      completedItems: updated.newToList
    });
  }

  _actionUndo(idx) {
    const updated = this._move(this.state.completedItems, this.state.items, idx);
    this.setState({
      items: updated.newToList,
      completedItems: updated.newFromList
    });
  }

  _delete(fromList, idx) {
    let newFromList = JSON.parse(JSON.stringify(fromList));
    newFromList.splice(idx, 1);
    return newFromList;
  }

  _actionDeleteTodo(idx) {
    const newItems = this._delete(this.state.items, idx);
    this.setState({ items: newItems });
  }

  _actionDeleteCompleted(idx) {
    const newCompletedItems = this._delete(this.state.completedItems, idx);
    this.setState({ completedItems: newCompletedItems });
  }

  _setLastRowAsEmpty(newItems) {
    const newRow = this._newItem('', true, false);
    if (newItems.length > 0 && newItems[newItems.length - 1].isHidden === true) {
      // set row as empty
      newItems[newItems.length - 1] = newRow;
    } else {
      // push new row
      newItems.push(newRow);
    }
  }

  _save(idx, text) {
    let newItems = JSON.parse(JSON.stringify(this.state.items));
    if (text.trim().length == 0) {
      // remove it
      newItems.splice(idx, 1);
    } else {
      // save row as non-editable
      newItems[idx] = this._newItem(text, false, false);

      // new row
      if (idx == newItems.length - 1) {
        this._setLastRowAsEmpty(newItems);
      }
    }

    // disable remove for this new row
    this.setState({
      disableRemove: true,
      items: newItems
    });
  }

  _plusRow() {
    let newItems = JSON.parse(JSON.stringify(this.state.items));
    this._setLastRowAsEmpty(newItems);
    this.setState({ items: newItems });
  }

  _edit(idx, text) {
    let newItems = JSON.parse(JSON.stringify(this.state.items));
    newItems[idx] = this._newItem(text, true, false);
    this.setState({ items: newItems });
  }

  _newItem(text, isEditable, isHidden) {
    return {
      text: isEditable ? text : text.trim(),
      isEditable: isEditable,
      isHidden: isHidden
    };
  }

  _keyboardClosed() {
    if (this.state.disableRemove) {
      // don't remove, only consume the flag
      this.setState({ disableRemove: false });
      return;
    }

    // make editable rows non-editable
    let newItems = this.state.items.map((item) => this._newItem(item.text, false, item.isHidden));
    // filter out empty rows
    newItems = newItems.filter((item) => item.text.trim().length != 0);
    this.setState({ items: newItems });
  }

  render() {
    console.log("render state: " + JSON.stringify(this.state));
    return (
      <Container>
        <ScrollableTabView
          style={styles.tabView_view}
          tabBarActiveTextColor="#000"
          tabBarInactiveTextColor="#80ed8e"
          tabBarUnderlineStyle={styles.tabView_underline}
          tabBarTextStyle={styles.tabView_textStyle}
          >
          <KeyboardAwareScrollView
            tabLabel="To Do"
            style={styles.scrollView}
            extraHeight={90}
            onKeyboardWillHide={() => this._keyboardClosed()}
            >
            <EntryList
              values={this.state.items}
              showPlus={true}
              icon1='check-circle'
              icon2='delete'
              onPressIcon1={(idx) => this._actionCompleted(idx) }
              onPressIcon2={(idx) => this._actionDeleteTodo(idx) }
              onPress={(idx) => this._edit(idx, this.state.items[idx].text)}
              onChangeText={(idx, text) => this._edit(idx, text)}
              onSubmit={(idx, text) => this._save(idx, text)}
              onNewRow={() => this._plusRow()}
            />
          </KeyboardAwareScrollView>
          <ScrollView
            tabLabel="Completed"
            style={styles.scrollView}
            >
            <EntryList
              values={this.state.completedItems}
              showPlus={false}
              icon1='undo'
              icon2='delete'
              onPressIcon1={(idx) => this._actionUndo(idx) }
              onPressIcon2={(idx) => this._actionDeleteCompleted(idx) }
            />
          </ScrollView>
        </ScrollableTabView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabView_view: {
    borderColor: 'transparent',
  },
  tabView_underline: {
    backgroundColor: "#000",
    height: 2,
  },
  tabView_textStyle: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  scrollView: {
    alignSelf: 'stretch',
  },
});
