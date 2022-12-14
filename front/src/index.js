import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/configureStore";
import {Provider} from "react-redux";

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

