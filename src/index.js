import { Provider } from 'react-redux';
import configureStore from './store/configureStore';




import MainContainer from "./js/components/container/MainContainer.jsx";
import ReactDOM from "react-dom";
import React from "react";

const store = configureStore();

const wrapper = document.getElementById("create-article-form");
ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>, wrapper);