import { Subject, NEVER } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import epicCreator from './epics/index';
import socketRegisterCreator from './socket/index';
import reducer from "./reducers/index";
import ServerConfig from "../constants/ServerConfig";
import { Client as ClientCreator, Socket as SocketCreator } from '@hatchapp/client';

const Client = ClientCreator({ backend: { base_url: ServerConfig.client.base_url } });
const Socket = SocketCreator({ url: ServerConfig.socket.url });

const { createAnonymous } = Client;
const { createSocket } = Socket;

const { token$ } = createAnonymous();
const socket$ = createSocket(token$, 'test');
const action$ = new Subject();
const state$ = new Subject();

function stealMiddleware(ra$, rs$){
	ra$.subscribe(action$);
	rs$.subscribe(state$);
	return NEVER;
}

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const socketRegister = socketRegisterCreator();
const epicIndex = epicCreator();
const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(epicIndex, stealMiddleware);
const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(epicMiddleware),
	),
);

epicMiddleware.run(rootEpic);
store.dispatch({ type: 'hello', payload: 'world' });
socket$.pipe(switchMap((socket) => socketRegister(socket, action$, state$, store.dispatch))).subscribe(() => null);

export default store;
