import { NEVER } from 'rxjs';
import { map } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

function init(action$, state$){
	return NEVER;
}

module.exports = () => combineEpics(init);
