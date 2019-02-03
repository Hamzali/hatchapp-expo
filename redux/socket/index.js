const emitToActionCreator = require('./emitToAction');
const actionToEmitCreator = require('./actionToEmit');
const { registerCreator } = require('redux-rxjs-socket.io');

module.exports = () => {
	const emitMapper = emitToActionCreator();
	const actionMapper = actionToEmitCreator();

	return registerCreator(emitMapper, actionMapper);
};
