import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store} from './Store/index.js';
import { RouterProvider } from 'react-router-dom';
import { ShopRouter } from './Router/ShopRouter.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <RouterProvider router={ShopRouter} />
      </Provider>
    </QueryClientProvider>
)

// Class recording missin tai practice kora hoi nai. 