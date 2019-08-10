import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import forgotPassword from './forgotPasswordReducer';
import tools from './tools/toolsReducer';
import list from './tools/listReducer';
import add from './employees/addReducer';
import deleteEmployee from './employees/deleteReducer';
import fetch from './employees/fetchReducer';
import employees from './employees/employeesReducer';
import deleteTool from './tools/deleteToolReducer';
import profile from './employees/profileReducer';
import update from './employees/updateReducer';
import search from './employees/searchReducer';
import updateTool from './tools/updateToolReducer';

const rootReducer = combineReducers({
  register,
  login,
  tools,
  list,
  add,
  deleteEmployee,
  fetch,
  employees,
  deleteTool,
  profile,
  update,
  updateTool,
  search,
  forgotPassword,
});

export default rootReducer;