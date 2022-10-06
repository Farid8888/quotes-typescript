import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import QuotesReducer from '../src/store/reducer'
import commentsReducer from './store/commentsReducer';


const store =configureStore({
  reducer:{
    quotes:QuotesReducer,
    comments:commentsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);

