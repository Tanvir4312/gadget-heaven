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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
