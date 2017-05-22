/**
 * @flow
 */

import React from 'react';
import { AsyncStorage } from 'react-native';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import AppMain from './AppMain';
import reducer from './reducers/Reducer';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

// add `autoRehydrate` as an enhancer to the store (note: `autoRehydrate` is not a middleware)
const store = createStore(
  reducer,
  undefined,
  compose(applyMiddleware(), autoRehydrate())
);

// begin periodically persisting the store
// use immutableTransform so we can save and hydrate Immutable objects
persistStore(
  store,
  {
    storage: AsyncStorage,
    transforms: [immutableTransform()]
  },
  () => { console.log('data rehydration complete!'); }
);

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
