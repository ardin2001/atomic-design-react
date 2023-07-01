import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/error.jsx'
import ProductsPage from './pages/products';
import CounterPage from './pages/counter';

const routers = createBrowserRouter([
  {
    path : "/",
    element : <div>Hello World!</div>,
    errorElement : <ErrorPage />
  },
  {
    path : "/login",
    element : <LoginPage/>
  },
  {
    path : "/register",
    element : <RegisterPage />
  },
  {
    path : "/products",
    element : <ProductsPage />
  },
  {
    path : "/counters",
    element : <CounterPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routers} />
)
