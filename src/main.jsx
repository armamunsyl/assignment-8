import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes'
import Loading from './Components/Loading/Loading';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Suspense fallback={ <Loading></Loading> }>
     <RouterProvider router={router} />
     </Suspense>
  </StrictMode>,
)
