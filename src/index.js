import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const context = createContext
const CtxProvider = context.Provider
export const CtxConsumer = context.Consumer

const routing = (
  <BrowserRouter>
  <CtxProvider value ={{dataSet: "jakieś"}}>
    <div>
      
    </div>
  </CtxProvider>
  </BrowserRouter>
  )





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

