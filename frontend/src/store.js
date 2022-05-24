
import{createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { noteListReducer } from './reducers/notesReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList:noteListReducer,
    userUpdate: userUpdateReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem("userInfo"))
:null;

const intilaState = {
userLogin:{userInfo: userInfoFromStorage},
};

const middleware = [thunk];

const store = createStore(
reducer,
intilaState,
composeWithDevTools(applyMiddleware(...middleware))
);

export default store;