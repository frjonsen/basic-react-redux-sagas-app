import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {StoreState} from './types';
import {postReducer} from './reducers'
import { Provider } from 'react-redux';
import {RequestButton, PostList} from './containers';
import * as sagas from './sagas';

const initialState: StoreState = {
  posts: []
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(postReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas.watchGetPostsRequest);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <RequestButton />
      <PostList />
    </div>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
