import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from './navigations';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStackScreen />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
