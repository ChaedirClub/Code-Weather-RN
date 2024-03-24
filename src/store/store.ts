import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; 
import rootSaga from './sagas'; 
import { ApplicationState } from '../interface/reduxHome.interface';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
