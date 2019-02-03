import { Subject, NEVER } from 'rxjs';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Client as ClientCreator } from '@hatchapp/client';
import epicCreator from './epics/index';
import reducer from './reducers/index';
import ServerConfig from '../constants/ServerConfig';

const Client = ClientCreator({ backend: { base_url: ServerConfig.client.base_url } });

const { createAnonymous } = Client;

const { token$ } = createAnonymous();
const action$ = new Subject();
const state$ = new Subject();

function stealMiddleware(ra$, rs$) {
  ra$.subscribe(action$);
  rs$.subscribe(state$);
  return NEVER;
}

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicIndex = epicCreator(token$);
const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(epicIndex, stealMiddleware);
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware),
  ),
);

epicMiddleware.run(rootEpic);

export default store;
