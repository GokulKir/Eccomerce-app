import React from 'react';
import store from './redux/Store';
import { Provider as StoreProvider } from 'react-redux';
import App  from './App';
export default function Join(){
    return (
        <StoreProvider store={store}>
          <App/>
        </StoreProvider>

    )
}