import {
  SERVICE_ITEMS_LOAD,
  SERVICE_ITEM_ADD,
  SERVICE_ITEM_EDIT,
  SERVICE_ITEM_SAVE,
  SERVICE_ITEM_CHANGE} from '../actions/services'

const emptyService = {
  name: '',
  price: 0.00,
  description: '',
  duration: 0,
  image: '',
}

let initialState = {
  services: [],
  isLoaded: false,
  service: { ...emptyService },
}

// Takes care of changing the application state
export default (state = Object.assign({}, initialState), action) => {
  switch (action.type) {
    case SERVICE_ITEMS_LOAD:
      return { ...state, isLoaded: true, services: action.data };
    case SERVICE_ITEM_CHANGE:
      return { ...state, isLoaded: true, service: action.data };
    case SERVICE_ITEM_ADD:
      const newService = {
        ...emptyService,
        id: Math.max(...state.services.map((item) => item.id)) + 1,
      };
      return { ...state, service: newService };
    case SERVICE_ITEM_EDIT:
      const service = state.services.filter((item) => item.id === action.id)[0];
      return { ...state, service: {...service} };
    case SERVICE_ITEM_SAVE:
      const items = state.services.filter((item) => item.id === action.data.id);
      if (items.length) {
          const idx = state.services.indexOf(items[0]);
          state.services[idx] = action.data;
          return { ...state, services: [...state.services] }
      } else {
        return { ...state, services: [...state.services, action.data] };
      }
    default:
      return state
  }
}