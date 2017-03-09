import { combineReducers } from 'redux';
import counter from './counter';
import routes from './routes';
import services from './services';

export default combineReducers({
  counter,
  routes,
  services
});
