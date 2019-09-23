import React from 'react';
import './App.css';
import List from './components/List';
import {Provider} from 'react-redux';
import store from './example';
function App() {
  return (
      <Provider store={store}>
        <List></List>
      </Provider>
  );
}


export default App;
