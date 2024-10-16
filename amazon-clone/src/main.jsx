import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {initialState ,reducer} from './utility/reducer.js'
import {DataProvider} from './components/dataProvider/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState }>
      <App />
    </DataProvider>
    
  </StrictMode>,
)
