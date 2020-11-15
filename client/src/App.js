import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './store';


import NavBar from './components/NavBar';
import AddItemModal from './components/AddItemModel';
import ShoppingList from './components/ShoppingList';
import DeleteAllButton from './components/DeleteAllButton';

library.add(fas);

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <NavBar></NavBar>
        <AddItemModal></AddItemModal>
        <ShoppingList></ShoppingList>
        <DeleteAllButton></DeleteAllButton>
      </React.Fragment>
    </Provider>
  );
}

export default App;
