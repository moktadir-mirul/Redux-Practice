import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { ShopStore } from './Store/index.js'
import { RouterProvider } from 'react-router-dom'
import { ShopRouter } from './Router/ShopRouter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={ShopStore}>
  <RouterProvider router={ShopRouter} />
</Provider>

)
