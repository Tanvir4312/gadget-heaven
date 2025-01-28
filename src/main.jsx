import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Gadgets from './Gadgets/Gadgets';
import DetailsGadget from './components/DetailsGadget/DetailsGadget';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer} from 'react-toastify';

import About from './components/About/About';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../gadgets.json')
          },
          {
            path: '/gadgets/:gadgetsName',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../gadgets.json')
          },
        ]
      },
      {
        path: '/detailGadget/:id',
        element: <DetailsGadget></DetailsGadget>,
        loader: () => fetch('/gadgets.json')
      },
    
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
