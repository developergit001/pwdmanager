import React from 'react';
import model from "./models.js";
import { StoreProvider, createStore } from "easy-peasy";
import Main from './components/main';
import './App.css';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Main></Main>
    </StoreProvider>
  );
}

export default App;
