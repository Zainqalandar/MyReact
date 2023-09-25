import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './App/Store.js'
import { ContextProvider } from './context/userContext.js'
import { UserContext } from './context/userContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider value={UserContext}>
      <Provider store={Store} >
        <App />
      </Provider>
    </ContextProvider>
  </React.StrictMode>,
)
