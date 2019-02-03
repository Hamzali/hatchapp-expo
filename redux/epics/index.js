import { NEVER } from 'rxjs';
import { combineEpics } from 'redux-observable';

function init() {
  return NEVER;
}

module.exports = () => combineEpics(init);
