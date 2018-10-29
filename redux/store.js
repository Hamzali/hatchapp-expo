import {createStore, applyMiddleware} from 'redux';
import io from 'socket.io-client';
import reducer from "./reducers/index";
import SocketValues from "../constants/SocketValues";

let socket = io('http://192.168.1.25:8081');

const socketIoMiddleware = () => next => action => {
    const {payload, type} = action;
    if (type === "socket" && payload != null && payload.message != null) {
        console.log("socket event fired");
        socket.emit(payload.message, payload.data);
        return;
    }
    next(action);
};

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

const {EVENTS} = SocketValues;

Object.keys(EVENTS).forEach(eventKey => {
    socket.on(EVENTS[eventKey], data => {
        store.dispatch({type: EVENTS[eventKey], payload: data});
    });
});
socket.on('disconnect', () => {
    store.dispatch({type: EVENTS.DISCONNECTED})
})

export default store
