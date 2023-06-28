import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom"
import { Suspense } from 'react'
import getRoutes from './shack-get-routes'

let routes = getRoutes()
console.log(routes)

const App = () => {
  return useRoutes(routes)
}

createRoot(document.getElementById('react-root')).render(<BrowserRouter>
  <Suspense fallback={'loading...'}>
    <App />
  </Suspense>
</BrowserRouter>)
