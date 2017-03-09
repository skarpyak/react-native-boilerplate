import { SERVICE_ITEMS_LOAD, SERVICE_ITEM_ADD, SERVICE_ITEM_EDIT, SERVICE_ITEM_SAVE } from '../actions/services'

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
function alerts (state = Object.assign({}, initialState), action) {
  switch (action.type) {
    case SERVICE_ITEMS_LOAD:
      return { ...state, isLoaded: true, services: action.data };
    case SERVICE_ITEM_ADD:
      const newService = {
        ...initialState,
        id: Math.max(state.services.map((item) => item.id)) + 1,
      };
      return { ...state, service: newService };
    case SERVICE_ITEM_EDIT:
      const service = state.services.filter((item) => item.id === action.id)[0];
      return { ...state, service };
    case SERVICE_ITEM_SAVE:
      const idx = state.services.indexOf(action.item);
      if (idx >= 0) {
        return { ...state }
      } else {
        return { ...state, services: [...state.services, action.item] };
      }
    default:
      return state
  }
}

export default alerts
