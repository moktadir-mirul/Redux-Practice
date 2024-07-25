import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopProvider from './Store/ShopReducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
<ShopProvider>
  <RouterProvider router={ShopRouter} />
</ShopProvider> 
)
