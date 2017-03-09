import services from '../models/services.json'

export const SERVICE_ITEMS_LOAD = 'SERVICE_ITEMS_LOAD'
export const SERVICE_ITEM_ADD = 'SERVICE_ITEM_ADD'
export const SERVICE_ITEM_EDIT = 'SERVICE_ITEM_EDIT'
export const SERVICE_ITEM_SAVE = 'SERVICE_ITEM_SAVE'

/**
 * load services
 */
export function loadData() {
  return {type: SERVICE_ITEMS_LOAD, data: services}
}

/**
 * Add service
 */
export function addItem() {
  return {type: SERVICE_ITEM_ADD}
}

/**
 * Edit service
 * @param {number} id The service id
 */
export function editItem(id) {
  return {type: SERVICE_ITEM_EDIT, id}
}

/**
 * Save service
 * @param {object} item The service item
 */
export function saveItem(item) {
  return {type: SERVICE_ITEM_SAVE, item}
}
