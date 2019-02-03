import emitToActionCreator from './emitToAction';
import actionToEmitCreator from './actionToEmit';

const { registerCreator } = require('redux-rxjs-socket.io');

module.exports = () => {
  const emitMapper = emitToActionCreator();
  const actionMapper = actionToEmitCreator();

  return registerCreator(emitMapper, actionMapper);
};
