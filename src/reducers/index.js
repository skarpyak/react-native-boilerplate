import { combineReducers } from 'redux';
import routes from './routes';
import services from './services';

export default combineReducers({
  routes,
  services
});
