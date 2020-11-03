import {combineReducers} from 'redux';
import BillReducer from './BillReducer';

export default combineReducers({
  formBilling: BillReducer,
});
