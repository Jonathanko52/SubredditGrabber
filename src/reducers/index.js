import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './reducers';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});