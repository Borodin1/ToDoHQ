import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import 'react-datepicker/dist/react-datepicker.css';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { Provider } from 'react-redux';
import { store } from './store.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename='ToDoHQ'>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
