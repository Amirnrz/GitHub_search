// library imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

// file imports
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages"


// create route
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path="*" element={<Error/>} />
    <Route index element={<Dashboard/>}/>
    <Route path='login' element={<Login/>}/>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
