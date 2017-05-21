/**
 * @flow
 */

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppMain from './AppMain';
import reducer from './reducers/Reducer';

const store = createStore(reducer);

export default class App extends React.Component {

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppMain />
      </Provider>
    );
  }
}
